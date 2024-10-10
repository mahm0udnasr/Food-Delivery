import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
export default function Navbar({ setShowLogin }) {
  const { getCartTotal } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Tomato Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#explore-menu">Menu</a>
        </li>
        <li>
          <a href="#app-download">Mobile App</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <Link to="/cart" className="navbar-basket-icon">
          <span>
            <FaShoppingBag size={23} />
          </span>
          {getCartTotal() > 0 && <div className="dot"></div>}
        </Link>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}
