import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import VideoBackground from './VideoBackground';
import WhatsAppButton from './WhatsAppButton';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <VideoBackground />
      <Navbar />
      <main className="flex-1 pt-20 md:pt-24">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
