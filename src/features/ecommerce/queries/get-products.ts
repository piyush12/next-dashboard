'use server';

import { getAuthRedirect } from '@/features/auth/queries/get-auth-redirect';
import prisma from '@/lib/prisma';

export async function getProducts() {
  await getAuthRedirect();

  const products = await prisma.ecommerce.findMany();

  console.log(products);

  return products;
}
