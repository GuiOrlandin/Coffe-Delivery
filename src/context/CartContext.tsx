import produce from "immer";
import { createContext, ReactNode, useEffect, useState } from "react";
import { coffee } from "../components/pages/Home/components/CoffeCard";

export interface CartItem extends coffee {
  quantity: number;
}

interface CartContentType {
  cartItems: CartItem[];
  AddNewCoffee: (coffe: CartItem) => void;
  updateCoffeeQuantity: (coffe: CartItem) => void;
  RemoveCoffee: (coffe: CartItem) => void;
  cleanStoragedCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "@coffe-delivery:cart-items-1.0.0";

export const CartContext = createContext({} as CartContentType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, SetCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

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

  function cleanStoragedCart() {
    SetCartItems([]);
  }

  function RemoveCoffee(coffee: CartItem) {
    const CoffeWithoutDeleteOne = cartItems.filter((cartItem) => {
      return cartItem !== coffee;
    });
    SetCartItems(CoffeWithoutDeleteOne);
  }

  useEffect(() => {
    const cartItemsJSON = JSON.stringify(cartItems);
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, cartItemsJSON);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        AddNewCoffee,
        updateCoffeeQuantity,
        RemoveCoffee,
        cleanStoragedCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
