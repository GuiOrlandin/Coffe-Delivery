import { Trash } from "phosphor-react";
import { RemoveButtonContainer, RemoveButtoStyle } from "./styles";

export function RemoveButton() {
  return (
    <RemoveButtonContainer>
      <RemoveButtoStyle>
        <Trash size={22} />
        REMOVER
      </RemoveButtoStyle>
    </RemoveButtonContainer>
  );
}
