'use client';

import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';
import type { MenuItem as MenuItemType } from '@/lib/menu';
import { PlusCircle } from 'lucide-react';

interface MenuItemDisplayProps {
  item: MenuItemType;
  showAddToCart?: boolean;
}

export function MenuItemDisplay({ item, showAddToCart = false }: MenuItemDisplayProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(item);
    toast({
      title: 'Added to cart',
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1">
        <p className="font-bold">{item.name}</p>
        {item.description && (
          <p className="text-sm text-muted-foreground max-w-md">{item.description}</p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <p className="font-bold text-lg text-primary whitespace-nowrap">${item.price}</p>
        {showAddToCart && (
          <Button variant="outline" size="sm" onClick={handleAddToCart}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add
          </Button>
        )}
      </div>
    </div>
  );
}
