'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { submitPrivateEventInquiry } from '@/app/actions';
import { useState, useEffect } from 'react';

const privateEventSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  eventDate: z.date({ required_error: 'Please select a date for the event.' }),
  partySize: z.coerce.number().min(10, 'Minimum party size for private events is 10.'),
  message: z.string().optional(),
});

export function PrivateEventsSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof privateEventSchema>>({
    resolver: zodResolver(privateEventSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      partySize: 10,
      message: '',
    },
  });

  const [minDate, setMinDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    // This effect runs only on the client-side
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    setMinDate(today);
  }, []);

  async function onSubmit(values: z.infer<typeof privateEventSchema>) {
    const result = await submitPrivateEventInquiry(values);
    if (result.success) {
      toast({
        title: 'Inquiry Sent!',
        description: "Thank you for your interest. We'll be in touch soon to discuss your private event.",
      });
      form.reset();
    } else {
        toast({
            title: "Error",
            description: result.message || "There was a problem submitting your inquiry.",
            variant: "destructive",
        })
    }
  }

  return (
    <section id="events" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">Host Your Private Event</h2>
                <p className="text-muted-foreground mt-4 text-lg">
                    From intimate gatherings to celebratory dinners, let us create an unforgettable experience. We are happy to offer a private Sunday brunch for up to 40 people. Please contact our chef, Yakov, to create a custom menu for your event.
                </p>
            </div>
            <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg shadow-lg">
                <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="partySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estimated Guests</FormLabel>
                        <FormControl>
                          <Input type="number" min="10" placeholder="25" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                 <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Preferred Event Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={'outline'}
                                className={cn(
                                  'w-full justify-start text-left font-normal',
                                  !field.value && 'text-muted-foreground'
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => minDate ? date < minDate : true}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Details</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your event (e.g., occasion, special requests)..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                />
                <Button type="submit" size="lg" className="w-full">Send Inquiry</Button>
              </form>
            </Form>
            </div>
        </div>
      </div>
    </section>
  );
}
