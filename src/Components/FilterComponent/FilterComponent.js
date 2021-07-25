import React from "react";
import { useHomeProductListingContext } from "../../Context/ProductListingContext/ProductListingContext";
import "./FilterComponent.css";

function FilterComponent() {
  const {
    state: { products, filters },
    HomeProductDispatch,
  } = useHomeProductListingContext();

  // utility
  const minPrice = Math.min.apply(
    Math,
    products.map(function (o) {
      return o.price;
    })
  );

  const maxPrice = Math.max.apply(
    Math,
    products.map(function (o) {
      return o.price;
    })
  );

  const allTheProductTags = (products) => {
    const allTheTagsOfProducts = [...products.map((ele) => ele.tag)];
    const setOfAllTheTagsOfProducts = new Set(allTheTagsOfProducts);

    return [...setOfAllTheTagsOfProducts];
  };

  return (
    <div className="filter-bar">
      <h4 className="filterheading">Filters</h4>

      <h4 className="heading">Price Range</h4>
      <input
        className="rangeInput"
        type="range"
        min={minPrice}
        max={maxPrice}
        onChange={(e) =>
          HomeProductDispatch({ type: "PRICE_SORT", payload: e.target.value })
        }
      />
      <h4 className="heading">Products</h4>
      {allTheProductTags(products).map((ele) => (
        <div className="prodTags">
          <label>{ele}</label>
          <input
            type="checkbox"
            checked={filters.productsTags.includes(ele)}
            onClick={() => HomeProductDispatch({type:"ADD_TAG",payload:ele})}
          />
        </div>
      ))}
    </div>
  );
}

export default FilterComponent;
