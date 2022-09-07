import React from "react";
import { useEffect, useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    let btnStyle = {
        padding: 10, 
        marginLeft: 10,
        fontWeight: 'bold',
        verticalAlign: 'middle',
        textDecoration: 'none',
        color: '#100F0F',
        border: 'none',
        borderRadius: 30,
        background: '#E2DCC8'
    }

    let itemCountStyle = {
        background: 'white',
        borderRadius: 30
    }

    const [count, setCount] = useState(parseInt(initial));

    const removeItem = () => {
        setCount(count - 1);
    }

    const addItem = () => {
        setCount(count + 1);
    }
    useEffect (() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div style={itemCountStyle}>
            
            <p>Stock available: {stock}</p>
            <button style={btnStyle} disabled={count <= 1} onClick={removeItem}>-</button>
            <span> You're selecting {count} item(s)</span>
            <button style={btnStyle} disabled={count >= stock} onClick={addItem}>+</button>
            <br/>
            <br/>
            <div>
                <button style={btnStyle} disabled={count > stock} onClick={() => onAdd(count)} >ADD TO CART</button>
            </div>
        </div>
    );
}


export default ItemCount;