import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { ReservationsSection } from '@/components/sections/reservations';
import { PrivateEventsSection } from '@/components/sections/private-events';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ReservationsSection />
        <PrivateEventsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
