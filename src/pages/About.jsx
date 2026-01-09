import TextType from "@/components/TextType";

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
         <TextType
  text={`We are a digital marketing agency dedicated to helping businesses grow and succeed in the online world. Our team combines creativity, strategy, and data-driven insights to deliver impactful marketing solutions.

From building strong brand identities to managing high-performing campaigns, we focus on measurable results and long-term success. We believe in transparency, innovation, and creating real value for our clients through modern digital strategies.`}
    typingSpeed={20}
  pauseDuration={1000}
  deletingSpeed={20}
  cursorBlinkDuration={0.9}
  loop={false}
  className="text-lg leading-relaxed text-gray-300 break-words"
 />

          
        
        </div>
      </div>
    </section>
  );
}

export default About;
