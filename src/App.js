// import logo from './logo.svg';
import './App.css';
import HomePage from './components/Homepage/HomePage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
