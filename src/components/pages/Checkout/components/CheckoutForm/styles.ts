import styled from "styled-components";
export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    outline-color: ${(props) => props.theme.colors["--yellow-dark"]};
  }

  h1 {
    font-size: 1.125rem;
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    margin-bottom: 0.9375rem;
  }

  h2 {
    display: flex;
    align-items: flex-start;
    font-size: 1rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
`;
export const DeliveryAddressIcon = styled.h2`
  color: ${(props) => props.theme.colors["--yellow-dark"]};
  margin-right: 0.5rem;
`;
export const OrderFormIcon = styled.h2`
  margin-right: 0.5rem;
  color: ${(props) => props.theme.colors["--purple-dark"]};
`;

export const OrderFormContainer = styled.div`
  display: grid;
  flex-direction: column;
  background: ${(props) => props.theme.colors["--card"]};
  padding: 2.5rem;
  border-radius: 8px;

  p {
    font-size: 0.875rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    margin-left: 1.95rem;
    color: ${(props) => props.theme.colors["--text"]};
  }
  input {
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.colors["--button"]};
    border: none;
    border-radius: 8px;
    padding: 0.75rem;

    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme.colors["--label"]};
  }
`;

export const OrderFormContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const FormsOfPayment = styled.div`
  margin-top: 0.75rem;
  background: ${(props) => props.theme.colors["--card"]};
  padding: 2.5rem;

  p {
    margin-left: 1.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme.colors["--text"]};
  }
`;

export const CreditCardButton = styled.div`
  padding: 1rem 1.229375rem 1rem 1rem;
`;
export const MoneyButton = styled.div`
  padding: 1rem 4.579375rem 1rem 1rem;
`;
export const DebitCardButton = styled.div`
  padding: 1rem 1.729375rem 1rem 1rem;
`;

export const CEP = styled.input`
  width: 12.5rem;
`;

export const AddressStreet = styled.input`
  display: grid;
`;

export const NumberAndComplement = styled.div`
  display: flex;
  gap: 0.75rem;
`;
export const AddressNumber = styled.input`
  width: 12.5rem;
`;

export const ComplementContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: row;
  align-items: center;
  background: none;
  border: none;
  border-radius: 8px;

  p {
    position: absolute;
    font-size: 0.75rem;
    font-style: italic;
    right: 1rem;
  }

  font-size: 0.75rem;
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme.colors["--label"]};
`;

export const AddressComplement = styled.input`
  flex: 1;
  height: 100%;
`;

export const CityLocation = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr 0.1fr;
  gap: 0.75rem;
`;

export const District = styled.input`
  width: 12.5rem;
`;
export const City = styled.input`
  width: auto;
`;

export const UF = styled.input`
  width: 3.75rem;
`;
