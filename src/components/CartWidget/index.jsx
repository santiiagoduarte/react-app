import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";


const CartWidget = () => {
    let CartCntxt = useContext(CartContext);
    // let items = CartCntxt.reduce((count, items) => count + items.count, 0);

    let cartWidget = {
        padding: 16, 
        margin: 10,
        cursor: 'pointer',
        verticalAlign: 'middle',
        textDecoration: 'none',
        color: 'white',
        fontSize: 30,
    }

    return (
        <i class="material-icons" style={cartWidget}>add_shopping_cart</i>
    )
}

export default CartWidget;