import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <span className="font-bold text-xl">MarketingPro</span>

        <nav className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
