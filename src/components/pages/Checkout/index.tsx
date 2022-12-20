import { FormatMoney } from "../../../utils/formatMoney";
import { CheckoutForm } from "./components/CheckoutForm";
import { CoffeSelected } from "./components/SelectedCoffee";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import * as zod from "zod";
import { useCart } from "../../../hooks/useCarts";
import { useContext } from "react";
import { FormContext } from "../../../context/FormContext";

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

export function Checkout() {
  const { cartItems } = useCart();
  const { createFormValues } = useContext(FormContext);

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

  const { handleSubmit } = formValues;

  function handleCreateFormValues(data: formValuesData) {
    console.log(data);
    createFormValues(data);
  }

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
    <CheckoutContainer
      onSubmit={handleSubmit(handleCreateFormValues)}
      action=""
    >
      <FormContainer>
        <h1>Complete seu pedido</h1>
        <FormProvider {...formValues}>
          <CheckoutForm />
        </FormProvider>
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
              <a href="/Success">CONFIRMAR PEDIDO</a>
            </ConfirmOrderButton>
          </ConfirmOrderContainer>
        </SelectedCoffeContainer>
      </div>
    </CheckoutContainer>
  );
}
