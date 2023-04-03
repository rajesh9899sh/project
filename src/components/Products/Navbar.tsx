import { NavLink } from "react-router-dom";
import "./style.css";

import { useSelector } from "react-redux";

const Navbar = () => {
  const myCart = useSelector((state: any) => state.cart);

  const data = myCart.length;
  return (
    <div className="mainContainer">
      <span className="logo">Redux Store</span>
      <NavLink className="navLink" to="/">
        Home
      </NavLink>
      <NavLink className="navLink" to="/cart">
        Cart
      </NavLink>
      <div className="cartCount">Cart Items: {data}</div>
    </div>
  );
};

export default Navbar;
