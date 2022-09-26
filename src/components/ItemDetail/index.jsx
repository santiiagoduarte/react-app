import React from "react";
import { useState, useContext } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import CartContext from "../CartContext/index";


const ItemDetail = ({ img, title, price }) => {

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
    let btnStyle = {
        padding: 10, 
        marginLeft: 10,
        marginTop: 10,
        fontWeight: 'bold',
        verticalAlign: 'middle',
        textDecoration: 'none',
        color: '#100F0F',
        border: 'none',
        borderRadius: 30,
        background: '#E2DCC8'
    }

    const [countItems, setCountItems] = useState(0);
    const {addItem} = useContext(CartContext)

    const onAdd = (count) => {
        addItem(count)
        alert(`You added ${count} items to the cart.`)
        setCountItems(count)
    };

    const linkToCart = 
        <div>
            <Link to="/Cart" style={btnStyle}><a>GO TO CHECKOUT</a></Link>
        </div>

    return (
    <div style={itemCardStyle}>
        <img style={itemImageStyle} src={img} alt="" />
        <h2 style={itemTextStyle}>{title}</h2>
        <h3 style={itemTextStyle}>${price}</h3>
        { countItems == 0 ? 
            <ItemCount initial={1} stock={10} onAdd={onAdd} /> : linkToCart
        }
        <Link to={`/speakers/detail/${title}`} style={btnStyle}><a>SEE MORE</a></Link>
        <br />
        <br />
    </div>
    )
}

export default ItemDetail;
