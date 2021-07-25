import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { intitialSTate, wishListReducer } from "./WishListReducer";

const wishListContext = createContext();

export const WishListFun = ({ children }) => {
  const [state, dispatch] = useReducer(wishListReducer, intitialSTate);
  return (
    <wishListContext.Provider value={{ state, wishListDispatch: dispatch }}>
      {children}
    </wishListContext.Provider>
  );
};

export const useWishListReducer = () => useContext(wishListContext);
