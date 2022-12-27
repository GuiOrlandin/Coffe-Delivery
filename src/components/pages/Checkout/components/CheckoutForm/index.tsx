import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { AdressDelivery, PaymentInfo } from "../../styles";
import { PaymentMethod } from "./components/PaymentMethod";

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
  CheckoutFormContainer,
  ComplementContainer,
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
          <CEP id="cep" type="string" placeholder="CEP" {...register("cep")} />

          <AddressStreet
            id="address"
            type="text"
            placeholder="Rua"
            {...register("address")}
          />
          <NumberAndComplement>
            <AddressNumber
              id="number"
              type="string"
              placeholder="Numero"
              {...register("number", { valueAsNumber: true })}
            />
            <ComplementContainer>
              <AddressComplement
                id="complement"
                type="text"
                placeholder="Complemento"
                {...register("complement")}
              />
              <p>Opcional</p>
            </ComplementContainer>
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
        <PaymentMethod />
      </FormsOfPayment>
    </CheckoutFormContainer>
  );
}
