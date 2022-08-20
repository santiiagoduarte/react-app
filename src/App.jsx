import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  let styles = {
    fontFamily: 'Helvetica',
    backgroundColor: '#F1EFDC'
  };
  return (
    <div className='App' style={styles}>
      <Navbar />
      <h1></h1>
    </div>
  );
}

export default App;
