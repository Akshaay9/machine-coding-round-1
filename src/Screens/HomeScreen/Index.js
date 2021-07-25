import React from "react";
import FilterComponent from "../../Components/FilterComponent/FilterComponent";
import HomeProducts from "../../Components/ProductListings/HomeProducts";

function Index() {
  return (
    <div>
      <FilterComponent />
      <HomeProducts />
    </div>
  );
}

export default Index;
