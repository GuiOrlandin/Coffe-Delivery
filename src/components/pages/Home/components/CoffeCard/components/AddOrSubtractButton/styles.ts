import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors["--button"]};
  border-radius: 8px;

  input {
    display: flex;
    align-items: center;
    width: 1.25rem;
    text-align: center;
    font-size: 1rem;
    border: none;
    color: ${(props) => props.theme.colors["--title"]};
    background: transparent;
    border: none;
  }

  button {
    display: flex;
    padding: 0.75rem 0.5rem;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.colors["--purple"]};
  }
`;

export const ButtonBase = styled.button`
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors["--purple-dark"]};
  }
`;

export const MinusButton = styled(ButtonBase)``;
export const PlusButton = styled(ButtonBase)``;
