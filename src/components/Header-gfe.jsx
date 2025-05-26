import '../styles/style.css';
import logo from '../assets/logo.png';

function Header() {  
  return (
    <header>  
      <img
        src={logo}
        alt="Logo"
        className="logo"
        style={{ height: "70px" }}
      />
      {/* Icono Material Design usando la fuente Material Icons */}
      <span className="material-icons" style={{ verticalAlign: "middle" }}>
       <i class="shopping-cart" ></i>
      </span>
      <span id="contador-carrito"> 0 </span>
    </header>  
  );
}  

export default Header;