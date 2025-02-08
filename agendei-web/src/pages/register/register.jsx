import { Link, useNavigate } from "react-router-dom"
import "./register.css"
import logo from "../../assets/logo.png"
import fundo from "../../assets/fundo.png"
import { useState } from "react";
import api from "../../constants/api.js";

function Register() {


    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [msg, setMsg] = useState("");


    async function ExecuteAccount() {

        setMsg("");

        if (password !== password2) {
            return setMsg("As senhas devem ser iguais");
        }

        try {
            const response = await api.post("/users/register", {
                name,
                email,
                password
            });

            if (response.data) {
                localStorage.setItem("sessionToken", response.data.token);
                localStorage.setItem("sessionUserId", response.data.id_user);
                localStorage.setItem("sessionUserEmail", email);
                localStorage.setItem("sessionUserName", name);
                api.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
                navigate("/appointments");
                
            } else {
                setMsg("Erro ao criar conta");
            }
            // navigate("/appointments");
        }
        catch (error) {
            if (error.response?.data.error)
                setMsg(error.response?.data.error);
            else
                setMsg("Erro ao criar conta");
            // console.log(error);
        }
    }



    return <div className="row">
        <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
            <form className="form-signin">
                <img src={logo} className="logo mb-4" />
                <h5 className="mb-5">Crie sua conta agora mesmo.</h5>
                <h5 className="mb-4 text-secondary">Preencha os campos abaixo </h5>


                <div className="mt-4">
                    <input type="text" placeholder="Nome" 
                    className="form-control" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mt-2">
                    <input type="email" placeholder="E-mail" 
                    className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mt-2">
                    <input type="password" placeholder="Senha" 
                    className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="mt-2">
                    <input type="password" placeholder="Cofirme a senha" 
                    className="form-control" onChange={(e) => setPassword2(e.target.value)}/>
                </div>

                <div className="mt-3 mb-5">
                    <button type="button" onClick={ExecuteAccount} className="btn btn-primary w-100">Criar Conta</button>
                </div>

                {
                    msg.length > 0 &&
                    <div className="alert alert-danger" role="alert">
                        {msg}
                    </div>
                }

                <div >
                    <span className="me-1">Já tenho um conta.</span>
                    <Link to="/">Acessar agora!</Link>
                </div>
            </form>
        </div>

        <div className="col-sm-7">
            <img src={fundo} className="background-login"/>
        </div>

    </div>
}

export default Register;