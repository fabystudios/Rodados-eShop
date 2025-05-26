import Footer from "../components/Footer"
import Header from "../components/Header"
import Nav from "../components/Nav"
import Publicidad from "../components/publicidad"
import "../styles/style.css"

function Home() {

    return(
        <div>
            <Header/>
            <Nav/>
            <Publicidad/> 
            <Footer/>
        </div>
    )
}

export default Home