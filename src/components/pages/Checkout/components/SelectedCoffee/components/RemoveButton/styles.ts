import styled from "styled-components";

export const RemoveButtonContainer = styled.div``;

export const RemoveButtoStyle = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme.colors["--button"]};
  border: none;
  border-radius: 8px;
  padding-left: 0.5rem;

  font-weight: 400;
  font-family: "Roboto", sans-serif;
  p {
    font-size: 0.75rem;
    padding: 0.40625rem 0.5rem 0.40625rem 0rem;
    line-height: 1.6;
  }
  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.colors["--purple"]};
  }

  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors["--hover"]};
  }
`;
