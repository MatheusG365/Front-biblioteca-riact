import Input from "../components/Input/Input.jsx";
import Botao from "../components/Botao/Botao.jsx";
import {Link} from "react-router-dom";

export default function PageCadastro() {
    return (
        <main className="m-5">
            <div className="container d-flex justify-content-center align-items-center flex-column align-items-betwen ">
                <h1>Cadastro</h1>
                <Input label='Nome' tipo='Nome'/>
                <Input label='Email' tipo='Email'/>
                <Input label = 'Senha' tipo='Senha' />
                <Link to={'/login'}><Botao Text_B = 'Cadastrar' Varialvel2={'botao1'}/></Link>
            </div>
        </main>
    )
}