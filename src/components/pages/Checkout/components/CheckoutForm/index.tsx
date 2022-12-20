import { useForm, SubmitHandler } from "react-hook-form";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContext } from "../../../../../context/FormContext";
import { AdressDelivery, PaymentInfo } from "../../styles";
import * as zod from "zod";

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

const formValuesValidationSchema = zod.object({
  adress: zod.string().min(1, "Informe a sua Rua"),
  city: zod.string().min(1, "Informe a sua Cidade"),
  uf: zod.string().min(1, "Informe o seu Estado"),
  district: zod.string().min(1, "Informe o seu Bairro"),
  complement: zod.string().min(1, "Informe o seu Complemento"),
  cep: zod.number().min(8, "Informe o seu CEP").max(8),
  number: zod.number().min(1, "Informe o seu Numero").max(6),
});

type formValuesData = zod.infer<typeof formValuesValidationSchema>;

export function CheckoutForm() {
  // const { createFormValues } = useContext(FormContext);

  const formValues = useForm<formValuesData>({
    resolver: zodResolver(formValuesValidationSchema),
    defaultValues: {
      adress: "",
      city: "",
      uf: "",
      district: "",
      complement: "",
      cep: 0,
      number: 0,
    },
  });

  const { register, handleSubmit } = formValues;

  const onSubmit: SubmitHandler<formValuesData> = (data) => console.log(data);

  return (
    <CheckoutFormContainer>
      <OrderFormContainer onSubmit={handleSubmit(onSubmit)}>
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
