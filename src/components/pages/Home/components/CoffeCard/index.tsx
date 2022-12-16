import {
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
// import * as zod from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

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

// const CoffeCardValidationSchema = zod.object({
//   quantity: zod.number().min(1),
// });

// type CoffeCardData = zod.infer<typeof CoffeCardValidationSchema>;

export function CoffeCard({ coffee }: coffeeProps) {
  const { AddNewCoffee, cartItems } = useCart();
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
        <div>
          <AddOrSubtractButton
            Increase={handleIncrease}
            Decrease={handleDecrease}
            quantity={quantity}
          />
        </div>
        <CartButton type="button" onClick={HandleAddCoffeTocart}>
          <ShoppingCartSimple size={20} weight="fill" />
        </CartButton>
      </CardButtons>
    </CoffeCardContainer>
  );
}
