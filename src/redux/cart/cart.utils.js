export const addItemToCart = (cartItems,cartItemsToAdd) =>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id)
    if(existingCartItem){
        cartItems.map(cartItem => 
            cartItem.id === cartItemsToAdd.id ? {...cartItem,quantity: cartItems.quantity+1}:cartItem)
    }
    return [...cartItems,{...cartItemsToAdd,quantity: 1}]
}