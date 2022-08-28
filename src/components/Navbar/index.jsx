import CartWidget from '../CartWidget';

const Navbar = () => {

    let navbarStyle = {
        display: 'flex',
        alignItems: 'center',
        background: '#100F0F',
        color: '#F1EFDC',
        fontFamily: 'Helvetica',
        fontWeight: 300
    }
    
    let navbarTitle = {
        marginRight: 'auto',
        fontSize: 30,
        padding: 12, //16
        fontStyle: 'bolder'
    }
    
    let logoStyle = {
        padding: 16,
        paddingLeft: 22,
        width: 70,
        height: 70,
    }

    let navbarItem = {
        padding: 16, 
        cursor: 'pointer',
        verticalAlign: 'middle',
        textDecoration: 'none',
        color: 'white',
    }

    let loginBtn = {
        padding: 16, 
        marginLeft: 10,
        cursor: 'pointer',
        verticalAlign: 'middle',
        textDecoration: 'none',
        color: '#100F0F',
        border: 'solid',
        borderRadius: 30,
        background: '#E2DCC8'
    }

    // let cartWidget = {
    //     padding: 16, 
    //     margin: 10,
    //     cursor: 'pointer',
    //     verticalAlign: 'middle',
    //     textDecoration: 'none',
    //     color: '#F1EFDC',
    //     fontSize: 30,
    // }ss

    return (
        <nav style={navbarStyle}>
            <a href="#"><img src="logo512.png" alt="" style={logoStyle}/></a>
            <a style={navbarTitle}>Tienda</a>
            <a href="#" style={navbarItem}>Home</a>
            <a href="#" style={navbarItem}>Categories</a>
            <a href="#" style={navbarItem}>Contact</a>
            <a href="#" style={loginBtn}>Login</a>
            <CartWidget/>
            {/* <a href="#"><img src="263142.png" alt="Shopping Cart" style={logoStyle}/></a>       */}
            {/* <i class="material-icons" style={cartWidget}>add_shopping_cart</i> */}
        </nav>
    )
}

export default Navbar;