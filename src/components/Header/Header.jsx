import css from './Header.module.css';

export default function Header({ title = "BOOKPLUS" }) {
    return (
        <header className={ " text-center align-itens-center " + css.header }>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-between">
                            <div className={"d-flex text-center align-items-center" }>
                                <img className={css.img_logo} src="/book.png"/>
                                <h1 className={css.h1_logo}>{title}</h1>
                            </div>
                            <div className={"d-flex text-center gap-2 " + css.div_nav} >
                                <nav className={css.nav + " d-flex"}>
                                    <a href="#">Catálogo</a>
                                    <a href="#">Lançamento</a>
                                    <a href="#">Mais Vendido</a>
                                </nav>
                                <button className={css.buttom}>LOGIN ADMIN</button>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    )
}