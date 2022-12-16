import { useEffect, useState } from "react";
import { CartItem } from "../../../../../context/CartContext";
import { useCart } from "../../../../../hooks/useCarts";
import { FormatMoney } from "../../../../../utils/formatMoney";
import { AddOrSubtractButton } from "../../../Home/components/CoffeCard/components/AddOrSubtractButton";
import { RemoveButton } from "./components/RemoveButton";
import {
  CoffeSelectedButtons,
  CoffeSelectedContainer,
  CoffeSelectedContent,
  Price,
} from "./styles";

interface coffeSelectedProps {
  coffee: CartItem;
}

export function CoffeSelected({ coffee }: coffeSelectedProps) {
  const { updateCoffeeQuantity } = useCart();
  const [quantityItem, setQuantityItem] = useState(coffee.quantity);
  const formatedPrice = FormatMoney(coffee.quantity * coffee.price);

  function HandleIncreaseCoffeQuantity() {
    return setQuantityItem(quantityItem + 1);
  }

  function HandleDecreaseCoffeQuantity() {
    if (quantityItem > 0) {
      return setQuantityItem(quantityItem - 1);
    }
  }

  function updateCart() {
    const coffeQuantity = {
      ...coffee,
      quantity: quantityItem,
    };

    updateCoffeeQuantity(coffeQuantity);
  }

  useEffect(() => {
    updateCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantityItem]);

  return (
    <CoffeSelectedContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <CoffeSelectedContent>
        <p>{coffee.name}</p>
        <CoffeSelectedButtons>
          <AddOrSubtractButton
            Increase={HandleIncreaseCoffeQuantity}
            quantity={quantityItem}
            Decrease={HandleDecreaseCoffeQuantity}
          />
          <RemoveButton />
        </CoffeSelectedButtons>
      </CoffeSelectedContent>
      <Price>{`R$ ${formatedPrice} `}</Price>
    </CoffeSelectedContainer>
  );
}
