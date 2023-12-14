import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Render");

  //if no dep array[] , useEffect is called on every render
  //if dep array is empty = [] , useEffect is called only once for initial render
  //if dep array is [btnNameReact] , useEffect is called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

  export default Header;