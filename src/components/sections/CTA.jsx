import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-24 bg-indigo-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to grow your business?
        </h2>

        <p className="text-indigo-100 mb-10">
          Let’s work together to build strategies that bring real results.
        </p>

        <div className="flex justify-center gap-4">
        <Link
            to="/contact"
            className="bg-white text-indigo-600 font-semibold px-8 py-3 opacity-90 cursor-pointer"
           >
            Contact Us
          </Link>

         <Link
            to="/services"
            className="border border-white px-8 py-3 opacity-90 hover:bg-white hover:text-indigo-600 transition cursor-pointer"
          >
            Our Services
          </Link>
        </div>


      </div>
    </section>
  );
}

export default CTA;
