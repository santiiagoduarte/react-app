import logo from './logo.svg';
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
        <ItemListContainer msg='Shopping Cart'/>
      </header>
    </div>
  );
}

export default App;
