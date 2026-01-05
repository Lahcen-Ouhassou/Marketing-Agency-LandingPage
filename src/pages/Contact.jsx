import React from "react";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-gray-100 min-h-[600px]">
      <div className="max-w-6xl mx-auto px-6">
        {/* ===== TITLE ===== */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold whitespace-nowrap">Contact Us</h1>
            <span className="h-px mt-3 bg-gradient-to-l from-transparent to-gray-500 flex-1"></span>
          </div>
          <p className="text-gray-400">Get in touch with our team</p>
        </div>

        {/* ===== FORM + INFO ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ----- Info ----- */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <svg
                className="shrink-0 w-6 h-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <h4 className="font-semibold text-white">Address</h4>
                <p className="text-gray-400 text-sm">
                  123 Marketing St.
                  <br /> New York, NY 10001
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <svg
                className="shrink-0 w-6 h-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-gray-400 text-sm">hello@example.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <svg
                className="shrink-0 w-6 h-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path d="M3 10a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 .7l.6 2a1 1 0 0 1-.2 1l-1.2 1.2a16 16 0 0 0 6 6l1.2-1.2a1 1 0 0 1 1-.2l2 .6a1 1 0 0 1 .7 1V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-11Z" />
              </svg>
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-gray-400 text-sm">+1 234 567 890</p>
              </div>
            </div>

            {/* Hiring */}
            <div className="flex items-start gap-4">
              <svg
                className="shrink-0 w-6 h-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
              <div>
                <h4 className="font-semibold text-white">We're hiring</h4>
                <p className="text-gray-400 text-sm">
                  Check our job openings and join the team.
                </p>
              </div>
            </div>
          </div>
          {/* ----- Inputs ----- */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full   p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 "
              style={{ backgroundColor: "#0B1020" }}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full   p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 "
              style={{ backgroundColor: "#0B1020" }}
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full   p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 "
              style={{ backgroundColor: "#0B1020" }}
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full max-h-48  p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 "
              style={{ backgroundColor: "#0B1020" }}
            ></textarea>
            <button className="mt-4 px-6 py-2 bg-indigo-700 text-neutral-900 rounded-r-3xl font-medium hover:bg-indigo-400 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
