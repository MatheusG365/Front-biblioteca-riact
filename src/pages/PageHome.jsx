import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Home from "../components/Home/Home.jsx";
import Footer from "../components/Footer/Footer.jsx";



export default function PageHome() {
    return (
        <>
            <Header />
            <Banner />
            <Home />
            <Footer frase={'Sua livraria digital de confiança. Uma curadoria minimalista das obras mais impactantes para o seu crescimento.'}/>

        </>
    )
}