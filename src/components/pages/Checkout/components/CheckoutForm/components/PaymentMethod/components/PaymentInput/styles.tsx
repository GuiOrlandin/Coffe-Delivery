import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  label {
    z-index: 100;
  }

  input:checked + label div {
    background: ${(props) => props.theme.colors["--purple-light"]};
    border: solid 1px ${(props) => props.theme.colors["--purple-dark"]};
    border-radius: 6px;

    &:hover {
      background: ${(props) => props.theme.colors["--purple-light"]};
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 1.6;
  border: solid 1px transparent;
  background: ${(props) => props.theme.colors["--button"]};
  color: ${(props) => props.theme.colors["--text"]};

  border-radius: 6px;
  text-transform: uppercase;
  cursor: pointer;

  font-size: 0.75rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;

  height: 3rem;
  padding: 0 1rem;

  svg {
    color: ${(props) => props.theme.colors["--purple"]};
    margin-right: 0.75rem;
  }

  &:hover {
    background: ${(props) => props.theme.colors["--hover"]};
  }

  user-select: none;
`;
