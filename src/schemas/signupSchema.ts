import { z } from "zod";

export const fullnameValidation = z
  .string()
  .min(3, "Atleast of 3 Characters")
  .max(20, "Not more than 20 Character")
  .regex(
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
    "Username must not contain special characters"
  );
export const signupSchema = z.object({
  fullname: fullnameValidation,
  email: z.string().email({ message: "Inavlid Email Address" }),
  password: z
    .string()
    .min(4, { message: "Password must be of atleast 4 letters" }),
});
