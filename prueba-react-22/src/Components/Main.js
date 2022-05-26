import imagen from '../assets/img/react.svg'
import '../css/Main.css'

function Main() {
    return (
    <main className="main">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Probando ReactJs :D
          </p>
          <img
          src={imagen}
          alt="">
          </img>
        </main>
    );
  }

export default Main;