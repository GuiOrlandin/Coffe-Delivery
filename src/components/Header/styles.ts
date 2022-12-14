import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const ShoppingLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-family: "Roboto", sans-serif;
  gap: 0.465rem;
  background: ${(props) => props.theme.colors["--purple-light"]};
  color: ${(props) => props.theme.colors["--purple-dark"]};
`;

export const ShoppingCartNav = styled.div`
  svg {
    padding: 0.5rem;
    height: 2.375rem;
    width: 2.375rem;
    outline: 0;
    border: none;
    border-radius: 8px;
    background: ${(props) => props.theme.colors["--yellow-light"]};
    color: ${(props) => props.theme.colors["--yellow-dark"]};
  }
`;
