import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
          Bistro Le Bliss
        </h1>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg" className="font-bold">
            <Link href="/#reservations">Book a Table</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary">
            <Link href="/menu">View Menu</Link>
          </Button>
        </div>
        <div className="absolute bottom-8">
          <Link href="/menu">
            <ArrowDown className="h-8 w-8 animate-bounce text-white/70" />
          </Link>
        </div>
      </div>
    </section>
  );
}
