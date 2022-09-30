import React from "react";
import { Link } from "react-router-dom";
import CartWidget from '../CartWidget';

const Navbar = () => {

    let navbarStyle = {
        display: 'flex',
        alignItems: 'center',
        background: '#100F0F',
        color: '#F1EFDC',
        fontFamily: 'Helvetica',
        fontWeight: 300,
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

    return (
        <nav style={navbarStyle}>
            <Link to={`/`}><a href="#"><img src="https://westlakepro.com/wp-content/uploads/2020/01/Barefoot-Dark-Logo.png" alt="" style={logoStyle}/></a></Link>
            <a style={navbarTitle}>Barefoot Sound</a>
            <Link to={`/about`}><a href="#" style={navbarItem}>About</a></Link>
            <Link to={`/speakers`}><a href="#" style={navbarItem}>Speakers</a></Link>
            <Link to={`/Contact`}><a href="#" style={navbarItem}>Contact</a></Link>
            <Link to={`/Login`}><a href="#" style={loginBtn}>Login</a></Link>
            <Link to={`/Cart`}><CartWidget/></Link>
        </nav>
    )
}

export default Navbar;