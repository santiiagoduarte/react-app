const CartWidget = () => {

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