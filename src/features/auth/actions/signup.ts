"use server";

import { redirect } from "next/navigation";

import { hashPassword } from "@/features/password/utils/hash-and-verify";
import { createSession } from "@/lib/lucia";
import prisma from "@/lib/prisma";
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

    const sessionToken = generateRandomToken();
    const session = await createSession(sessionToken, user.id);

    await setSessionCookie(sessionToken, session.expiresAt);
  } catch (error) {
    return formError(error, formData);
  }
  redirect("/tickets");
};
