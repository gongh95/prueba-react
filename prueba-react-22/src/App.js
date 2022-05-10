import './App.css';
import imagen from './assets/img/react.svg'

function Header() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <ul>
          <li>
            <a
            href="#">
              Inicio
            </a>
            </li>

          <li>
            <a
            href="#">
              Galeria
            </a>
            </li>

          <li>
          <a
            href="#">
              Sobre nosotros
            </a>
          </li>

          <li>
          <a
            href="#">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Probando ReactJs :D
        </p>
        <img
        src={imagen}>
        </img>
      </main>
      <Footer/>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <p>
            Soy un footer cheto ;D
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
