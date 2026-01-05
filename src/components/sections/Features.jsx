function Features() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Features</h2>
          <p className="mt-4 text-gray-600">
            Everything you need to grow your business online
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <a class="block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0] hover:translate-3 hover:bg-yellow-100 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6">
            <h3 class="mt-1 text-xl font-semibold">
              Digital Marketing Strategy
            </h3>

            <p class="mt-2 line-clamp-2 text-pretty">
              We create data-driven marketing strategies to grow your brand and
              increase conversions.
            </p>
          </a>

          {/* Card 2 */}
          <a class="block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0] hover:translate-3 hover:bg-yellow-100 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6">
            <h3 class="mt-1 text-xl font-semibold">Social Media Management </h3>

            <p class="mt-2 line-clamp-2 text-pretty">
              We manage and grow your social media presence with engaging
              content and targeted campaigns.
            </p>
          </a>
          {/* Card 3 */}
          <a class="block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0] hover:translate-3 hover:bg-yellow-100 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6">
            <h3 class="mt-1 text-xl font-semibold">SEO Optimization </h3>

            <p class="mt-2 line-clamp-2 text-pretty">
              We optimize your website to rank higher on Google and attract
              organic traffic.
            </p>
          </a>

          {/* Card 4 */}
          <a
            href="#"
            class="block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0,12px_12px_0_0] hover:translate-3 hover:bg-yellow-100 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6"
          >
            <h3 class="mt-1 text-xl font-semibold">Paid Advertising (Ads) </h3>

            <p class="mt-2 line-clamp-2 text-pretty">
              We run high-performing ads on Google, Facebook, and Instagram to
              maximize ROI.
            </p>
          </a>
          {/* Card 5 */}
          <a
            href="#"
            class="block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0,12px_12px_0_0] hover:translate-3 hover:bg-yellow-100 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6"
          >
            <h3 class="mt-1 text-xl font-semibold">Brand Identity </h3>

            <p class="mt-2 line-clamp-2 text-pretty">
              We build strong brand identities that make your business stand out
              from the competition.
            </p>
          </a>
          {/* Card 2 */}
          <a
            href="#"
            class="block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0,12px_12px_0_0] hover:translate-3 hover:bg-yellow-100 hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6"
          >
            <h3 class="mt-1 text-xl font-semibold">Analytics & Reporting </h3>

            <p class="mt-2 line-clamp-2 text-pretty">
              We track performance and provide clear reports to measure growth
              and success.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Features;
