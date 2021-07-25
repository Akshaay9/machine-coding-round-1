import React from "react";
import { useHomeProductListingContext } from "../../Context/ProductListingContext/ProductListingContext";
import { filterFunction } from "../FilterComponent/FilterFunction";
import "./HomeProduct.css";

function HomeProducts() {
  const {
    state: {
      products,
      filters,
      filters: { sort, PriceRange, Sizes },
    },
    HomeProductDispatch,
  } = useHomeProductListingContext();

  console.log(JSON.stringify(products));

  return (
    <div>
      <h3 className="productsHeading"> Products</h3>
      <div className="filter-sort">
        <h4>Sort By :</h4>
        <h4
          className={`${sort === "POPULARITY" && "underline"}`}
          onClick={() => HomeProductDispatch({ type: "POPULARITY" })}
        >
          Popularity
        </h4>
        <h4
          className={`${sort === "LOW_TO_HIGH" && "underline"}`}
          onClick={() => HomeProductDispatch({ type: "LOW_TO_HIGH" })}
        >
          Price-Low to High
        </h4>
        <h4
          className={`${sort === "HIGH_TO_LOW" && "underline"}`}
          onClick={() => HomeProductDispatch({ type: "HIGH_TO_LOW" })}
        >
          Price-High to Low
        </h4>
      </div>
      <div className="product-grid">
        {filterFunction(products, filters).map((ele) => (
          <div className="product-container">
            <img src={ele.images[0].img} alt="" />
            <div className="product-desc">
              <h4>{ele.name}</h4>
              <p>{ele.price}</p>
            </div>
            <div className="product-container-CTA" style={{ display: "flex" }}>
              <h5>Brand</h5> :-<p>{ele.tag}</p>
            </div>
            <div className="sizes">
              <h5>Sizes</h5>
              {ele.size.map((ele) => (
                <span>-{ele} </span>
              ))}
            </div>
            <div className="sizes">
              <h5>Ideal For</h5>
              {ele.idealFor.map((ele) => (
                <span>-{ele} </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProducts;
