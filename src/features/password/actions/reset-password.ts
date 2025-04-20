"use server";
import { redirect } from "next/navigation";
import { z, ZodError } from "zod";

import { setCookie } from "@/actions/cookies";
import { hashPassword } from "@/features/utils/hash-and-verify";
import prisma from "@/lib/prisma";
import { generateRoutePath, ROUTES } from "@/path";
import { hashToken } from "@/utils/crypto";
import { ActionState } from "@/utils/utils";

const resetPasswordSchema = z
  .object({
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
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export async function resetPassword(
  tokenId: string,
  _actionState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  try {
    const { password } = resetPasswordSchema.parse({
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });
    const tokenHash = hashToken(tokenId);
    const passwordResetToken = await prisma.passwordResetToken.findUnique({
      where: {
        tokenHash,
      },
    });
    if (passwordResetToken) {
      await prisma.passwordResetToken.delete({
        where: {
          tokenHash,
        },
      });
    }

    if (
      !passwordResetToken ||
      Date.now() > passwordResetToken.expiresAt.getTime()
    ) {
      return {
        message: "Expired or invalid verification token",
      };
    }

    await prisma.session.deleteMany({
      where: {
        userId: passwordResetToken.userId,
      },
    });

    const passwordHash = await hashPassword(password);

    await prisma.user.update({
      where: {
        id: passwordResetToken.userId,
      },
      data: {
        passwordHash,
      },
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
  await setCookie("toast", "Password Updated");
  const redirectPath = generateRoutePath(ROUTES.LOGIN);
  redirect(redirectPath);
}
