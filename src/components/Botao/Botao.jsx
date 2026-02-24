import css from './Botao.module.css';

export default function Botao({Text_B = "", Varialvel2 = ""}){
    return (

                <a className={css[Varialvel2]}>
                    {Text_B}
                </a>
    )
}