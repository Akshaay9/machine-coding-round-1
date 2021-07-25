import React from "react";
import { useCartListingContext } from "../../Context/CartListingContext/CartListingContext";
import { useHomeProductListingContext } from "../../Context/ProductListingContext/ProductListingContext";
import "./HomeProduct.css";

function HomeProducts() {
  const {
    state: { products },
  } = useHomeProductListingContext();

  const {
    state: { cartItems },
    cartDispatch,
  } = useCartListingContext();

  const isProductAlredyInCart = (item) => {
    let isProductInCart = cartItems.some((ele) => ele.id === item.id);
    console.log(isProductInCart);
    console.log(cartItems);
    if (!isProductInCart) {
      return (
        <button
          onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: item })}
        >
          Add To Cart
        </button>
      );
    } else {
      let itemInCart = cartItems.find((ele) => ele.id === item.id);
      return (
        <div className="addToCart-CTA">
          <button
            disabled={itemInCart.incartQTY === item.inStock}
            onClick={() =>
              cartDispatch({ type: "INCREASE_QTY", payload: item.id })
            }
          >
            +
          </button>
          {itemInCart.incartQTY}
          <button
            onClick={() =>
              itemInCart.incartQTY === 1
                ? cartDispatch({ type: "REMOVE_QTY", payload: item.id })
                : cartDispatch({ type: "DECREASE_QTY", payload: item.id })
            }
          >
            -
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <h3> Products</h3>
      <div className="product-grid">
        {products.map((ele) => (
          <div className="product-container">
            <img src={ele.images[0].img} alt="" />
            <div className="product-desc">
              <h4>{ele.name}</h4>
              <p>{ele.price}</p>
            </div>
            <div className="product-container-CTA">
              {isProductAlredyInCart(ele)}
              <i class="far fa-heart"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProducts;
