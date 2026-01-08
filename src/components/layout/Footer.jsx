import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-3">
              Marketing Agency
            </h3>
            <p className="max-w-sm">
              We help businesses grow online with smart strategies and modern
              digital solutions.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Services</h4>
              <ul className="space-y-2">
                <li>SEO</li>
                <li>Social Media</li>
                <li>Branding</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 h-5 text-sm ">
          © {new Date().getFullYear()} Marketing Agency. All rights reserved
        </div>

      </div>
    </footer>
  );
}

export default Footer;
