import { Trash } from "phosphor-react";
import { useState } from "react";
import { CartItem } from "../../../../../../../context/CartContext";
import { useCart } from "../../../../../../../hooks/useCarts";
import { RemoveModal } from "./components/RemoveModal";
import { RemoveButtonContainer, RemoveButtoStyle } from "./styles";

interface removeButtonProps {
  coffee: CartItem;
}

export function RemoveButton({ coffee }: removeButtonProps) {
  const { RemoveCoffee } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  function HandleRemoveCoffe() {
    RemoveCoffee(coffee);
  }

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <RemoveButtonContainer>
      <RemoveButtoStyle type="button" onClick={toggleModal}>
        <Trash size={22} />
        <p>REMOVER</p>
      </RemoveButtoStyle>
      <RemoveModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        HandleRemoveCoffe={HandleRemoveCoffe}
      />
    </RemoveButtonContainer>
  );
}
