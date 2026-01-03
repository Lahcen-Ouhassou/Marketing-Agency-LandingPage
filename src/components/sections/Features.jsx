function Features() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Our Features
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to grow your business online
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">
              Fast Performance
            </h3>
            <p className="mt-3 text-gray-600">
              Optimized solutions for fast and smooth user experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">
              Modern Design
            </h3>
            <p className="mt-3 text-gray-600">
              Clean and modern UI that converts visitors into clients.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">
              SEO Optimized
            </h3>
            <p className="mt-3 text-gray-600">
              Improve your visibility on search engines easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
