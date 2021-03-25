import logo from './logo_controle_financeiro.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header item flex-item-1">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          <a href="#">
            Controle financeiro
          </a>
        </h1>
        {/* funcionará apenas na versão desktop */}
        <nav className="side-drawer menu-desktop">
          <div className="close-side-menu"></div>
          <ul>
            <li>
              <a href="#">Resumo |</a>
            </li>
            <li>
              <a href="#">Dashboard | </a>
            </li>
            <li>
              <a href="#">Configurações</a>
            </li>
          </ul>
        </nav>
        {/* fim */}
        {/* funcionará apenas na versão mobile */}
        <div className="menu-hamburger">
          <span class="hamburger"></span>
        </div>
        {/* fim */}
      </header>
      <body>
        <form class="transaction-form">
          <div class="select-transaction">
            <label for="transaction">Tipo de transação</label>
            <select id="transaction" required>
              <option selected disabled value="">Selecione</option>
              <option>Compra</option>
              <option>Venda</option>
            </select>
          </div>
          <div class="Commodity">
            <label for="commodity_name">Nome da mercadoria</label>
            <input type="text" name="commodity_name" id="commodity_name" placeholder="Input" required></input>
          </div>
          <div class="Value">
            <label for="value">Valor</label>
            <input type="number" min="1" step="any" name="value" id="value" placeholder="R$ 0,00" required></input>
          </div>
        </form>
      </body>
    </div>
  );
}

export default App;
