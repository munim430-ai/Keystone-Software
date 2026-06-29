import { useState, useEffect } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}

export default function AnimatedHeading({
  text,
  className = '',
  delay = 200,
  charDelay = 30,
}: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Support both real newlines (from {`...`}) and literal \n (from "...")
  const lines = text.split(/\n|\\n/);
  let globalCharIndex = 0;

  return (
    <div className={className}>
      {lines.map((line, lineIndex) => {
        const words = line.split(' ');
        return (
          <div key={lineIndex}>
            {words.map((word, wordIndex) => {
              return (
                // Wrap each word in whitespace-nowrap so words never split mid-character
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {word.split('').map((char) => {
                    const stagger = globalCharIndex * charDelay;
                    globalCharIndex++;
                    return (
                      <span
                        key={globalCharIndex}
                        className="inline-block transition-all"
                        style={{
                          opacity: started ? 1 : 0,
                          transform: started ? 'translateX(0)' : 'translateX(-18px)',
                          transitionDuration: '500ms',
                          transitionDelay: `${stagger}ms`,
                          transitionProperty: 'opacity, transform',
                          transitionTimingFunction: 'ease-out',
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                  {/* Space between words (also animated) */}
                  {wordIndex < words.length - 1 && (
                    <span
                      className="inline-block transition-all"
                      style={{
                        opacity: started ? 1 : 0,
                        transitionDuration: '500ms',
                        transitionDelay: `${globalCharIndex * charDelay}ms`,
                      }}
                    >
                      &nbsp;
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
