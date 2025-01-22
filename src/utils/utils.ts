import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodError } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function range(start: number, end: number) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}

export function formError(error: unknown, formData?: FormData) {
  if (error instanceof ZodError) {
    return {
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
    };
  } else if (error instanceof Error) {
    return {
      message: error.message,
      payload: formData,
    };
  } else {
    return {
      message: "Something went wrong",
      payload: formData,
    };
  }
}

export type ActionState = {
  message?: string;
  payload?: FormData;
  fieldErrors?: Record<string, string[] | undefined>;
};

export const EmptyActionState: ActionState = {
  message: "",
  fieldErrors: {},
};
