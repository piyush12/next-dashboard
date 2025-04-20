"use server";
import { z } from "zod";

import ResetPasswordEmail from "@/emails/password-reset-email";
import { generatePasswordResetLink } from "@/features/utils/password-reset-link";
import prisma from "@/lib/prisma";
import { resend } from "@/lib/resend";
import { ActionState, formError } from "@/utils/utils";

const passwordForgotSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please provide a valid email address." })
    .trim(),
});

export async function forgotPassword(
  _actionState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  try {
    const getEmail = formData.get("email");

    const { email } = passwordForgotSchema.parse({
      email: getEmail,
    });

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Incorrect Email");
    }

    const link = await generatePasswordResetLink(user.id);
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [user.email],
      subject: "Hello world",
      react: ResetPasswordEmail({
        toName: user.username,
        resetPasswordLink: link,
      }),
    });
    console.log("link", link);
    console.log("data, errordata, error", data, error);
  } catch (error) {
    return formError(error, formData);
  }
  return { message: "Check email for reset link " };
}
