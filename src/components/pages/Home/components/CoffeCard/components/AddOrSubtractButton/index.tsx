import { Minus, Plus } from "phosphor-react";
import { ButtonContainer, MinusButton, PlusButton } from "./styles";

interface addOrSubtractButtonProps {
  Increase: () => void;
  Decrease: () => void;
  quantity: number;
}

export function AddOrSubtractButton({
  Increase,
  Decrease,
  quantity,
}: addOrSubtractButtonProps) {
  return (
    <ButtonContainer>
      <MinusButton onClick={Decrease}>
        <Minus weight="bold" />
      </MinusButton>
      <input readOnly type={"number"} min={1} value={quantity} />
      <PlusButton onClick={Increase}>
        <Plus weight="bold" />
      </PlusButton>
    </ButtonContainer>
  );
}
