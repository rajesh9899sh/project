import "./index.css";
import Button from "../../components/common/Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__image">
        <NavLink to="/">
          <img src="/botshotWhiteLogo.webp" alt="loading" />
        </NavLink>
      </div>
      <div className="navbar__titles">
        <ul>
          <li className="navbar__list">
            <NavLink to="/products" className="navbar_a">
              Products
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink to="/platform" className="navbar_a">
              Platform
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink to="/solution" className="navbar_a">
              Solution
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink to="/resource" className="navbar_a">
              Resources
            </NavLink>
          </li>
          <li className="navbar__list">
            <NavLink to="/pricing" className="navbar_a">
              Pricing
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Button label="Schedule a demo" />
      </div>
      <div className="navbar__flag">
        <NavLink to="/contact">
          <img src="/usaFlag.webp" alt="loading" />
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
