"use server";

import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";

import { generateEmailVerificationCode } from "@/features/utils/generate-email-verification-code";
import { hashPassword } from "@/features/utils/hash-and-verify";
import { createSession } from "@/lib/lucia";
import prisma from "@/lib/prisma";
import { generateRoutePath, ROUTES } from "@/path";
import { generateRandomToken } from "@/utils/crypto";
import { ActionState, formError } from "@/utils/utils";

import { SignUpSchema } from "../components/validation";
import { setSessionCookie } from "../utils/session-cookie";

export const signUp = async (
  _actionState: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  try {
    const { username, email, password, name } = SignUpSchema.parse(
      Object.fromEntries(formData),
    );
    const passwordHash = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        passwordHash,
        name,
      },
    });

    await generateEmailVerificationCode(user.id, user.email);

    const sessionToken = generateRandomToken();
    const session = await createSession(sessionToken, user.id);

    await setSessionCookie(sessionToken, session.expiresAt);
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return {
        message: "Either email or username is already in use",
        payload: formData,
      };
    }
    return formError(error, formData);
  }
  redirect(generateRoutePath(ROUTES.TICKETS));
};
