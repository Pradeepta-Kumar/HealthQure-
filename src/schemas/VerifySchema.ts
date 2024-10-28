import {z} from 'zod';

export const verifySchema = z.object({
    email: z.string(),
    code: z.string()
           .min(6, {message: "Verify code shoul be atleast of 6 characters"})
});