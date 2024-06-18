import logo from './logo.svg';
import './App.css';
import HomePage from './components/Homepage/HomePage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage /> {/* Render HomePage component */}
    </div>
  );
}

export default App;
