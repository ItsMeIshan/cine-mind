import { z } from "zod";

export const nameValidation = z
  .string()
  .min(2, "name must be at least 2 characters")
  .max(30, "name must be no more than 20 characters");

export const signUpSchema = z.object({
  username: nameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
