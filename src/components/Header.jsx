import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import "./header.css";

const Header = () => {
  const [login, setLogin] = useState('Login')
  const loginHandler = () => {
    login === 'Login' ? setLogin('Logout') : setLogin('Login')
  }
  return (
    <div className="header">
      <div className="logoContainer">
        <img alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button onClick={loginHandler}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
