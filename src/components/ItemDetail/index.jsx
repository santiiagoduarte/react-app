import React from "react";
import ItemCount from "../ItemCount";

const ItemDetail = ({ img, title, price }) => {
    const onAdd = () => {
        console.log('You added items to the cart.')
    }

    let itemCardStyle = {
        borderRadius: 30,
        background: 'white',
        fontWeight: 'none',
        marginBottom: 50,
        padding: 20,
        width: 500,
        heigth: 500,
        fontSize: 16
    };
    
    let itemTextStyle = {
        fontSize: 16
    }; 
    
    let itemImageStyle = {
        borderRadius: 50,
        padding: 15,
        width: 300,
        heigth: 300
    }

    return (
        <div style={itemCardStyle}>
        <img style={itemImageStyle} src={img} alt="" />
        <h2 style={itemTextStyle}>{title}</h2>
        <h3 style={itemTextStyle}>${price}</h3>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
    )
}

export default ItemDetail;

//title
//price
//img