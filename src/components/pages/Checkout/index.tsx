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
import { useNavigate } from "react-router-dom";

const formValuesValidationSchema = zod.object({
  address: zod.string().min(1, "Informe a sua Rua"),
  city: zod.string().min(1, "Informe a sua Cidade"),
  uf: zod.string().min(1, "Informe o seu Estado"),
  district: zod.string().min(1, "Informe o seu Bairro"),
  complement: zod.string(),
  cep: zod.string().min(1, "Informe o CEP"),
  number: zod.number().min(1),
});

type formValuesData = zod.infer<typeof formValuesValidationSchema>;

export function Checkout() {
  const { cartItems, cleanStoragedCart } = useCart();
  const { createFormValues } = useContext(FormContext);

  const formValues = useForm({
    resolver: zodResolver(formValuesValidationSchema),
    defaultValues: {
      address: "",
      city: "",
      uf: "",
      district: "",
      complement: "",
      cep: "",
      number: "",
    },
  });

  const navigate = useNavigate();
  const { handleSubmit } = formValues;

  function handleCreateFormValues(data: formValuesData) {
    createFormValues(data);
    console.log(data);
    navigate("/Success");
    cleanStoragedCart();
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
      <FormProvider {...formValues}>
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

              <ConfirmOrderButton type="submit">
                CONFIRMAR PEDIDO
              </ConfirmOrderButton>
            </ConfirmOrderContainer>
          </SelectedCoffeContainer>
        </div>
      </FormProvider>
    </CheckoutContainer>
  );
}
