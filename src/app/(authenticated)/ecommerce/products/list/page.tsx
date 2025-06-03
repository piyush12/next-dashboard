import { Plus } from 'lucide-react';
import Link from 'next/link';

import Button from '@/components/Shared/Button';
import Flex from '@/components/Shared/Flex';
import Paper from '@/components/Shared/Paper';
import ProductsTable from '@/features/ecommerce/components/products-table';

function ProductList() {
  return (
    <Flex className="w-full p-4" align="center" gap="6">
      <Paper className="w-full  pb-3 pl-6 pr-6 pt-3">
        <div className="min-w-full">
          <Link href="/ecommerce/products/add">
            <Button variant="default" color="primary" className="items-center">
              <Plus size={18} strokeWidth={2} /> Add
            </Button>
          </Link>

          <div className="h-6 border-b-[1px] border-light-divider dark:border-dark-divider" />
          <ProductsTable />
        </div>
      </Paper>
    </Flex>
  );
}

export default ProductList;
