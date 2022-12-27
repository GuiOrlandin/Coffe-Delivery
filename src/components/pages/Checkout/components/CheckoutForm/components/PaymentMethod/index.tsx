import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentsInput } from "./components/PaymentInput";
import { PaymentMethodContainer } from "./styles";

export const paymentMethodsOptions = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />,
    id: "CreditCard",
  },
  debit: {
    label: "Cartão de Débito",
    icon: <Bank size={16} />,
    id: "DebitCard",
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
    id: "Money",
  },
};

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      {Object.entries(paymentMethodsOptions).map(
        ([key, { label, icon, id }]) => (
          <PaymentsInput
            key={label}
            id={id}
            label={label}
            icon={icon}
            value={key}
          />
        )
      )}
    </PaymentMethodContainer>
  );
}
