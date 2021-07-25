import { createContext, useContext, useReducer } from "react";
import { inititalState, productReducer } from "./ProductListingReducer";

const HomeProductListingContext = createContext();

export const HomeProductListingFun = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, inititalState);
  return (
    <HomeProductListingContext.Provider
      value={{ state, HomePorductDispatch: dispatch }}
    >
      {children}
    </HomeProductListingContext.Provider>
  );
};

export const useHomeProductListingContext = () =>
  useContext(HomeProductListingContext);
