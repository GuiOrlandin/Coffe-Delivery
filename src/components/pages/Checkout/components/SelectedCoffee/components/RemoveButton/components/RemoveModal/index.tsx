import { ConfirmButton, ModalButton, StyledModal } from "./style";

interface removeModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  HandleRemoveCoffe: () => void;
}

export function RemoveModal({
  isOpen,
  HandleRemoveCoffe,
  toggleModal,
}: removeModalProps) {
  return (
    <StyledModal isOpen={isOpen}>
      <h1>Excluir item</h1>
      <p>Você tem certeza que gostaria de excluir este item?</p>

      <ModalButton>
        <button type="button" onClick={toggleModal}>
          Cancelar
        </button>
        <ConfirmButton type="button" onClick={HandleRemoveCoffe}>
          Sim, excluir
        </ConfirmButton>
      </ModalButton>
    </StyledModal>
  );
}
