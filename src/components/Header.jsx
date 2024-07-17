import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const loginHandler = () => {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };
  return (
    <div className="header">
      <Link to='/'>
        <div className="logoContainer">
          <img alt="logo" src={LOGO_URL} />
        </div>
      </Link>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
          <button onClick={loginHandler}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
