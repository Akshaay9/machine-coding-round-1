import { ProductList } from "../../Data/ProductData";

export const inititalState = {
  products: ProductList,
  filters: {
    sort: "POPULARITY",
    ideal: [],
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
    case "ADD_SIZE":
      return {
        ...state,
        filters: {
          ...state.filters,
          Sizes: state.filters.Sizes.includes(payload)
            ? state.filters.Sizes.filter((ele) => ele !== payload)
            : [...state.filters.Sizes, payload],
        },
      };
    case "ADD_IDEAL":
      return {
        ...state,
        filters: {
          ...state.filters,
          ideal: state.filters.ideal.includes(payload)
            ? state.filters.ideal.filter((ele) => ele !== payload)
            : [...state.filters.ideal, payload],
        },
      };
    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          sort: "POPULARITY",
          ideal: null,
          PriceRange: null,
          productsTags: [],
          Sizes: [],
        },
      };
    default:
      return state;
  }
};
