export default function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#05090f]" />

      {/* Main directional gradient — dark navy */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(155deg, #0d1e38 0%, #080e1c 45%, #050810 100%)',
        }}
      />

      {/* Top-center blue radial glow — evokes depth / spotlight */}
      <div
        className="absolute inset-0 animate-pulse-slow"
        style={{
          background:
            'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(37,99,235,0.18) 0%, transparent 65%)',
        }}
      />

      {/* Bottom-left warm accent — adds dimension */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 45% at -5% 105%, rgba(20,55,120,0.2) 0%, transparent 60%)',
        }}
      />

      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
}
