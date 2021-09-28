import { cartActionTypes } from "./cart.type";
const INITIAL_STATE = {
hidden:true
}

const cartReducer = (state = INITIAL_STATE,action) => {
switch(action.type) {
case cartActionTypes.TOGGLE_CART_HIDDEN:
    return{
        ...state,
        hidden:!state
    }
    default: return state
}
}

export default cartReducer