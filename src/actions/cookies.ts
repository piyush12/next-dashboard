"use server";

import { cookies } from "next/headers";

const getCookie = async (key: string) => {
  const cookie = (await cookies()).get(key);

  if (!cookie) {
    return null;
  }
  return cookie.value;
};

const deleteCooke = async (key: string) => {
  (await cookies()).delete(key);
};

const setCookie = async (key: string, value: string) => {
  (await cookies()).set(key, value);
};

export { getCookie, deleteCooke, setCookie };
