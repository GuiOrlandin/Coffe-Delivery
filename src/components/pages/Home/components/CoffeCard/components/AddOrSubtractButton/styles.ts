import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.colors["--button"]};
  border-radius: 8px;
`;

export const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors["--purple"]};

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors["--purple-dark"]};
  }
`;

export const MinusButton = styled(ButtonBase)`
  padding: 0.5625rem 0.25rem 0.5625rem 0.5rem;
`;
export const PlusButton = styled(ButtonBase)`
  padding: 0.5625rem 0.5rem 0.5625rem 0.25rem;
`;
export const NumberOfCoffe = styled.input`
  display: flex;
  text-align: center;
  background: transparent;
  width: 1.25rem;
  border: none;
  font-size: 1rem;
  color: ${(props) => props.theme.colors["--title"]};
`;
