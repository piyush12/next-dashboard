"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z, ZodError } from "zod";

import prisma from "@/lib/prisma";

export type ActionState = {
  message?: string;
  payload?: FormData;
  fieldErrors?: Record<string, string[] | undefined>;
};

const formSchema = z.object({
  title: z.string().trim().min(5),
  content: z.string().trim().min(1).max(1024),
  bounty: z.coerce.number().positive(),
  deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Is required"),
});

export const upsertTicket = async (
  ticketId: string | undefined = "",
  _actionState: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  try {
    const data = {
      title: formData.get("title"),
      content: formData.get("content"),
      deadline: formData.get("deadline"),
      bounty: formData.get("bounty"),
    };
    const parsedData = formSchema.parse(data);
    const dbData = {
      ...parsedData,
      bounty: parsedData.bounty * 100,
    };
    await prisma.ticket.upsert({
      where: { id: ticketId || "" },
      create: dbData,
      update: dbData,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        fieldErrors: error.flatten().fieldErrors,
        payload: formData,
      };
    }
    if (error instanceof Error) {
      return {
        message: error.message,
        payload: formData,
      };
    }
    return {
      message: "Something went wrong",
    };
  }
  revalidatePath("/tickets");
  if (ticketId) {
    redirect(`/tickets/${ticketId}`);
  }
  return { message: "" };
};
