import { createSelector } from "reselect";


const selectCat = state => state.cart

export const selectCartItems = createSelector(
[selectCat],
cart => cart.cartItems
);
export const selectCartHidden = createSelector(
    [selectCat],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity,cartItem)=> 
    accumulatedQuantity+cartItem.quantity,0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
      cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity + cartItem.quantity * cartItem.price,
        0
      )
  );
  