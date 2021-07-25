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
      <h4 className="heading">Brands</h4>
      {allTheProductTags(products).map((ele) => (
        <div className="prodTags">
          <label>{ele}</label>
          <input
            type="checkbox"
            checked={filters.productsTags.includes(ele)}
            onClick={() =>
              HomeProductDispatch({ type: "ADD_TAG", payload: ele })
            }
          />
        </div>
      ))}
      <h4 className="heading">Sizes</h4>

      {/* sizes */}

      <div className="prodTags">
        <label htmlFor="">Small</label>
        <input
          type="checkbox"
          checked={filters.Sizes.includes("s")}
          onClick={() =>
            HomeProductDispatch({ type: "ADD_SIZE", payload: "s" })
          }
        />
      </div>
      <div className="prodTags">
        <label htmlFor="">medium</label>
        <input
          type="checkbox"
          checked={filters.Sizes.includes("m")}
          onClick={() =>
            HomeProductDispatch({ type: "ADD_SIZE", payload: "m" })
          }
        />
      </div>
      <div className="prodTags">
        <label htmlFor="">large</label>
        <input
          type="checkbox"
          checked={filters.Sizes.includes("l")}
          onClick={() =>
            HomeProductDispatch({ type: "ADD_SIZE", payload: "l" })
          }
        />
      </div>
      <div className="prodTags">
        <label htmlFor="">Extra Large</label>
        <input
          type="checkbox"
          checked={filters.Sizes.includes("xl")}
          onClick={() =>
            HomeProductDispatch({ type: "ADD_SIZE", payload: "xl" })
          }
        />
      </div>

      {/* ratings */}
      <h4 className="heading">IdealFor</h4>
      <div className="prodTags">
        <label htmlFor="">Men</label>
        <input
          type="checkbox"
          name="rating"
          checked={filters.ideal.includes("men")}
          onClick={() =>
            HomeProductDispatch({ type: "ADD_IDEAL", payload: "men" })
          }
        />
      </div>
      <div className="prodTags">
        <label htmlFor="">women</label>
        <input
          type="checkbox"
          name="rating"
          checked={filters.ideal.includes("women")}
          onClick={() =>
            HomeProductDispatch({ type: "ADD_IDEAL", payload: "women" })
          }
        />
      </div>

      <button onClick={() => HomeProductDispatch({ type: "CLEAR_FILTER" })}>
        Clear Filter
      </button>
    </div>
  );
}

export default FilterComponent;
