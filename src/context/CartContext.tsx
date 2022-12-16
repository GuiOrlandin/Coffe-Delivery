import produce from "immer";
import { createContext, ReactNode, useState } from "react";
import { coffee } from "../components/pages/Home/components/CoffeCard";

export interface CartItem extends coffee {
  quantity: number;
}

interface CartContentType {
  cartItems: CartItem[];
  AddNewCoffee: (coffe: CartItem) => void;
  updateCoffeeQuantity: (coffe: CartItem) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContentType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, SetCartItems] = useState<CartItem[]>([]);

  function AddNewCoffee(coffee: CartItem) {
    const CoffeAlreadyInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (CoffeAlreadyInCart < 0) {
        draft.push(coffee);
      } else {
        draft[CoffeAlreadyInCart].quantity += coffee.quantity;
      }
    });

    SetCartItems(newCart);
  }

  function updateCoffeeQuantity(coffee: CartItem) {
    const CoffeAlreadyInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (CoffeAlreadyInCart < 0) {
        draft.push(coffee);
      } else {
        draft[CoffeAlreadyInCart].quantity = coffee.quantity;
      }
    });

    SetCartItems(newCart);
  }

  return (
    <CartContext.Provider
      value={{ cartItems, AddNewCoffee, updateCoffeeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
