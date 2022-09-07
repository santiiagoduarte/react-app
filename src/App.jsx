import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';


const App = () => {
  let styles = {
    fontFamily: 'Helvetica',
    backgroundColor: '#0F3D3E',
    fontWeight: 300
  };
  return (
    <div className='App' style={styles}>
      <Navbar />
      <header>
        <ItemListContainer msg='Our Speakers' />
      </header>
    </div>
  );
}

export default App;
