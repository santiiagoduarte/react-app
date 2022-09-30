import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import CartContext from "./components/CartContext";
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer';
import LoginContainer from './containers/LoginContainer';
import CheckoutContainer from './containers/CheckoutContainer';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';


const App = () => {
  let styles = {
    fontFamily: 'Helvetica',
    backgroundColor: '#0F3D3E',
    fontWeight: 300
  };

  return (
    <div className='App' style={styles}>

      <>
        <BrowserRouter>
          <CartContext>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<HomeContainer msg='Home' />}/>
              <Route exact path="/About" element={<AboutContainer msg='About' />}/>
              <Route exact path="/speakers" element={<ItemListContainer msg='Our Speakers' />}/>
              <Route exact path="/Contact" element={<ContactContainer msg='Contact' />}/>
              <Route exact path="/Login" element={<LoginContainer msg='Login' />}/>
              <Route exact path="/Cart" element={<CheckoutContainer msg='Checkout' />}/>
              <Route exact path="/speakers/detail/:id" element={<ItemDetailContainer msg='' />}/>
            </Routes>
          </CartContext>
        </BrowserRouter>
      </>

    </div>
  );
}

export default App;
