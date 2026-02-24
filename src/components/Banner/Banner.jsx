import css from './Banner.module.css';
import Botao from '../Botao/Botao.jsx';

export default function Banner(){
    return (
        <div className={css.fundo_banner + " d-flex align-items-center"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col justify-content-center align-items-center text-white"}>
                        <div ><span className={css.coisinha}>Curadoria Exclusiva</span></div>
                        <div>
                        <h1 className={css.titulo_banner}><span className={"d-block"}>Descubra seu</span>
                            <span className={"d-block " + css.colorGradiente}>próximo capítulo.</span></h1></div>
                        <div>
                            <p className={css.frase_banner}><span className={"d-block"}>Mergulhe em histórias que transformam.
                            Explore</span>
                            <span className={"d-block"}>nossa seleção premium de obras
                            clássicas e</span><span className={"d-block"}>contemporâneas.</span></p>
                        </div>
                        <div className={"d-flex flex-column flex-md-row align-items-center gap-4 mt-4 wi"}>
                            <Botao Varialvel2={'botao1'} Text_B={"Explorar Catalogo"}/>
                            <Botao Varialvel2={'botao2'} Text_B={"Ver Promoções"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}