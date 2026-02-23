import css from './Botao.module.css';

export default function Botao({Text_B = "", Varialvel2 = ""}){
    return (
        <span>
            <div>
                <a className={css[Varialvel2]}>
                    {Text_B}
                </a>
            </div>
        </span>
    )
}