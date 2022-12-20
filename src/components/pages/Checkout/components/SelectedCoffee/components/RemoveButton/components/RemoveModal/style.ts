import styled from "styled-components";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
h1 {
    font-family: "Baloo 2", cursive;
    }

p {
    margin-top: 1rem;
    font-family: "Baloo 2", cursive;
  }
  padding: 1.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  border-radius: 8px;
  color: ${(props) => props.theme.colors["--subtitle"]};

  background: ${(props) => props.theme.colors["--card"]};

`;

export const ModalButton = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  button {
    cursor: pointer;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    padding: 0.5rem;
    border: none;
    overflow: none;
    border-radius: 8px;

    :hover {
      background: ${(props) => props.theme.colors["--button"]};
    }
  }
`;

export const ConfirmButton = styled.button`
  :hover {
    color: ${(props) => props.theme.colors["--red"]};
  }
`;
