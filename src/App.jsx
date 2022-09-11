import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import HomeContainer from './containers/HomeContainer';
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
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<HomeContainer msg='Home' />}/>
            <Route exact path="/speakers" element={<ItemListContainer msg='Our Speakers' />}/>
            <Route exact path="/Contact" element={<ContactContainer msg='Contact' />}/>
            <Route exact path="/Login" element={<LoginContainer msg='Login' />}/>
            <Route exact path="/Checkout" element={<CheckoutContainer msg='Checkout' />}/>
            <Route exact path="/speakers/detail/:id" element={<ItemDetailContainer msg='' />}/>
          </Routes>
        </BrowserRouter>
      </>

    </div>
  );
}

export default App;
