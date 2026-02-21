import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { lunchMenu, dinnerMenu } from '@/lib/menu';
import { MenuAccordion } from '@/components/menu-accordion';

export function MenuSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Menu</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Classic European flavors, thoughtfully prepared.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-4 md:p-8">
            <Tabs defaultValue="lunch" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="lunch">Lunch Menu</TabsTrigger>
                <TabsTrigger value="dinner">Dinner Menu</TabsTrigger>
              </TabsList>
              <TabsContent value="lunch">
                <div className="text-center my-4 p-4 bg-secondary rounded-lg">
                  <p className="font-bold">WE'RE OPEN FOR LUNCH!</p>
                  <p className="text-sm text-muted-foreground">Serving lunch from 11:30am to 4pm on weekdays, Tuesday to Friday. Excited to see you!</p>
                </div>
                <MenuAccordion menuData={lunchMenu} />
              </TabsContent>
              <TabsContent value="dinner">
                <div className="text-center my-4 p-4 bg-secondary rounded-lg">
                  <p className="font-bold">DINNER SERVICE</p>
                  <p className="text-sm text-muted-foreground">Tuesday - Friday from 4pm to 9pm and Saturday 5pm-9pm.</p>
                  <p className="text-sm text-muted-foreground mt-1">For Carryout on Friday and Saturday, please call before 5pm for pickup by 6pm only. Tuesday - Thursday, regular hours for carryout.</p>
                </div>
                <MenuAccordion menuData={dinnerMenu} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
