'use server';

import { redirect } from 'next/navigation';

import { getAuthRedirect } from '@/features/auth/queries/get-auth-redirect';
import prisma from '@/lib/prisma';
import { ROUTES } from '@/path';
import { ActionState, formError } from '@/utils/utils';

import { addproductSchema } from '../schema';

export async function addProducts(
  _actionState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await getAuthRedirect();
  try {
    const status = formData.get('status') === 'on' ? 'PUBLISHED' : 'IN_ACTIVE';
    const data = {
      ...Object.fromEntries(formData),
      quantity: parseInt(formData.get('quantity') as string),
    };
    console.log('data', data);
    const parsedData = addproductSchema.parse(data);

    await prisma.ecommerce.create({
      data: { ...parsedData, status },
    });
  } catch (error) {
    return formError(error, formData);
  }
  redirect(ROUTES.ECOMMERCE_PRODUCTS_LIST);
}
