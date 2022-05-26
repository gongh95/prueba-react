import '../css/Header.css'

function Header() {
    return (
      <div className="nav-container">
        <nav className="nav">
          <div className="logo">Logo</div>
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

  export default Header;