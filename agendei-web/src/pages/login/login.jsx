import "./login.css"
import logo from "../../assets/logo.png"
import fundo from "../../assets/fundo.png"

function Login() {
    return <div className="row">
        <div className="col-sm-5 d-flex">
            <form >
                <img src={logo} />
                <h5>Gerencie seus agendamentos de forma descomplicada.</h5>
                <h5>Acesse sua conta </h5>

                <div>
                    <input type="email" placeholder="Email" />
                </div>
                <div>
                    <input type="password" placeholder="Senha" />
                </div>
                <div>
                    <button type="submit">Entrar</button>
                </div>

                <div>
                    <span>Não tenha uma conta?</span>
                    <a href="/register">Cadastre-se</a>
                </div>
            </form>
        </div>

        <div className="col-sm-7">
            <img src={fundo}/>
        </div>

    </div>
}

export default Login;