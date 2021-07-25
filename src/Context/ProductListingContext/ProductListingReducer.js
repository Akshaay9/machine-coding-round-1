import { ProductList } from "../../Data/ProductData";

export const inititalState = {
  products: ProductList,
  filters: {
    sort: "POPULARITY",
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
    case "HIGH_TO_LOW":
      return {
        ...state,
        filters: {
          ...state.filters,
          sort: "HIGH_TO_LOW",
        },
      };
    case "POPULARITY":
      return {
        ...state,
        filters: {
          ...state.filters,
          sort: "POPULARITY",
        },
      };
    default:
      return state;
  }
};
