'use client';
import React, { useActionState } from 'react';

import { ShoppingCartIcon } from 'lucide-react';

import AppSelect from '@/components/app-select';
import Flex from '@/components/Shared/Flex';
import Label from '@/components/Shared/Label';
import Paper from '@/components/Shared/Paper';
import Text from '@/components/Shared/Text';
import { TextArea } from '@/components/Shared/TextArea';
import TextField from '@/components/Shared/TextField';
import { SubmitButton } from '@/components/SubmitButton';
import { Switch } from '@/components/ui/switch';
import { EmptyActionState } from '@/utils/utils';

import { addProducts } from '../actions/add-product';

function AddProductForm() {
  const [state, action] = useActionState(addProducts, EmptyActionState);
  const { fieldErrors, payload } = state;
  console.log('state', state);
  return (
    <form className="w-full" action={action}>
      <Flex direction="column" gap="4">
        <Flex justify="end">
          <SubmitButton className="items-center">
            <ShoppingCartIcon size={16} strokeWidth={1} />
            Publish Product
          </SubmitButton>
        </Flex>
        <Paper
          className="w-full pb-3 pl-6 pr-6 pt-3"
          heading="Product Information"
        >
          <Flex gap="4" direction="row" className="mt-6">
            <Flex direction="column" gap="2" className="w-1/2">
              <Label htmlFor="name">Name</Label>
              <TextField
                type="text"
                fullWidth
                id="name"
                name="name"
                defaultValue={payload?.get('name') as string}
              />
              {fieldErrors && fieldErrors?.name && (
                <Text as="p" variant="helper" color="error">
                  {fieldErrors.name[0]}
                </Text>
              )}
            </Flex>
            <Flex direction="column" gap="2" className="w-1/2">
              <Label htmlFor="category">Category</Label>
              <AppSelect
                name="category"
                placeholder="Category"
                selectItem={[
                  { phone: 'Smart Phone' },
                  { laptop: 'Laptop' },
                  { speaker: 'Speakers' },
                ]}
                defaultValue={payload?.get('category') as string}
              />
              {fieldErrors && fieldErrors?.category && (
                <Text as="p" variant="helper" color="error">
                  {fieldErrors.category[0]}
                </Text>
              )}
            </Flex>
          </Flex>

          <Flex gap="4" direction="row" className="mt-6">
            <Flex direction="column" gap="2" className="w-1/2">
              <Label htmlFor="price">Price</Label>
              <TextField
                type="text"
                fullWidth
                name="price"
                defaultValue={payload?.get('price') as string}
              />
              {fieldErrors && fieldErrors?.price && (
                <Text as="p" variant="helper" color="error">
                  {fieldErrors.price[0]}
                </Text>
              )}
            </Flex>
            <Flex direction="column" gap="2" className="w-1/2">
              <Label htmlFor="quantity">Quantity</Label>
              <TextField
                type="number"
                fullWidth
                name="quantity"
                defaultValue={payload?.get('quantity') as string}
              />
              {fieldErrors && fieldErrors?.quantity && (
                <Text as="p" variant="helper" color="error">
                  {fieldErrors.quantity[0]}
                </Text>
              )}
            </Flex>
            <Flex direction="column" gap="2" className="w-1/2">
              <Label htmlFor="image">Image</Label>
              <TextField
                type="text"
                fullWidth
                name="image"
                defaultValue={payload?.get('image') as string}
              />
              {fieldErrors && fieldErrors?.image && (
                <Text as="p" variant="helper" color="error">
                  {fieldErrors.image[0]}
                </Text>
              )}
            </Flex>
          </Flex>
          <Flex gap="4" direction="row" className="mt-6">
            <Flex direction="column" gap="2" className="w-full">
              <Label htmlFor="description">Description</Label>
              <TextArea
                rows={5}
                name="description"
                defaultValue={payload?.get('description') as string}
              />
              {fieldErrors && fieldErrors?.description && (
                <Text as="p" variant="helper" color="error">
                  {fieldErrors.description[0]}
                </Text>
              )}
            </Flex>
          </Flex>
          <Flex gap="4" direction="row" className="mt-6">
            <Flex direction="column" gap="2">
              <Label className="flex items-center gap-4" htmlFor="status">
                Stock <Switch name="status" />
              </Label>
            </Flex>
          </Flex>
        </Paper>
      </Flex>
    </form>
  );
}

export default AddProductForm;
