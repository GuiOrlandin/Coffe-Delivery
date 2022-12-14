import { useCart } from "../../../../../hooks/useCarts";
import { FormatMoney } from "../../../../../utils/formatMoney";
import { coffee } from "../../../Home/components/CoffeCard";
import { AddOrSubtractButton } from "../../../Home/components/CoffeCard/components/AddOrSubtractButton";
import { RemoveButton } from "./components/RemoveButton";
import {
  CoffeSelectedButtons,
  CoffeSelectedContainer,
  CoffeSelectedContent,
  Price,
} from "./styles";

interface coffeSelectedProps {
  coffee: coffee;
}

export function CoffeSelected({ coffee }: coffeSelectedProps) {
  const { AddNewCoffee } = useCart();
  const formatedPrice = FormatMoney(coffee.price);
  return (
    <CoffeSelectedContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <CoffeSelectedContent>
        <p>{coffee.name}</p>
        <CoffeSelectedButtons>
          <AddOrSubtractButton />
          <RemoveButton />
        </CoffeSelectedButtons>
      </CoffeSelectedContent>
      <Price>{`R$ ${formatedPrice} `}</Price>
    </CoffeSelectedContainer>
  );
}
