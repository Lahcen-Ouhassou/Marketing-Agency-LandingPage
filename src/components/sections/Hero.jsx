import heroIllustration from "@/assets/hero-illustration.svg";
import BlurText from "../BlurText";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0B1020] via-[#121A3A] to-[#0B1020]">
      
      {/* Background blurs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl"></div>
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-60 grid gap-16 lg:grid-cols-2 items-center">
        
        {/* Text */}
        <div className="text-center lg:text-left">
          <BlurText
            textSegments={[
              { text: "Understand user flow and", className: "text-white" },
              { text: "increase ", className: "text-indigo-400" },
              { text: "conversions", className: "text-white" }
            ]}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl font-bold sm:text-6xl"
            onAnimationComplete={() => console.log("Animation done!")}
          />

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            We help businesses design better experiences and grow faster using modern web solutions.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <a
              href="#our-features"
              className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="group rounded-lg px-6 py-3 font-medium text-gray-300 hover:text-white transition inline-flex items-center gap-2"
            >
              Learn More 
              <span className="inline-block scale-125 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="hidden lg:flex justify-center">
          <img
            src={heroIllustration}
            alt="Hero Illustration"
            className="w-[420px] opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
