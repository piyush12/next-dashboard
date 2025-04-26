"use server";

import { z, ZodError } from "zod";

import { getAuthRedirect } from "@/features/auth/queries/get-auth-redirect";
import { verifyPasswordHash } from "@/features/utils/hash-and-verify";
import { generatePasswordResetLink } from "@/features/utils/password-reset-link";
import prisma from "@/lib/prisma";
import { ActionState } from "@/utils/utils";

const passwordChangeSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(20, { message: "Password cannot exceed 20 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    })
    .trim(),
});

export async function changePassword(
  _actionState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const auth = await getAuthRedirect();

  try {
    const { password } = passwordChangeSchema.parse({
      password: formData.get("password"),
    });
    if (!auth) {
      throw new Error("Not authenticated");
    }

    const user = await prisma.user.findUnique({
      where: {
        email: auth.user.email,
      },
    });

    if (!user) {
      throw new Error("Invalid request");
    }

    const validPassword = await verifyPasswordHash(user.passwordHash, password);
    if (!validPassword) {
      throw new Error("Invalid password");
    }

    const passwordLink = await generatePasswordResetLink(user.id);
    // await resend.emails.send({
    //   from: "Acme <onboarding@resend.dev>",
    //   to: [user.email],
    //   subject: "Hello world",
    //   react: ResetPasswordEmail({
    //     toName: user.username,
    //     resetPasswordLink: passwordLink,
    //   }),
    // });
    console.log("passwordLink", passwordLink);
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

  return { message: "" };
}
