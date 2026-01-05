function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide complete digital solutions to help your business grow.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {/* Service 1 */}
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Digital Marketing</h2>
              <p className="mt-4 text-gray-600">
                Grow your brand with targeted marketing strategies, social media
                campaigns, and performance ads.
              </p>
            </div>

            <div className="h-64 rounded-xl bg-gray-100" />
          </div>

          {/* Service 2 */}
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 h-64 rounded-xl bg-gray-100" />

            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-semibold">Web Development</h2>
              <p className="mt-4 text-gray-600">
                Modern, fast and responsive websites built with the latest
                technologies.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-semibold">SEO Optimization</h2>
              <p className="mt-4 text-gray-600">
                Improve your search engine ranking and attract organic traffic.
              </p>
            </div>

            <div className="h-64 rounded-xl bg-gray-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
