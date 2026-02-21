import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { OrderSection } from '@/components/sections/order';
import { Cart } from '@/components/cart';

export default function OrderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Order for Carryout</h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Enjoy your favorite Bistro Le Bliss dishes at home.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <OrderSection />
            </div>
            <div className="lg:col-span-1 relative">
              <div className="sticky top-24">
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
