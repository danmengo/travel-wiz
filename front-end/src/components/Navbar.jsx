import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        Travel Wiz
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/destination">Destination</Link>
        </li>
        <li>
          <Link to="/travelplans">TravelPlans</Link>
        </li>
        <li>
          <Link to="/finalpage">FinalPage</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
