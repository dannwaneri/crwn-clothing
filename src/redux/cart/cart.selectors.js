import { createSelector } from "reselect";


const selectCat = state => state.cart

export const selectCartItems = createSelector(
[selectCat],
cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity,cartItem)=> 
    accumulatedQuantity+cartItem.quantity,0)
)