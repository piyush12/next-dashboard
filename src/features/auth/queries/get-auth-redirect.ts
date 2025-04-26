import { redirect } from "next/navigation";

import { generateRoutePath, ROUTES } from "@/path";

import { getAuth } from "./getAuth";

type AuthRedirectOptions = {
  checkVerifiedEmail?: boolean;
};

export async function getAuthRedirect(options: AuthRedirectOptions = {}) {
  const { checkVerifiedEmail = true } = options ?? {};
  const { user } = await getAuth();

  if (!user) {
    redirect(generateRoutePath(ROUTES.LOGIN));
  }

  if (checkVerifiedEmail && !user.emailVerified) {
    redirect(generateRoutePath(ROUTES.VERIFY_EMAIL));
  }

  return { user };
}
