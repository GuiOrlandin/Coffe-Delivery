import { coffees } from "../../../Data/coffee";
import { CheckoutForm } from "./components/CheckoutForm";
import { CoffeSelected } from "./components/SelectedCoffee";
import {
  CheckoutContainer,
  ConfirmOrderButton,
  ConfirmOrderContainer,
  DeliveryPrice,
  SelectedCoffeContainer,
  TotalItens,
  TotalPrice,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h1>Complete seu pedido</h1>
        <CheckoutForm />
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <SelectedCoffeContainer>
          <div>
            {coffees.map((coffee) => (
              <CoffeSelected key={coffee.id} coffee={coffee} />
            ))}
          </div>
          <ConfirmOrderContainer>
            <TotalItens>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </TotalItens>
            <DeliveryPrice>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </DeliveryPrice>
            <TotalPrice>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </TotalPrice>
            <a href="/Success">
              <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
            </a>
          </ConfirmOrderContainer>
        </SelectedCoffeContainer>
      </div>
    </CheckoutContainer>
  );
}
