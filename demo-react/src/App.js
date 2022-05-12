import logo from './logo.svg';
import style from './App.module.css';
import Nav from './components/Nav.jsx';

function App() {
  return (
    <div className={style.App}>
      <Nav>

        <img src={logo} className={style.appLogo} alt="logo" />

        <p>';..;'</p>
      </Nav>
    </div>
  )
  /*
  <div className="App">
    <header className="App-header">
      
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);
*/
}

export default App;
