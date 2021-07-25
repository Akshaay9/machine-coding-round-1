export const filterFunction = (products, filter) => {
  let mutatedProductList = JSON.parse(JSON.stringify(products));

  if (filter.sort === "LOW_TO_HIGH") {
    mutatedProductList.sort((a, b) => a.price - b.price);
  }
  if (filter.sort === "HIGH_TO_LOW") {
    mutatedProductList.sort((b, a) => a.price - b.price);
  }
  if (filter.PriceRange !== null) {
    mutatedProductList = mutatedProductList.filter(
      (ele) => ele.price <= filter.PriceRange
    );
  }
  if (filter.productsTags.length > 0) {
    mutatedProductList = mutatedProductList.filter((ele) =>
      filter.productsTags.includes(ele.tag)
    );
  }
  return mutatedProductList;
};
