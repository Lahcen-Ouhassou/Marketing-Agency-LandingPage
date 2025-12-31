export default function Hero() {
  return (
    <section className="bg-gray-50 py-32">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <h1 className="text-4xl font-bold sm:text-6xl">Grow your business</h1>

        <p className="mt-4 text-gray-600">
          We help companies grow online with modern strategies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 px-8 py-3 text-white rounded-lg">
            Get Started
          </button>
          <button className="border px-8 py-3 rounded-lg">Learn More</button>
        </div>
      </div>
    </section>
  );
}
