import { z } from "zod";

export const healthDetailsSchema = z.object({
    email:z.string(),
    gender: z.string(),
    age: z.number(),
    pulseRate: z.number(),
    bloodPressure: z.string(),
    respirationRate: z.number(),
    bodyTemp: z.number(),
    oxygenRate: z.number(),
    bloodGlucose: z.number(),
    weight: z.number(),
    cholesterol: z.number(),
    location:z.string(),
    result: z.string(),
    createdAt: z.date(),
});