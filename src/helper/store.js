import { fetchDataFromAPI } from "@/modules/fetch";
import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();

// const getCategory = async () => {
//   const res = await fetchDataFromAPI("/dashboard/category");
//   return res;
// };

// const categories = await getCategory();

const initialState = {
  // cart: { cartItems: [] },
  cart: Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart"))
    : { cartItems: [] },
  // nav: { categories: categories },
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
      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "DELETE_ITEM": {
      const indexToDelete = state.cart.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize
      );
      const cartItems = state.cart.cartItems.splice(indexToDelete, 1);
      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_RESET": {
      return {
        ...state,
        cart: {
          cartItems: [],
          // shippingAddress: "",
          // paymentMethod: "",
        },
      };
    }
    case "LOAD_CATEGORIES": {
      return { ...state, nav: { categories: action.payload } };
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
