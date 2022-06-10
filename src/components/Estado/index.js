import {useState} from 'react';


const Estado = () => {
    const [nome, setNome] = useState("Thiago");
    //let nome = "Thiago"

    const handleClick = () => {
        setNome("André");
        console.log(nome)
    }

    return (
        <div>
            <h1>{nome}</h1>
            <input type="button" value="Mudar Nome" onClick={handleClick} />
        </div>
    )
}

export default Estado;