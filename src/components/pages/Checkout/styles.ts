import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.0625rem 10rem 15rem 10rem;
  /* gap: 2.125rem; */

  a {
    text-decoration: none;
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

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectedCoffeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.colors["--card"]};
  border-radius: 8px;
`;

export const ConfirmOrderContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 2.5rem 2.5rem 2.5rem;
`;

export const BaseOptionsButton = styled.div`
  display: flex;
  margin-top: 0.75rem;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;

  p {
    font-size: 0.875rem;
  }

  span {
    font-size: 1rem;
  }

  color: ${(props) => props.theme.colors["--text"]};
`;

export const TotalItens = styled(BaseOptionsButton)`
  margin: 0;
`;

export const DeliveryPrice = styled(BaseOptionsButton)``;

export const TotalPrice = styled(BaseOptionsButton)`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors["--subtitle"]};
`;

export const ConfirmOrderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  padding: 0.75rem 7.4rem;
  border-radius: 8px;
  cursor: pointer;

  background: ${(props) => props.theme.colors["--yellow"]};
  color: ${(props) => props.theme.colors["--white"]};
  font-size: 0.875rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  line-height: 1.6;

  :hover {
    background: ${(props) => props.theme.colors["--yellow-dark"]};
  }
`;
