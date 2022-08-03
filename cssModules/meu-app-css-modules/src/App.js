// nome dado ao import
import logo from './logo.svg';
import estilo from './App.module.css';
import novoestilo from './NovoApp.module.css';

console.log(estilo);

function App() {
  return (
    <div className="App">  
      <header className={novoestilo["App-header"]}>
        <img src={logo} className={estilo["App-logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={estilo['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
