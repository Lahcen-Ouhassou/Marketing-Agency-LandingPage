function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-gray-100 h-217">
      <div className="max-w-6xl mx-auto px-6">
        {/* ===== TITLE ===== */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold whitespace-nowrap">About Us</h1>
            <span className="h-px mt-3 bg-linear-to-l from-transparent to-gray-500 flex-1"></span>
          </div>

          <p className="text-gray-400">Who we are & what drives us</p>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="max-w-4xl">
          
          <p className="text-lg leading-relaxed text-gray-300">
            
            We are a digital marketing agency dedicated to helping businesses
            grow and succeed in the online world. Our team combines creativity,
            strategy, and data-driven insights to deliver impactful marketing
            solutions.
            <br />
            <br />
            From building strong brand identities to managing high-performing
            campaigns, we focus on measurable results and long-term success. We
            believe in transparency, innovation, and creating real value for our
            clients through modern digital strategies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
