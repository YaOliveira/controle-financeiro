import logo from './logo_controle_financeiro.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Controle financeiro
        </h1>
        <div className="menu-hamburger">
          <span class="hamburger"></span>
        </div>
      </header>
    </div>
  );
}

export default App;
