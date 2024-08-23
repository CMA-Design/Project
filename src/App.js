// import logo from './logo.svg';
import './App.css';
import HomePage from './components/Homepage/HomePage';
import Footer from './components/Footer/Footer';
import Playgroup from './components/OurPrograms/Playgroup';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
