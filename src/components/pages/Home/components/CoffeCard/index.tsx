import {
  AddOrSubtractButtonDiv,
  CardButtons,
  CartButton,
  CoffeCardContainer,
  CoffeTag,
  Price,
} from "./styles";
import { ShoppingCartSimple } from "phosphor-react";
import { AddOrSubtractButton } from "./components/AddOrSubtractButton";
import { FormatMoney } from "../../../../../utils/formatMoney";
import { useCart } from "../../../../../hooks/useCarts";
import { useState } from "react";

export interface coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface coffeeProps {
  coffee: coffee;
}

export function CoffeCard({ coffee }: coffeeProps) {
  const { AddNewCoffee } = useCart();
  const [quantity, setQuantity] = useState(0);
  const fomattedPrice = FormatMoney(coffee.price);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    if (quantity >= 1) {
      setQuantity((quantitystate) => quantitystate - 1);
    }
  }

  function HandleAddCoffeTocart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };

    if (quantity > 0) {
      AddNewCoffee(coffeeToAdd);
    }
  }
  return (
    <CoffeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="cup of coffee" />
      <CoffeTag>
        {coffee.tags.map((tag) => (
          <strong key={`${coffee.id}${tag}`}>{tag.toLocaleUpperCase()}</strong>
        ))}
      </CoffeTag>

      <h1>{coffee.name}</h1>
      <p>{coffee.description}</p>
      <CardButtons>
        <Price>
          <span>R$</span> <strong>{fomattedPrice}</strong>
        </Price>
        <AddOrSubtractButtonDiv>
          <AddOrSubtractButton
            Increase={handleIncrease}
            Decrease={handleDecrease}
            quantity={quantity}
          />
        </AddOrSubtractButtonDiv>
        <CartButton type="button" onClick={HandleAddCoffeTocart}>
          <ShoppingCartSimple size={20} weight="fill" />
        </CartButton>
      </CardButtons>
    </CoffeCardContainer>
  );
}
