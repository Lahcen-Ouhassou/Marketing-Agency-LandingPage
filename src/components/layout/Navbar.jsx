import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Marketing Agency</h1>

        <nav className="flex gap-6">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link to="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

