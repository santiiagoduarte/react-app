import React, {useContext} from "react";
import CartContext from "../CartContext/index";

const Cart = () => {
    const cartcntxt = useContext(CartContext)

    const pageStyle = {
        border: "solid",
        borderRadius: 30,
        background: 'E2DCC8',
        fontWeight: 'none',
        padding: 150,
        fontSize: 100
    }

    return(
        <div style={pageStyle}>
            <p>Cart</p>
        </div>
    )}

export default Cart;