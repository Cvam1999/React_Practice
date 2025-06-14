import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const { loggedInUser } = data;

  //subscribing to the store to get the cart items
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
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
          <li className=" hover:text-gray-100">
            <Link to="/">Home</Link>
          </li>
          <li className=" hover:text-gray-100">
            <Link to="/about">About</Link>
          </li>
          <li className=" hover:text-gray-100">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="font-bold text-2xl hover:text-gray-100">
            <Link to="/cart">🛒({cartItems.length})</Link>
          </li>
          <button
            className="login cursor-pointer hover:text-gray-100"
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
