export default function VideoBackground() {
  return (
    <video
      src="/hero-bg.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="fixed inset-0 w-full h-full object-cover -z-10"
    />
  );
}
