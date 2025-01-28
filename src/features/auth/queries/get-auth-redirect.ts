import { redirect } from "next/navigation";

import { generateRoutePath, ROUTES } from "@/path";

import { getAuth } from "./getAuth";

export async function getAuthRedirect() {
  const { user } = await getAuth();

  if (!user) {
    redirect(generateRoutePath(ROUTES.LOGIN));
  }
  return { user };
}
