import { z } from "zod";

export const UserData = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.ostring(),
  address: z.string(),
});
export type UserData = z.infer<typeof UserData>;
