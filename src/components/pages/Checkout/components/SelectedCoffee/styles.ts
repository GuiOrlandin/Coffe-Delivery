import styled from "styled-components";

export const CoffeSelectedContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors["--button"]};
  p {
    display: flex;

    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme.colors["--subtitle"]};
  }
  img {
    height: 4rem;
    width: 4rem;
  }
`;

export const Price = styled.strong`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: 1px solid ${(props) => props.theme.colors["--text"]};
  margin-left: 3.125rem;
  margin-bottom: 2rem;
`;

export const CoffeSelectedContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
`;

export const CoffeSelectedButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;
