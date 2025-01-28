import React from "react";

import { IconEye } from "@tabler/icons-react";
import Link from "next/link";

import { users } from "@/app/invoices/utils";
import { Badge } from "@/components/Shared/Badge";
import Flex from "@/components/Shared/Flex";
import { Pagination } from "@/components/Shared/Pagination";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  Table,
} from "@/components/Shared/Table";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { InvoiceStatusClass } from "@/utils/constants";
import { cn } from "@/utils/utils";

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "DATE", uid: "date", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "EMAIL", uid: "email" },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "VALUE", uid: "value", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

async function InvoiceTable() {
  const results = await db.select().from(Invoices);
  async function handleChange(page: number) {
    "use server";
    console.log("page", page);
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => {
            return <TableHead key={column.uid}>{column.name}</TableHead>;
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {results.map((result) => {
          return (
            <TableRow key={result.id}>
              {columns.map((column) => {
                const style = column.uid === "id" ? "text-purple-500" : "";
                return (
                  <TableCell className={style} key={column.name}>
                    {column.uid === "id" ? "#" : ""}

                    {column.uid === "status" ? (
                      <Badge
                        className={cn(
                          "rounded-md  bg-opacity-15",
                          InvoiceStatusClass[result[column.uid]],
                        )}
                      >
                        {result[column.uid]}
                      </Badge>
                    ) : column.uid === "value" ? (
                      `$ ${(result[column.uid] / 100).toFixed(2)}`
                    ) : column.uid === "date" ? (
                      <>{new Date(result["createTs"]).toLocaleDateString()}</>
                    ) : (
                      <>
                        {/* @ts-expect-error  will fix letter*/}
                        {result[column.uid]}
                      </>
                    )}
                    {column.uid === "actions" && (
                      <>
                        <Link href={`/invoices/${result.id}`}>
                          <IconEye stroke={1} />
                        </Link>
                      </>
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow showBorder={false}>
          <TableCell colSpan={8} className="pr-0">
            <Flex align="center" justify="end" gap="6">
              <Pagination
                total={users.length}
                page={1}
                onChange={handleChange}
              />
            </Flex>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default InvoiceTable;
