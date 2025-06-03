'use client';
import React, { useEffect, useState } from 'react';

import { Headphones, LaptopMinimalCheck, Smartphone } from 'lucide-react';
import Image from 'next/image';

import AppTable from '@/components/AppTable';
import { Badge } from '@/components/Shared/Badge';
import Box from '@/components/Shared/Box';
import Flex from '@/components/Shared/Flex';
import { Switch } from '@/components/ui/switch';
import { priceFormat } from '@/utils/utils';

import { getProducts } from '../queries/get-products';
import { Iproducts } from '../schema';

const CATEGORY_ICON: { [key: string]: React.ReactNode } = {
  phone: <Smartphone size={16} strokeWidth={2} />,
  laptop: <LaptopMinimalCheck size={16} strokeWidth={2} />,
  accessories: <Headphones size={16} strokeWidth={2} />,
};

function ProductsTable() {
  const [products, setProducts] = useState<Iproducts[]>([]);

  useEffect(() => {
    async function productsList() {
      const list = await getProducts();
      setProducts(list);
    }
    productsList();
  }, []);

  const columns = [
    {
      id: 'image',
      header: () => <span></span>,
      cell: ({
        row,
      }: {
        row: {
          original: Iproducts;
        };
      }) => {
        return (
          <Image
            src={row.original.image}
            alt={row.original.name}
            width={100}
            height={150}
          />
        );
      },
      size: 50,
    },
    {
      id: 'name',
      header: () => <span>Name</span>,
      accessorKey: 'name',
    },
    {
      id: 'category',
      header: () => <span>Category</span>,
      cell: ({
        row,
      }: {
        row: {
          original: Iproducts;
        };
      }) => {
        return (
          <Flex align="center" gap="2">
            <Badge
              radius="full"
              className="p-2"
              color={
                row.original.category === 'laptop'
                  ? 'warning'
                  : row.original.category === 'accessories'
                    ? 'error'
                    : 'primary'
              }
            >
              {CATEGORY_ICON[row.original.category as string]}
            </Badge>
            <Box>{row.original.category}</Box>
          </Flex>
        );
      },
    },
    {
      id: 'price',
      header: () => <span>Price</span>,
      accessorFn: (row: Iproducts) => priceFormat(row.price),
    },
    {
      id: 'quantity',
      header: () => <span>Quantity</span>,
      accessorKey: 'quantity',
    },
    {
      id: 'status',
      header: () => <span>Status</span>,
      cell: ({
        row,
      }: {
        row: {
          original: Iproducts;
        };
      }) => {
        return (
          <Switch
            name="status"
            defaultChecked={row.original.status === 'IN_ACTIVE' ? false : true}
          />
        );
      },
    },
  ];
  // row.original.status === 'IN_ACTIVE' ? false : true
  return <AppTable data={products} columns={columns} />;
}

export default ProductsTable;
