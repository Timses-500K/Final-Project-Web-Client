import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const newItem = action.payload;
      const oldItem = state.cart.cartItems.find(
        (item) => item.id === newItem.id
      );
      const cartItems =
        oldItem && newItem.selectedSize === oldItem.selectedSize
          ? state.cart.cartItems.map((item) =>
              item.name === oldItem.name &&
              item.selectedSize === oldItem.selectedSize
                ? newItem
                : item
            )
          : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "DELETE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) =>
          item.id !== action.payload.id &&
          item.selectedSize !== action.payload.selectedSize
      );
      console.log("cartItems: ", state.cart.cartItems);
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
