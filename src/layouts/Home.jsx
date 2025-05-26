import Footer from "../components/Footer"
import Header from "../components/Header"
import Nav from "../components/Nav"
import Main from "../components/Main"
import "../styles/style.css"

function Home() {

    return(
        <div>
            <Header/>
            <Nav/>
            <Main/> 
            <Footer/>
        </div>
    )
}

export default Home