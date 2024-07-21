// import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatus";
import "./header.css";
import { useContext } from "react";
import { userContext } from "../context/UserContext";
import { FaCartArrowDown } from "react-icons/fa6";
import { useSelector } from "react-redux";


const Header = () => {
  const checkOnline = useOnlineStatus();
  // const [login, setLogin] = useState("Login");

  // const loginHandler = () => {
  //   setLogin(login === "Login" ? "Logout" : "Login");
  // };
  const userValues = useContext(userContext)
 
const cartItem=useSelector((store)=>store.cart.item)

console.log(cartItem)

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
            <Link to="/cart"><FaCartArrowDown />{cartItem.length}</Link>
          </li>
          {
            userValues.name === '' ? <li>
              <Link to='/login'><button>Login</button></Link>
            </li> : <li>Welcome {userValues.name}</li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;
