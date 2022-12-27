import { InputHTMLAttributes, ReactNode } from "react";
import { ContentContainer, PaymentMethodContainer } from "./styles";

type paymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export function PaymentsInput({
  id,
  icon,
  label,
  ...props
}: paymentMethodInputProps) {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  );
}
