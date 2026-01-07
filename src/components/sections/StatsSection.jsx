function StatsSection() {
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "200+", label: "Happy Clients" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== TITLE (نفس design) ===== */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 text-gray-500">
            Numbers that reflect our dedication and success
          </p>
        </div>

        {/* ===== STATS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="transition-transform duration-300 hover:-translate-y-2"
            >
              <h3 className="text-4xl font-extrabold text-indigo-600 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default StatsSection;
