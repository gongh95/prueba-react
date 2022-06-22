import { useState } from "react";
import { useAxios } from "../../hooks/useAxios"

function Galeria() {

    const [actualizar, setActualizar] = useState(false)

    const { data, error, isLoading } = useAxios([actualizar],'https://jsonplaceholder.typicode.com/photos')

    return (
        <>
        <h3>Galeria</h3>
            <button onClick={() => setActualizar(!actualizar)}>Actualizar</button>
            <ul>
                {
                    isLoading ? <h4>Cargando...</h4> : 
                    
                    error.isError ? <h4 style={{ color: 'red'}}>Error: {error.messagge}</h4> :
                    
                    data.map(item => (
                    // <li key={item.id}>
                    //     {item.title} -- {item.id}
                    // </li>
                    <img src={item.url} key={item.id} alt='Imagen'></img>
                ))}
            </ul>
        </>
    );
};

export default Galeria;