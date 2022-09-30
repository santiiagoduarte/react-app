import React from "react";

import { createContext, useState } from "react";

export const Context = createContext();

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([]);
    const deleteItem = (itemId) => {
        const filteredCart = cart.filter((item) => item.id !== itemId);
        setCart(filteredCart);
    };
    const clearCart = () => {
        setCart([]);
    };
    const isInCart = (itemId) => {
        return cart.find((item) => item.id === itemId);
    };
    const addItem = (item, count) => {
        let existingItem = isInCart(item.id);
        if (existingItem) {
            existingItem.count += count;
        } else {
            item.count = count;
            cart.push(item);
        }
        setCart([...cart]);
    };

    return (
        <Context.Provider
            value={{ addItem, isInCart, clearCart, deleteItem, cart }}
        >
            {children}
        </Context.Provider>
    );
};

export default CartContext;