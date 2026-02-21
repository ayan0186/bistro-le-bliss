'use server';
import { z } from 'zod';

const reservationSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().min(10, 'Invalid phone number.'),
  date: z.date(),
  time: z.string(),
  partySize: z.coerce.number().min(1, 'Party size must be at least 1.'),
});

export async function submitReservation(data: unknown) {
  const parsedData = reservationSchema.safeParse(data);
  if (!parsedData.success) {
    console.error('Invalid reservation data:', parsedData.error);
    return { success: false, message: 'Invalid data provided.' };
  }
  console.log('New Reservation Received:', parsedData.data);
  return { success: true, message: 'Reservation submitted successfully!' };
}

const privateEventSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().min(10, 'Invalid phone number.'),
  eventDate: z.date(),
  partySize: z.coerce.number().min(1, 'Party size must be at least 1.'),
  message: z.string().optional(),
});

export async function submitPrivateEventInquiry(data: unknown) {
  const parsedData = privateEventSchema.safeParse(data);
  if (!parsedData.success) {
    console.error('Invalid private event data:', parsedData.error);
    return { success: false, message: 'Invalid data provided.' };
  }
  console.log('New Private Event Inquiry Received:', parsedData.data);
  return { success: true, message: 'Your inquiry has been sent!' };
}

const orderSchema = z.object({
  customer: z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
  }),
  items: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      price: z.string(),
      quantity: z.number(),
      description: z.string().optional(),
    })
  ),
  total: z.number(),
});

export async function submitOrder(data: unknown) {
  const parsedData = orderSchema.safeParse(data);
  if (!parsedData.success) {
    console.error('Invalid order data:', parsedData.error);
    return { success: false, message: 'Invalid data provided.' };
  }
  // In a real application, you would save this to a database
  // and process the payment.
  console.log('New Online Order Received:', parsedData.data);
  return { success: true, message: 'Order submitted successfully!' };
}
