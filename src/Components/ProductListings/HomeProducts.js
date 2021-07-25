import React from "react";
import { useCartListingContext } from "../../Context/CartListingContext/CartListingContext";
import { useHomeProductListingContext } from "../../Context/ProductListingContext/ProductListingContext";
import { useWishListReducer } from "../../Context/WishListContext/WishListContext";
import "./HomeProduct.css";

function HomeProducts() {
  const {
    state: { products },
  } = useHomeProductListingContext();

  const {
    state: { cartItems },
    cartDispatch,
  } = useCartListingContext();

  const {
    state: { wishListItems },
    wishListDispatch,
  } = useWishListReducer();

  // Cart Functionality
  const isProductAlredyInCart = (item) => {
    let isProductInCart = cartItems.some((ele) => ele.id === item.id);
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

  // wishlist FUnctionality
  const isProductAlredyWished = (item) => {
    const isProductWished = wishListItems.some((ele) => ele.id === item.id);
    if (!isProductWished) {
      return (
        <i
          class="far fa-heart"
          onClick={() =>
            wishListDispatch({ type: "ADD_TO_WISHLIST", payload: item })
          }
        ></i>
      );
    } else {
      return (
        <i
          class="fas fa-heart red"
          onClick={() =>
            wishListDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item.id })
          }
        ></i>
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
              {isProductAlredyWished(ele)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProducts;
