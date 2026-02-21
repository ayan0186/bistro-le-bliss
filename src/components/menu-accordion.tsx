'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MenuItemDisplay } from '@/components/menu-item-display';
import type { MenuCategory } from '@/lib/menu';

interface MenuAccordionProps {
  menuData: MenuCategory[];
  showAddToCart?: boolean;
}

export function MenuAccordion({ menuData, showAddToCart = false }: MenuAccordionProps) {
  const defaultValues = menuData.map((c) => c.category);

  return (
    <Accordion type="multiple" defaultValue={defaultValues} className="w-full">
      {menuData.map((category) => (
        <AccordionItem value={category.category} key={category.category}>
          <AccordionTrigger className="text-2xl font-headline hover:no-underline">
            {category.category}
          </AccordionTrigger>
          <AccordionContent>
            {category.notes && <p className="text-sm text-muted-foreground mb-4 italic">{category.notes}</p>}
            <div className="grid gap-6 pt-4">
              {category.items.map((item) => (
                <MenuItemDisplay key={item.id} item={item} showAddToCart={showAddToCart} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
