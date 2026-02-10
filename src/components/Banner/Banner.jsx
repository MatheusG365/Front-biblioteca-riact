import css from './Banner.module.css';

export default function Banner(){
    return (
        <div className={css.fundo_banner}>
            <div className={"justify-content-center align-items-center"}>
                <div className={css.coisinha}><p>Curadoria Exclusiva</p></div>
                <div>
                <h1 className={css.titulo_banner}><span className={"d-block"}>Descubra seu</span>
                    <span className={"d-block"}>próximo capítulo.</span></h1></div>
                <div>
                    <p className={css.frase_banner}><span className={"d-block"}>Mergulhe em histórias que transformam.
                    Explore</span>
                    <span className={"d-block"}>nossa seleção premium de obras
                    clássicas e</span><span className={"d-block"}>contemporâneas.</span></p>
                </div>
            </div>
        </div>
    )
}