import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { CartReducer, intitialSTate } from "./CartListingReducer";

const cartListingContext = createContext();

export const CartListingFUn = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, intitialSTate);
  return (
    <cartListingContext.Provider value={{ state, cartDispatch: dispatch }}>
      {children}
    </cartListingContext.Provider>
  );
};

export const useCartListingContext = () => useContext(cartListingContext);
