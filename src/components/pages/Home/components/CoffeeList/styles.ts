import styled from "styled-components";

export const CoffeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10rem;

  h1 {
    font-size: 2rem;
    font-family: "Baloo 2", cursive;
  }
`;

export const CoffeListContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 3.375rem 0rem;
  gap: 2rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: "Baloo 2", cursive;
  }
`;
