// import logo from './logo.svg';
import './App.css';
import HomePage from './components/Homepage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Playgroup from './components/OurPrograms/Playgroup';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header/><HomePage/></>}/>
          <Route path='/Playgroup' element={<Playgroup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
