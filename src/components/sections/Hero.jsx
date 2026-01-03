export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0B1020] via-[#121A3A] to-[#0B1020]">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl"></div>
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-82 text-center ">
        <h1 className="text-4xl font-bold text-white sm:text-6xl">
          Understand user flow and
          <span className="text-indigo-400"> increase </span>
          conversions
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a className="rounded bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700">
            Get Started
          </a>
          <a className="rounded px-6 py-3 font-medium text-gray-300 hover:text-white">
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}
