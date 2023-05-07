import { NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink className="link" to="/" activeClassName="active">
            {({ isActive, isPending }) => (
              <span
                className={isPending ? "pending" : isActive ? "active" : ""}
              >
            Home
              </span>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink className="link" to="/shop" activeClassName="active">
            
{({ isActive, isPending }) => (
              <span
                className={isPending ? "pending" : isActive ? "active" : ""}
              >
            Shop
              </span>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink className="link" to="/aboutus" activeClassName="active">
            
            {({ isActive, isPending }) => (
              <span
                className={isPending ? "pending" : isActive ? "active" : ""}
              >
            About us
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contact" activeClassName="active">
            {({ isActive, isPending }) => (
              <span
                className={isPending ? "pending" : isActive ? "active" : ""}
              >
            Contact us
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
