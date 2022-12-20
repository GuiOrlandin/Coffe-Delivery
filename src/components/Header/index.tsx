import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-coffe-delivery.svg";
import { useCart } from "../../hooks/useCarts";
import { Formatitems } from "../../utils/formatMoney";
import {
  HeaderContainer,
  LocaleAndCart,
  ShoppingCartNav,
  ShoppingLocation,
} from "./styles";

export function Header() {
  const { cartItems } = useCart();

  function getTotalItems() {
    let totalItems = 0;
    cartItems.forEach((items) => {
      totalItems += items.quantity;
    });
    return totalItems;
  }
  const totalItems = getTotalItems;
  const totalItemsString = Formatitems(totalItems());

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>

      <LocaleAndCart>
        <ShoppingLocation>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </ShoppingLocation>
        <ShoppingCartNav>
          <NavLink to="/Checkout" title="Carrinho de Compras">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
          {cartItems.length >= 1 ? <span>{totalItemsString}</span> : null}
        </ShoppingCartNav>
      </LocaleAndCart>
    </HeaderContainer>
  );
}
