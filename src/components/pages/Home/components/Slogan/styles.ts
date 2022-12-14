import styled from "styled-components";
import sloganBackground from "../../../../../assets/slogan-background.svg";

export const SloganContent = styled.div`
  padding: 5.75rem 10rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${() => `url(${sloganBackground}) no-repeat`};

  img {
    margin-left: 3.5rem;
  }
`;

export const SloganText = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 3rem;
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    line-height: 1.3;
  }

  p {
    font-size: 1.25rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    margin-top: 1rem;
  }

  div {
    display: grid;
    grid: repeat(2, 2.5rem) / auto-flow;
    row-gap: 1.25rem;
    column-gap: 1.25rem;
    p {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      margin-top: 4.125rem;
    }
    p:nth-child(1) svg {
      padding: 0.5rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      color: ${(props) => props.theme.colors["--white"]};
      background: ${(props) => props.theme.colors["--yellow-dark"]};
    }
    p:nth-child(2) svg {
      padding: 0.5rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      color: ${(props) => props.theme.colors["--white"]};
      background: ${(props) => props.theme.colors["--yellow"]};
    }
    p:nth-child(3) svg {
      padding: 0.5rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      color: ${(props) => props.theme.colors["--white"]};
      background: ${(props) => props.theme.colors["--text"]};
    }
    p:nth-child(4) svg {
      padding: 0.5rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      color: ${(props) => props.theme.colors["--white"]};
      background: ${(props) => props.theme.colors["--purple"]};
    }
  }
`;
