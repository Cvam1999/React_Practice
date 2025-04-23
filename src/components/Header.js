import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const { loggedInUser } = data;
  return (
    <div className="flex justify-between p-4 bg-orange-600">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="nav-items ">
        <ul className="flex p-4 m-4 space-x-4">
          <li>
            Online status :{onlineStatus ? "✅" : "❌"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>cart</li>
          <button
            className="login hover:bg-orange-800 cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li>
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
