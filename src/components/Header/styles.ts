import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`;

export const LocaleAndCart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
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
  display: flex;

  a {
    text-decoration: none;
  }
  svg {
    padding: 0.5rem;
    height: 2.375rem;
    width: 2.375rem;
    outline: 0;
    border: none;
    margin-top: 0.27rem;
    border-radius: 8px;
    background: ${(props) => props.theme.colors["--yellow-light"]};
    color: ${(props) => props.theme.colors["--yellow-dark"]};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -0.7rem;
    margin-top: -0.2rem;
    padding: 0.2rem;
    width: 1.25rem;
    height: 1.25rem;

    font-size: 0.75rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;

    border-radius: 1000px;
    color: ${(props) => props.theme.colors["--white"]};
    background: ${(props) => props.theme.colors["--yellow-dark"]};
  }
`;
