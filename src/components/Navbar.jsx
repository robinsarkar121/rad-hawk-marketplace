import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Rad Hawk</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
        <li><Link to="/marketplace">Categories</Link></li>
        <li><Link to="/safety">Safety</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;