import { Minus, Plus } from "phosphor-react";
import {
  ButtonContainer,
  MinusButton,
  NumberOfCoffe,
  PlusButton,
} from "./styles";

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
      <NumberOfCoffe readOnly type="text" value={quantity} />
      <PlusButton onClick={Increase}>
        <Plus weight="bold" />
      </PlusButton>
    </ButtonContainer>
  );
}
