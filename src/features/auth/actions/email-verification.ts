"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { validateEmailVerificationCode } from "@/features/utils/validate-email-verification-code";
import { createSession } from "@/lib/lucia";
import prisma from "@/lib/prisma";
import { generateRoutePath, ROUTES } from "@/path";
import { generateRandomToken } from "@/utils/crypto";
import { ActionState, formError } from "@/utils/utils";

import { getAuthRedirect } from "../queries/get-auth-redirect";
import { setSessionCookie } from "../utils/session-cookie";

const emailVerificationSchema = z.object({
  code: z.string().length(8),
});

export async function emailVerification(
  _actionState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const { user } = await getAuthRedirect({
    checkVerifiedEmail: false,
  });

  try {
    const { code } = emailVerificationSchema.parse({
      code: formData.get("code"),
    });

    const isVerified = await validateEmailVerificationCode({
      userId: user.id,
      email: user.email,
      code: code,
    });

    if (!isVerified) {
      throw new Error("Invalid Code");
    }

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        emailVerified: true,
      },
    });

    const sessionToken = generateRandomToken();
    const session = await createSession(sessionToken, user.id);
    await setSessionCookie(sessionToken, session.expiresAt);
  } catch (error) {
    return formError(error);
  }
  redirect(generateRoutePath(ROUTES.TICKETS));
}
