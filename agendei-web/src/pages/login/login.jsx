import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./login.css"
import logo from "../../assets/logo.png"
import fundo from "../../assets/fundo.png"
import { api } from "../../constants/api.js";

function Login() {


    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function ExecuteLogin(){
        navigate("/appointments");
    }


    return <div className="row">
        <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
            <form className="form-signin">
                <img src={logo} className="logo mb-4" />
                <h5 className="mb-5">Gerencie seus agendamentos de forma descomplicada.</h5>
                <h5 className="mb-4 text-secondary">Acesse sua conta </h5>

                <div className="mt-4">
                    <input type="email" placeholder="E-mail" 
                    className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mt-2">
                    <input type="password" placeholder="Senha" 
                    className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="mt-3 mb-5">
                    <button onClick={ExecuteLogin} className="btn btn-primary w-100" type="button">Entrar</button>
                </div>

                <div >
                    <span className="me-1">Não tenho uma conta.</span>
                    <Link to="register">Cadastre-se!</Link>
                </div>
            </form>
        </div>

        <div className="col-sm-7">
            <img src={fundo} className="background-login"/>
        </div>

    </div>
}

export default Login;