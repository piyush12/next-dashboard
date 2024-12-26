"use server";

import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { db } from "@/db";
import { Invoices } from "@/db/schema";

export async function createInvoiceAction(formData: FormData) {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return;
  }
  const value = Math.floor(
    Number.parseFloat(String(formData.get("value"))) * 100,
  );
  const description = formData.get("description") as string;

  const result = await db
    .insert(Invoices)
    .values({
      value,
      description,
      userId: session.user.id,
      status: "open",
    })
    .returning({
      id: Invoices.id,
    });
  redirect(`/invoices/${result[0].id}`);
}
