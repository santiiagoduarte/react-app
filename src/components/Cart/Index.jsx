import React, {useContext} from "react";
import CartContext from "../CartContext/index";

const Cart = () => {
    const {Cart} = useContext (CartContext)

    return(
    <h1>Cart</h1>
    )}

export default Cart;