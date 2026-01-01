import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="mx-auto max-w-screen-xl px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Marketing Agency</h1>

        {/* Desktop */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile button */}
        <button className="md:hidden cursor-pointer " onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile menu */}

      {open && (
        <div className="md:hidden grid grid-cols-1 border-t px-4 py-4 space-y-3">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
}
