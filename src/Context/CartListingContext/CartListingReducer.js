export const intitialSTate = {
  cartItems: [],
};

export const CartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, { ...payload, incartQTY: 1 }],
      };
    case "INCREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((ele) =>
          ele.id === payload ? { ...ele, incartQTY: ele.incartQTY + 1 } : ele
        ),
      };
    case "DECREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((ele) =>
          ele.id === payload ? { ...ele, incartQTY: ele.incartQTY - 1 } : ele
        ),
      };
    case "REMOVE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.filter((ele) => ele.id !== payload),
      };

    default:
      return state;
  }
};
