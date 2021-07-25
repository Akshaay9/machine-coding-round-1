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
    case "PRICE_SORT":
      return {
        ...state,
        filters: {
          ...state.filters,
          PriceRange: Number(payload),
        },
      };
    case "ADD_TAG":
      return {
        ...state,
        filters: {
          ...state.filters,
          productsTags: state.filters.productsTags.includes(payload)
            ? state.filters.productsTags.filter((ele) => ele !== payload)
            : [...state.filters.productsTags, payload],
        },
      };
    default:
      return state;
  }
};
