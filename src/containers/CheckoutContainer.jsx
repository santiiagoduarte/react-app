import React from "react";
import PageTitle from '../components/PageTitle/index'
import Cart from "../components/Cart/Index";

const CheckoutContainer = ({msg}) => {

    const pageStyle = {
        background: 'white'
    }

    return (
    <div>
        <PageTitle msgTitle={msg}></PageTitle>
        <div style={pageStyle}>
            <Cart/>
        </div>
    </div>
    )
};

export default CheckoutContainer;