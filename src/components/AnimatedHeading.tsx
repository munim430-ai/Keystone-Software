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

  const lines = text.split('\n');
  let charIndexGlobal = 0;

  return (
    <div className={className}>
      {lines.map((line, lineIndex) => {
        const chars = line.split('');
        return (
          <div key={lineIndex} className="block">
            {chars.map((char, charIndex) => {
              charIndexGlobal++;
              const stagger =
                lineIndex * chars.length * charDelay + charIndex * charDelay;
              return (
                <span
                  key={`${lineIndex}-${charIndex}`}
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
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
