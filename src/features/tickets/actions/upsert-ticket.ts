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
});

export const upsertTicket = async (
  ticketId: string | undefined = "",
  _actionState: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  try {
    const data = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    };
    const parsedData = formSchema.parse(data);
    await prisma.ticket.upsert({
      where: { id: ticketId || "" },
      create: parsedData,
      update: parsedData,
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
