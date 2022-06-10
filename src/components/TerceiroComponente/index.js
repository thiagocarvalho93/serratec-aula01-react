import "./styles.css"
import {useState} from 'react';

const TerceiroComponente = () => {
    const [[num1,num2], setNums] = useState([0,0])
    const [resultado, setResultado] = useState(0)

    const calcula = () => {
        setResultado((parseInt(num1)+parseInt(num2))**2)
        console.log(resultado)
    }

    return(
        <div className="box">
            <div>
                <input type="text" onChange={(e) => setNums(prevState => [e.target.value, prevState[1]])}/>
            </div>
            <div className="num">
                <input type="text" onChange={(e) => setNums(prevState => [prevState[0], e.target.value])}/>
            </div>
            <div className="botao">
                <input type="submit" value="Calcular" onClick={calcula} />
            </div>
            <div>
                <h1>{resultado}</h1>
            </div>

        </div>
    );
}

export default TerceiroComponente;