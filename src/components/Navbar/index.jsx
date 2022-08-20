const Navbar = () => {

    let navbarStyle = {
        display: 'flex',
        alignItems: 'center',
        background: '#42032C',
        color: '#F1EFDC',
        fontFamily: 'Helvetica',
        fontWeight: 300
    }
    
    let navbarTitle = {
        marginRight: 'auto',
        fontSize: 30,
        padding: 12 //16
    }
    
    let logoStyle = {
        padding: 16,
        width: 70,
        height: 70,
    }

    let navbarItem = {
        padding: 16, 
        cursor: 'pointer',
        verticalAlign: 'middle',
        textDecoration: 'none',
        color: '#F1EFDC',
    }

    let loginBtn = {
        padding: 16, 
        cursor: 'pointer',
        verticalAlign: 'middle',
        textDecoration: 'none',
        color: '#F1EFDC',
        border: 'solid',
        borderRadius: 300
    }

    return (
    <nav style={navbarStyle}>
        <a href="#"><img src="logo512.png" alt="" style={logoStyle}/></a>
        <a style={navbarTitle}>Tienda</a>
        <a href="#" style={navbarItem}>Home</a>
        <a href="#" style={navbarItem}>Categories</a>
        <a href="#" style={navbarItem}>Contact</a>
        <a href="#" style={loginBtn}>Login</a>
        <a href="#"><img src="263142.png" alt="Shopping Cart" style={logoStyle}/></a>      
    </nav>
    )
}




export default Navbar;