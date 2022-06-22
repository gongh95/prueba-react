import imagen from '../assets/img/react.svg'
import '../css/Main.css'
import Contador from '../Components/Contador/Contador.js'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAxios } from '../hooks/useAxios'
import Galeria from './Galeria/Galeria'

function Main() {
  // const [botonActualizar, setBotonActualizar] = useState()
  // const { data, error, isLoading} = useAxios(botonActualizar, 'https://jsonplaceholder.typicode.com/photos')

  return (
    <main className="main">
        <Contador/>
          {/* <button onClick={() => setBotonActualizar(!botonActualizar)}>Actualizar Estados</button> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>Probando ReactJs :D</p>
          {/* <img src={data} alt="Imagen recuperada de JsonPlaceholder"></img> */}
          <img src={imagen} alt="Ilustracion react"></img>
        <Galeria/>
        </main>
    );
  }

export default Main;