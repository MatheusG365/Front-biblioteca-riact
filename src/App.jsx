import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/PageHome.jsx";
import PageLogin from "./pages/PageLogin.jsx";
import PageCadastro from "./pages/PageCadastro.jsx";
import PageCatalogo from "./pages/PageCatalogo.jsx";



export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<PageLogin/>}/>
                    <Route path="/cadastro" element={<PageCadastro/>}/>
                    <Route path="/Catalogo" element={<PageCatalogo/>}/>
                </Routes>
                <Footer frase={'Sua livraria digital de confiança. Uma curadoria minimalista das obras mais impactantes para o seu crescimento.'}/>
            </BrowserRouter>
        </>
    )
}