import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-coffe-delivery.svg";
import { HeaderContainer, ShoppingCartNav, ShoppingLocation } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>

      <div>
        <ShoppingLocation>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </ShoppingLocation>
        <ShoppingCartNav>
          <NavLink to="/Checkout" title="Carrinho de Compras">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </ShoppingCartNav>
      </div>
    </HeaderContainer>
  );
}
