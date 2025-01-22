"use server";

import { redirect } from "next/navigation";

import { invalidateSession } from "@/lib/lucia";

import { getAuth } from "../queries/getAuth";
import { deleteSessionCookie } from "../utils/session-cookie";

export const signOut = async () => {
  const { session } = await getAuth();
  if (!session) {
    redirect("/login");
  }

  await invalidateSession(session.id);
  await deleteSessionCookie();
  redirect("/login");
};
