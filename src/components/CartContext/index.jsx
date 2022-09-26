import React from "react";
import { createContext, useState } from "react";

export const Context = createContext();

const CartContext = ({children}) => {
    const [cart, setCart] = useState ([]);
    const addItem = (item, count)=>{
        item.count = count;
        setCart([...cart, item]);
    };
    return <Context.Provider value={{addItem}}>{children}</Context.Provider>;
};

export default CartContext;