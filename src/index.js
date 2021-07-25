import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HomeProductListingFun } from "./Context/ProductListingContext/ProductListingContext";
import { CartListingFUn } from "./Context/CartListingContext/CartListingContext";
import { WishListFun } from "./Context/WishListContext/WishListContext";

ReactDOM.render(
  <React.StrictMode>
    <HomeProductListingFun>
      <CartListingFUn>
        <WishListFun>
          <App />
        </WishListFun>
      </CartListingFUn>
    </HomeProductListingFun>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
