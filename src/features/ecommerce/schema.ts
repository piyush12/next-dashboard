import { z } from 'zod';

export const addproductSchema = z.object({
  name: z
    .string({ message: 'Name is required' })
    .trim()
    .min(3, { message: 'Minimum 3 character' })
    .max(20),
  category: z.string().trim().nonempty({ message: 'Required field' }),
  price: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), { message: 'Price must be a number' })
    .refine((val) => val >= 0.01, { message: 'Price must be at least 0.01' }),
  quantity: z
    .number({ required_error: 'Quantity is required' })
    .min(1, { message: 'Minimum quantity must be 1' }),
  image: z.string().trim().nonempty({ message: 'Required field' }),
  description: z.string().trim().min(5, { message: 'Minimum 5 character' }),
});

type Istatus = {
  status: 'IN_ACTIVE' | 'PUBLISHED';
};

export type Iproducts = z.infer<typeof addproductSchema> & Istatus;
