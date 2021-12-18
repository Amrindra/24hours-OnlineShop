export const initialState = {
  cart: [],
  user: null
};

// this function calculate the subtotal in the CART
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        // action.user will set the user depend on the condition
        user: action.user
      };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.item] };

    case "REMOVE_FROM_CART":
      // copying the current state basket into the new basket
      let newCart = [...state.cart];

      // finding the index and we check to see if product exists
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      if (index >= 0) {
        //item exists in basket, remove it
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id} as it's not in the cart)`
        );
      }

      return { ...state, cart: newCart };

    default:
      return state;
  }
}

export default reducer;
