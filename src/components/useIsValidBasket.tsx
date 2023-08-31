import { useEffect, useState } from "react";
import { BasketList } from "../types/BasketList.js";

export const useIsValidBasket = (basket: BasketList) => {
  const [valid, setValid] = useState(false);
  useEffect(() => {
    Promise.all(basket.items.map((item) => item.image))
      .then((images) => images.every((image) => image))
      .then(setValid);
  }, [basket]);
  return valid;
};
