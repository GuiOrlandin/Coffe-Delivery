import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  AddressStreet,
  DeliveryAddressIcon,
  OrderFormContainer,
  OrderFormContent,
  NumberAndComplement,
  CEP,
  AddressNumber,
  AddressComplement,
  CityLocation,
  District,
  City,
  UF,
  FormsOfPayment,
  OrderFormIcon,
  PaymentButtons,
  CheckoutFormContainer,
  MoneyButton,
  CreditCardButton,
  DebitCardButton,
} from "./styles";

export function CheckoutForm() {
  return (
    <CheckoutFormContainer>
      <OrderFormContainer>
        <h2>
          <DeliveryAddressIcon>
            <MapPinLine size={22} />
          </DeliveryAddressIcon>
          Endereço de Entrega
        </h2>
        <p>Informe o endereço onde deseja receber seu pedido</p>
        <OrderFormContent>
          <CEP type="text" placeholder="CEP" />
          <AddressStreet type="text" placeholder="Rua" />
          <NumberAndComplement>
            <AddressNumber type="text" placeholder="Número" />
            <AddressComplement type="text" placeholder="Complemento" />
          </NumberAndComplement>
          <CityLocation>
            <District type="text" placeholder="Bairro" />
            <City type="text" placeholder="Cidade" />
            <UF type="text" placeholder="UF" />
          </CityLocation>
        </OrderFormContent>
      </OrderFormContainer>
      <FormsOfPayment>
        <h2>
          <OrderFormIcon>
            <CurrencyDollar size={22} />
          </OrderFormIcon>
          Pagamento
        </h2>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        <PaymentButtons>
          <CreditCardButton>
            <CreditCard size={22} />
            CARTÃO DE CRÉDITO
          </CreditCardButton>
          <DebitCardButton>
            <Bank size={22} />
            CARTÃO DE DÉBITO
          </DebitCardButton>
          <MoneyButton>
            <Money size={22} />
            DINHEIRO
          </MoneyButton>
        </PaymentButtons>
      </FormsOfPayment>
    </CheckoutFormContainer>
  );
}
