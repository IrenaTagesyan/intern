import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./nav.css";

function nav({ size }) {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink className="link" to="/">
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
          <NavLink className="link" to="/shop">
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
          <NavLink className="link" to="/aboutus">
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
          <NavLink className="link" to="/contact">
            {({ isActive, isPending }) => (
              <span
                className={isPending ? "pending" : isActive ? "active" : ""}
              >
                Contact us
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/cart">
            {({ isActive, isPending }) => (
              <span
                className={isPending ? "pending" : isActive ? "active" : ""}
              >
                <FaShoppingCart className="cart_btn" />
                <span className="count_span">{size}</span>
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default nav;
