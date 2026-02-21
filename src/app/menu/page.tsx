import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MenuSection } from '@/components/sections/menu';

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}
