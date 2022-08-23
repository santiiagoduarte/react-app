import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';


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
        <Title msg="Shopping Cart">
        </Title>
      </header>
    </div>
  );
}

export default App;
