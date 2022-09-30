import React from "react";

import { createContext, useState } from "react";

export const Context = createContext();

const CartContext = ({ children }) => {

    const [CartCntxt, setCart] = useState([]);
    const deleteItem = (itemId) => {
        const filteredCart = CartCntxt.filter((items) => items.id !== itemId);
        setCart(filteredCart);
    };
    const clearCart = () => {
        setCart([]);
    };
    const isInCart = (itemId)=>{
        let existingItem = CartCntxt.find ((items)=> items.id === itemId);
        if (existingItem) {return true}
        return false;
    };
    const addItem = (items, count)=>{
        console.log (items);
        let existingItem = CartCntxt.find ((items)=> items.id === items.id);
        if (existingItem) { existingItem.count +=count;
        }else {
            items.count=count;
            setCart([...CartCntxt, items]);}
            console.log (CartCntxt);
    };

    return (
        <Context.Provider value={{ addItem, isInCart, clearCart, deleteItem, CartCntxt }}>{children}</Context.Provider>
    );
};

export default CartContext;