import { z } from "zod";

export const registerMintersSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
	phoneNumber: z.string().min(10),
	isPublic: z.boolean(),
});
