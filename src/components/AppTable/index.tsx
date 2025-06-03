'use client';
import React from 'react';

import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from '@tabler/icons-react';
import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import Button from '@/components/Shared/Button';
import Flex from '@/components/Shared/Flex';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Shared/Table';
import TextField from '@/components/Shared/TextField';

function AppTable<T>({
  columns,
  data,
}: {
  columns: ColumnDef<T>[];
  data: T[];
}) {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
    state: {
      pagination,
    },
    // autoResetPageIndex: false, // turn off page index reset when sorting or filtering
  });

  return (
    <>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ width: `${header.getSize()}px` }}
                  >
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer select-none'
                          : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => {
            return (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Flex
        align="center"
        justify="between"
        gap="6"
        className="w-full pt-8 text-light-primary dark:text-dark-primary"
      >
        <Flex align="center" gap="8">
          <span className="flex items-center gap-1 text-light-primary/40  dark:text-dark-primary/40">
            Go to page:
            <TextField
              type="number"
              min="1"
              max={table.getPageCount()}
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="w-16 rounded border p-1"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="border border-light-border bg-transparent p-2 focus:border-purple-500 dark:border-dark-border dark:text-dark-primary"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <div className="text-light-primary/40  dark:text-dark-primary/40">
            Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
            {table.getRowCount().toLocaleString()} Rows
          </div>
        </Flex>
        <div className="h-2" />
        <nav aria-label="Pagination">
          <ul className="flex gap-2">
            <li>
              <Button
                className="bg-light-primary/10  dark:bg-dark-primary/10"
                onClick={() => table.firstPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <IconChevronsLeft stroke={1} />
              </Button>
            </li>
            <li>
              <Button
                className="bg-light-primary/10  dark:bg-dark-primary/10"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <IconChevronLeft stroke={1} />
              </Button>
            </li>

            <li>
              <Button
                className="bg-light-primary/10  dark:bg-dark-primary/10"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <IconChevronRight stroke={1} />
              </Button>
            </li>

            <li>
              <Button
                className="bg-light-primary/10  dark:bg-dark-primary/10"
                onClick={() => table.lastPage()}
                disabled={!table.getCanNextPage()}
              >
                <IconChevronsRight stroke={1} />
              </Button>
            </li>
          </ul>
        </nav>
      </Flex>
    </>
  );
}

export default AppTable;
