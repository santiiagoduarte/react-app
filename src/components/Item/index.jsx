import React from "react";
import ItemCount from "../ItemCount";

const addItem = (items) => {
    console.log(`You've purchased ${items} in items`);
};

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

// let itemCardLayout = {
//     display: 'flex',
//     alignItems: 'center',
// };

let itemImageStyle = {
    borderRadius: 50,
    padding: 15,
    width: 300,
    heigth: 300
}

const Item = ({ info }) => {
    return (
        <div>
            <div style={itemCardStyle}>
                <img style={itemImageStyle} src={info.image} alt="" />
                <h2 style={itemTextStyle}>{info.itemName}</h2>
                <h3 style={itemTextStyle}>{info.price}</h3>
                <ItemCount initial={1} stock={10} onAdd={addItem} />
            </div>
        </div>
    );
};

export default Item;