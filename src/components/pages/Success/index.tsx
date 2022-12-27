import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext, useEffect } from "react";
import DeliveryIlustration from "../../../assets/ilustration-delivery.svg";
import { FormContext } from "../../../context/FormContext";

import {
  AdressContainer,
  AdressInformation,
  DeliveryInfoContainer,
  ForecastDelivery,
  ImageContainer,
  LinearGradientBorder,
  PaymentInfoContainer,
  StrongParagraph,
  SuccessContainer,
} from "./style";

export function Success() {
  const { formValues } = useContext(FormContext);

  function formatValue(value: string) {
    if (value === "debit") {
      return "Cartão de Débito";
    }
    if (value === "credit") {
      return "Cartão de Crédito";
    }
    return "Dinheiro";
  }

  const fomattedPaymentValue = formValues
    ? formatValue(formValues.paymentMethod)
    : "";

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <LinearGradientBorder>
          <AdressInformation>
            <AdressContainer>
              <MapPin size={32} weight="fill" />
              <div>
                Entrega em{" "}
                <strong>{`${formValues?.address}, ${formValues?.number}`}</strong>
                <p>{`${formValues?.city} - ${formValues?.uf}`}</p>
              </div>
            </AdressContainer>
            <ForecastDelivery>
              <DeliveryInfoContainer>
                <Timer size={32} weight="fill" />
                <div>
                  Previsão de entrega
                  <StrongParagraph>20 min - 30 min </StrongParagraph>
                </div>
              </DeliveryInfoContainer>{" "}
            </ForecastDelivery>
            <PaymentInfoContainer>
              <CurrencyDollar size={32} weight="fill" />
              <div>
                Pagamento na entrega
                <StrongParagraph>{fomattedPaymentValue}</StrongParagraph>
              </div>
            </PaymentInfoContainer>
          </AdressInformation>
        </LinearGradientBorder>
      </div>

      <ImageContainer>
        <img src={DeliveryIlustration} alt="" />
      </ImageContainer>
    </SuccessContainer>
  );
}
