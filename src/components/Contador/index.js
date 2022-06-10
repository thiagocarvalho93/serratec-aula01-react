import {useState} from 'react';

const Contador = ({nome}) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{nome}</h1>
            <h1>{count}</h1>
            <input type="button" value="contar" onClick={() => setCount((prevState) => prevState + 1)}></input>
        </>
    )
}

export default Contador;