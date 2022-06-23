import { useState } from 'react'
// import '../../css/Contador.css'
import styled from '@emotion/styled';

const ContadorContainer = styled.div`
    margin-top: 10px;
    background: radial-gradient(#e66465, transparent 69%);
    padding: 10px;
    border-radius: 10px;
`

const Contador = () => {
    const [contador, setContador] = useState(0);
    const reiniciar = () => setContador(0);
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
        <ContadorContainer>
            <h4 style={{ color: 'brown' }}>Componente contador</h4>
            <button onClick={sumar}>+</button>
            <p>{contador}</p>
            <button onClick={restar}>-</button>
            <button onClick={reiniciar}>Reiniciar</button>
        </ContadorContainer>
    );
}

export default Contador;