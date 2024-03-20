import fondoKobe from './fondoKobe.jpg';
import './App.css';
import {NavBar} from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={fondoKobe} className="kobe" alt="fotokobe" />
        <p>
          hola
        </p>
      </header>
    </div>
  );
}

export default App;
