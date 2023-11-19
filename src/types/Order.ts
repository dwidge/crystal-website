import { z } from "zod";
import { BasketList } from "./BasketList.js";
import { UserData } from "./UserData.js";

export const Order = z.object({ ...BasketList.shape, customer: UserData });
export type Order = z.infer<typeof Order>;
