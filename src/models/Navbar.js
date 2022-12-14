import "../styles/Navbar.css";
import logo from "../imgs/undefined_w.png";
import Search from "../imgs/VectorSearch.svg";
import Panier from "../imgs/Vectorpanier.svg";

function NavBar() {
  return (
    <nav className="NavBar">
      <a href="#">
        <img src={logo} alt="image" className="logo" />
      </a>
      <ul className="ListeLiens">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <img src={Search} alt="image" className="search" />
        <div className="trait"></div>
        <img src={Panier} alt="image" className="panier" />
      </ul>
    </nav>
  );
}

export default NavBar;
