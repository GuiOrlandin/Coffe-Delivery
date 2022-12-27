import { InputHTMLAttributes, ReactNode } from "react";
import { useFormContext } from "react-hook-form";

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
  const { register } = useFormContext();

  return (
    <PaymentMethodContainer>
      <input
        id={id}
        type="radio"
        // onChange={handleChange}
        {...props}
        {...register("paymentMethod")}
      />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  );
}
