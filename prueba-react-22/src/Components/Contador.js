import {useState} from 'react'
import '../css/Contador.css'

const Contador = () => {

    const [contador, setContador] = useState(0);
    const reiniciar = (prevState) => setContador(0);
    const sumar = (prevState) => setContador(prevState => prevState +1);
    const restar = (prevState) => {
        if (contador === 0) {
            return;
        }
        else {
            setContador(prevState => prevState -1);
        }
    }

    return (
        <div className='contador'>
            <h4 style={{ color: 'brown' }}>Componente contador</h4>
            <button onClick={sumar}>+</button>
            <p>{contador}</p>
            <button onClick={restar}>-</button>
            <button onClick={reiniciar}>Reiniciar</button>
        </div>
    );
}

export default Contador;