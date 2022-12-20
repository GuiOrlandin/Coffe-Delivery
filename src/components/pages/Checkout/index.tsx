// import { useForm } from "react-hook-form";
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
  FormContainer,
} from "./styles";
import { useCart } from "../../../hooks/useCarts";

export function Checkout() {
  const { cartItems } = useCart();
  // const { setValue } = useForm();
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

            <ConfirmOrderButton
              type="submit"
              // onClick={() => {
              //   setValue("adress", "");
              //   setValue("city", "");
              //   setValue("uf", "");
              //   setValue("district", "");
              //   setValue("complement", "");
              //   setValue("cep");
              //   setValue("number");
              // }}
            >
              <a>CONFIRMAR PEDIDO</a>
            </ConfirmOrderButton>
          </ConfirmOrderContainer>
        </SelectedCoffeContainer>
      </div>
    </CheckoutContainer>
  );
}
