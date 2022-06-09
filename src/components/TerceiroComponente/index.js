import "./styles.css"

const TerceiroComponente = () => {

    const x = 1;
    const y = 2;

    const calcula = () => {
        console.log((x + y)**2);
    }

    return(
        <div className="box">
            <div className="botao">
                <button type="button" onClick={calcula}>calcular</button>
            </div>
        </div>
    );
}

export default TerceiroComponente;