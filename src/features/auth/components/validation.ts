import { z } from "zod";

type FormData = {
  email: string;
  password: string;
};

export type LoginFormData = FormData;

export type SignUpFormData = FormData & {
  name: string;
  username: string;
  confirmPassword: string;
};

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({
      message: "Please provide a valid email address.",
    })
    .trim(),
  password: z
    .string()
    .min(6, { message: "Password must at least 6 characters" })
    .max(20, { message: "Password does not exceed 20 characters" })
    .trim(),
});

export const SignUpSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long." })
      .max(30, { message: "Username cannot exceed 30 characters." })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: "Username can only contain letters, numbers, and underscores.",
      })
      .trim(),
    name: z
      .string()
      .min(1, { message: "Name is required." })
      .max(50, { message: "Name cannot exceed 50 characters." })
      .regex(/^[a-zA-Z\s]+$/, {
        message: "Name can only contain letters and spaces.",
      })
      .trim(),
    email: z
      .string()
      .min(1, { message: "Email is required." })
      .email({ message: "Please provide a valid email address." })
      .trim(),
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
