import { NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink className="link" to="/" activeClassName="active">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className="link" to="/shop" activeClassName="active">
            Shop
          </NavLink>
        </li>

        <li>
          <NavLink className="link" to="/aboutus" activeClassName="active">
            About us
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contact" activeClassName="active">
            Contact us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
