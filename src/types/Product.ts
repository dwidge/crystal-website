import z from "zod";

export const Product = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  weight: z.number(),
  description: z.string(),
  imageId: z.string(),
});
export type Product = z.infer<typeof Product>;
