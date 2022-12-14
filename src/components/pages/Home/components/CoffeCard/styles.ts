import styled from "styled-components";

export const CoffeCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors["--card"]};
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem 1.25rem;

  img {
    margin-top: -1.45rem;
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 2.0625rem;
    text-align: center;
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme.colors["--label"]};
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: "Baloo 2", cursive;
  }

  div {
    display: flex;
  }
`;

export const CoffeTag = styled.div`
  gap: 0.25rem;
  strong {
    margin-top: 0.75rem;
    margin-bottom: 1rem;
    font-size: 0.625rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    color: ${(props) => props.theme.colors["--yellow-dark"]};
    background: ${(props) => props.theme.colors["--yellow-light"]};
  }
`;

export const Price = styled.p`
  display: flex;
  gap: 0.125rem;

  align-items: center;
  span {
    display: flex;
    margin-top: 0.28rem;
    align-items: flex-end;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors["--text"]};
    font-family: "Roboto", sans-serif;
  }

  strong {
    display: flex;
    font-size: 1.5rem;
    font-weight: 800;
    margin-right: 1.4375rem;
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme.colors["--text"]};
  }
`;

export const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }

  button {
    display: flex;
    border: none;
    border-radius: 8px;
  }
`;

export const CartButton = styled.button`
  margin-left: 0.5rem;
  background: ${(props) => props.theme.colors["--purple-dark"]};
  color: ${(props) => props.theme.colors["--white"]};
  padding: 0.5rem;

  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors["--purple"]};
  }
`;
