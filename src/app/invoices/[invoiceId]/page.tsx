import React from "react";

import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

import { Badge } from "@/components/Shared/Badge";
import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";
import Text from "@/components/Shared/Text";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { InvoiceStatusClass } from "@/utils/constants";
import { cn } from "@/utils/utils";

async function InvoicePage({
  params,
}: {
  params: Promise<{ invoiceId: string }>;
}) {
  const getParams = await params;
  const invoiceId = parseInt(getParams.invoiceId);

  if (isNaN(invoiceId)) {
    throw new Error("Invalid invoice id");
  }
  const [result] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.id, invoiceId))
    .limit(1);

  if (!result) {
    notFound();
  }

  const StatusBadge = () => (
    <Badge
      className={cn(
        "rounded-md  bg-opacity-15",
        InvoiceStatusClass[result["status"]],
      )}
    >
      {result["status"]}
    </Badge>
  );

  return (
    <Box>
      <Flex className="p-4">
        <Paper className="w-full pb-3 pl-6 pr-6 pt-3">
          <Box display="inline-flex" className="gap-[10px]">
            <Text as="h3" variant="h3">
              #Invoice {invoiceId}
            </Text>
            <StatusBadge />
          </Box>
          <Box display="flex" className="flex-col gap-10">
            <Text as="h2" variant="h4">
              Billing Details:
            </Text>
            <Text as="p" variant="body1">
              {result.description}
            </Text>
            <Text as="p" variant="body1">
              Invoice Id: {result.id}
            </Text>
            <Text as="p" variant="body1">
              Invoice Date: {new Date(result.createTs).toLocaleDateString()}
            </Text>
          </Box>
        </Paper>
      </Flex>
    </Box>
  );
}

export default InvoicePage;
