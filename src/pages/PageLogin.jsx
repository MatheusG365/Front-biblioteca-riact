import Input from "../components/Input/Input.jsx";
import Botao from "../components/Botao/Botao.jsx";
import {Link} from "react-router-dom";

export default function PageLogin() {
    return (
        <main>
            <div className="container d-flex justify-content-center align-items-center flex-column align-items-betwen ">
                <h1>Login</h1>
                <Input label='Email' tipo='Email'/>
                <Input label = 'Senha' tipo='Senha' />
                <div className={'d-flex justify-content-space-between align-items-center'}>
                    <Botao Text_B = 'Logar' Varialvel2={'botao1'}/>
                    <Link to={'/cadastro'}><Botao Text_B = 'Cadastrar' Varialvel2={'botao1'}/></Link>
                </div>
            </div>
        </main>
    )
}