import "./styles.css"

const SegundoComponente = () => {
    return(
        <div className="box">
            <div className="usuario">
                <p>usuario:</p>
                <input type="text" />
            </div>
            <div className="senha">
                <p>senha:</p>
                <input type="password" />
            </div>
            <div className="botao">
                <button>Entrar</button>
            </div>

        </div>
    );
}

export default SegundoComponente;