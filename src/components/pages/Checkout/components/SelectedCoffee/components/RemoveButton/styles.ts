import styled from "styled-components";

export const RemoveButtonContainer = styled.div``;

export const RemoveButtoStyle = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme.colors["--button"]};
  border: none;
  padding: 0.40625rem 0.5rem;
  border-radius: 8px;

  font-size: 0.75rem;
  font-weight: 400;
  font-family: "Roboto", sans-serif;

  svg {
    color: ${(props) => props.theme.colors["--purple"]};
  }

  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors["--hover"]};
  }
`;
