import "../styles/style.css";  
import logo from '../assets/logo.png';  
// import Nav from "../components/Nav";
const Header = () => {
  return (
    <>
      {/* <Nav /> */}
      <header className="header">
        <img src={logo} alt="Logo" className="logo" style={{ height: '90px' }} />
        <a href="/carrito.html" className="icono-carrito">
          <span className="material-icons" style={{ fontSize: '30px' }}>shopping_cart</span>
          <span id="contador-carrito">0</span>
        </a>
      </header>
    </>
  );
};

export default Header;
