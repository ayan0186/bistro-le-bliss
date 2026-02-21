'use client';
import { lunchMenu, dinnerMenu } from '@/lib/menu';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MenuAccordion } from '@/components/menu-accordion';

export function OrderSection() {
  return (
    <Card className="shadow-lg w-full">
      <CardHeader>
        <CardTitle className="text-center font-headline text-3xl">Our Menu</CardTitle>
      </CardHeader>
      <CardContent className="p-4 md:p-8">
        <Tabs defaultValue="lunch" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="lunch">Lunch Menu</TabsTrigger>
            <TabsTrigger value="dinner">Dinner Menu</TabsTrigger>
          </TabsList>
          <TabsContent value="lunch">
            <MenuAccordion menuData={lunchMenu} showAddToCart={true} />
          </TabsContent>
          <TabsContent value="dinner">
            <MenuAccordion menuData={dinnerMenu} showAddToCart={true} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
