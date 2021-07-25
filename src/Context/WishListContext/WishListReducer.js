export const intitialSTate = {
  wishListItems: [],
};

export const wishListReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishListItems: [payload, ...state.wishListItems],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishListReducer: state.wishListItems.filter(
          (ele) => ele.id !== payload
        ),
      };
    default:
      break;
  }
};
