import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { AdressDelivery, PaymentInfo } from "../../styles";

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
  const { register } = useFormContext();
  return (
    <CheckoutFormContainer>
      <OrderFormContainer>
        <AdressDelivery>
          <DeliveryAddressIcon>
            <MapPinLine size={22} />
          </DeliveryAddressIcon>
          <h2>Endereço de Entrega</h2>
        </AdressDelivery>
        <p>Informe o endereço onde deseja receber seu pedido</p>
        <OrderFormContent>
          <CEP id="cep" type="number" placeholder="CEP" {...register("cep")} />
          <AddressStreet
            id="adress"
            type="text"
            placeholder="Rua"
            {...register("adress")}
          />
          <NumberAndComplement>
            <AddressNumber
              id="number"
              type="number"
              placeholder="numero"
              {...register("number")}
            />
            <AddressComplement
              id="complement"
              type="text"
              placeholder="Complemento"
              {...register("complement")}
            />
          </NumberAndComplement>
          <CityLocation>
            <District
              id="district"
              type="text"
              placeholder="Bairro"
              {...register("district")}
            />
            <City
              id="city"
              type="text"
              placeholder="Cidade"
              {...register("city")}
            />
            <UF id="uf" type="text" placeholder="UF" {...register("uf")} />
          </CityLocation>
        </OrderFormContent>
      </OrderFormContainer>
      <FormsOfPayment>
        <PaymentInfo>
          <OrderFormIcon>
            <CurrencyDollar size={16} />
          </OrderFormIcon>
          <h2>Pagamento</h2>
        </PaymentInfo>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

        <PaymentButtons>
          <CreditCardButton type="button">
            <CreditCard size={16} />
            CARTÃO DE CRÉDITO
          </CreditCardButton>
          <DebitCardButton type="button">
            <Bank size={16} />
            CARTÃO DE DÉBITO
          </DebitCardButton>
          <MoneyButton type="button">
            <Money size={16} />
            DINHEIRO
          </MoneyButton>
        </PaymentButtons>
      </FormsOfPayment>
    </CheckoutFormContainer>
  );
}
