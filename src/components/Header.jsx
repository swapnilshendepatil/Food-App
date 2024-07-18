import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatus";
import "./header.css";

const Header = () => {
  const checkOnline = useOnlineStatus();
  const [login, setLogin] = useState("Login");

  const loginHandler = () => {
    setLogin(login === "Login" ? "Logout" : "Login");
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="logoContainer">
          <img alt="logo" src={LOGO_URL} />
        </div>
      </Link>
      <div className="nav-items">
        <ul>
          <li className={checkOnline ? "online-status" : "offline-status"}>
            {checkOnline ? "🟢" : "🔴"}
          </li>
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
            <Link to="/user">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <button onClick={loginHandler}>{login}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
