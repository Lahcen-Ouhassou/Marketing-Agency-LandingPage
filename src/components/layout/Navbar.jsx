import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 border-b flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
