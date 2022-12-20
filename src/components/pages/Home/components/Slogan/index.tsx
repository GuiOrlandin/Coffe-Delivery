import { SloganContainer, SloganText } from "./styles";
import sloganImage from "../../../../../assets/slogan-image.svg";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

export function Slogan() {
  return (
    <SloganContainer>
      <SloganText>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div>
          <p>
            <ShoppingCart weight="fill" /> Compra simples e segura
          </p>
          <p>
            <Timer weight="fill" /> Entrega rápida e rastreada
          </p>
          <p>
            <Package weight="fill" /> Embalagem mantém o café intacto
          </p>
          <p>
            <Coffee weight="fill" /> O café chega fresquinho até você
          </p>
        </div>
      </SloganText>
      <img src={sloganImage} alt="" />
    </SloganContainer>
  );
}
