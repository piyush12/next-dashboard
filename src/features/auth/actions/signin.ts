"use server";

import { redirect } from "next/navigation";

import { generateEmailVerificationCode } from "@/features/utils/generate-email-verification-code";
import { verifyPasswordHash } from "@/features/utils/hash-and-verify";
import { createSession } from "@/lib/lucia";
import prisma from "@/lib/prisma";
import { generateRoutePath, ROUTES } from "@/path";
import { generateRandomToken } from "@/utils/crypto";
import { ActionState, formError } from "@/utils/utils";

import { SignInSchema } from "../components/validation";
import { setSessionCookie } from "../utils/session-cookie";

export const signIn = async (
  _actionState: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  try {
    const { email, password } = SignInSchema.parse(
      Object.fromEntries(formData),
    );
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return {
        message: "Incorrect Email or Password",
      };
    }
    const validPassword = await verifyPasswordHash(user.passwordHash, password);
    if (!validPassword) {
      return {
        message: "Incorrect Email or Password",
      };
    }
    const verificationCode = await generateEmailVerificationCode(
      user.id,
      user.email,
    );

    console.log("verificationCode", verificationCode);

    const sessionToken = generateRandomToken();
    const session = await createSession(sessionToken, user.id);

    await setSessionCookie(sessionToken, session.expiresAt);
  } catch (error) {
    return formError(error);
  }
  redirect(generateRoutePath(ROUTES.TICKETS));
};
