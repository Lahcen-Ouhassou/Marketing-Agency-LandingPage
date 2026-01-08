import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // had "relative z-50" bch tgha ela dik dev li absoulete w tdoz l lein fch nwta ela home wla contact
    <header className="">
      <div className="mx-auto max-w-screen-xl px-4 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-white hover:opacity-80 transition">
            Marketing Agency
          </h1>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex gap-6 text-l text-white">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden cursor-pointer text-white"
          onClick={() => setOpen(!open)}
        >
          ☰☰
        </button>
      </div>

      {/* Mobile menu */}

      {open && (
        <div className="md:hidden grid grid-cols-1 relative z-50 px-4 py-4 space-y-3 text-white cursor-pointer">
          <Link className="block py-2" to="/">
            Home
          </Link>
          
          <Link className="block py-2" to="/services">
            Services
          </Link>
          <Link className="block py-2" to="/about">
            About
          </Link>
          <Link className="block py-2" to="/contact">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
