import { useCart } from "../../../hooks/useCarts";
import { FormatMoney } from "../../../utils/formatMoney";
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
  formContainer,
  FormContainer,
} from "./styles";

export function Checkout() {
  const { cartItems } = useCart();

  function getTotalPrice() {
    let totalPriceOfCoffe = 0;
    cartItems.forEach((element) => {
      totalPriceOfCoffe += element.price * element.quantity;
    });
    return totalPriceOfCoffe;
  }

  const totalPrice = getTotalPrice();
  const totalItemsPriceConverted = FormatMoney(totalPrice);
  const totalPriceConverted =
    totalPrice === 0 ? "0" : FormatMoney(totalPrice + 3.5);

  return (
    <CheckoutContainer>
      <FormContainer>
        <h1>Complete seu pedido</h1>
        <CheckoutForm />
      </FormContainer>
      <div>
        <h1>Cafés selecionados</h1>
        <SelectedCoffeContainer>
          <div>
            {cartItems.map((cartItem) => (
              <CoffeSelected key={cartItem.id} coffee={cartItem} />
            ))}
          </div>
          <ConfirmOrderContainer>
            <TotalItens>
              <p>Total de itens</p>
              <span>R$ {totalItemsPriceConverted}</span>
            </TotalItens>
            <DeliveryPrice>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </DeliveryPrice>
            <TotalPrice>
              <strong>Total</strong>
              <strong>{`R$ ${totalPriceConverted}`}</strong>
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
