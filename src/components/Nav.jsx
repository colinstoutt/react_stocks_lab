import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {
  return (
    <nav>
      <Link to="/" className="link">
        <div>iStocks</div>
      </Link>

      <Link to="/stocks" className="link">
        <div>Dashboard</div>
      </Link>
      <Link to="/about" className="link">
        <div>About</div>
      </Link>
    </nav>
  );
};

export default Nav;
