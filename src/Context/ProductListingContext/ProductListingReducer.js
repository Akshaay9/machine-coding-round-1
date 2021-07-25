import { ProductList } from "../../Data/ProductData";

export const inititalState = {
  products: ProductList,
  filters: {
    sort: "",
    rating: null,
    PriceRange: null,
    productsTags: [],
    Sizes: [],
  },
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOW_TO_HIGH":
      return {
        ...state,
        filters: {
          ...state.filters,
          sort: "LOW_TO_HIGH",
        },
      };
    default:
      return state;
  }
};
