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
                Entrega em <strong>RUA TAL, 102</strong>
                <p>Farrapos - Porto Alegre, RS</p>
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
                <StrongParagraph>Cartão de Crédito</StrongParagraph>
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
