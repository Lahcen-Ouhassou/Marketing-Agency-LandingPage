import { CheckCircle } from "lucide-react";

function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-20">
          <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Us</h2>
            <p className="mt-4 text-gray-600">
            We focus on results, transparency, and long-term growth for your business
          </p>
        </div>
        </div>

        {/* CONTENT */}
        <div className="grid gap-12 md:grid-cols-3">
          
          <div className="flex gap-4">
            <CheckCircle className="text-indigo-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Result-Driven Strategy
              </h3>
              <p className="text-gray-400">
                Every action we take is focused on delivering measurable results.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <CheckCircle className="text-indigo-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Transparent Process
              </h3>
              <p className="text-gray-400">
                Clear communication, reports, and full visibility at every stage.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <CheckCircle className="text-indigo-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Experienced Team
              </h3>
              <p className="text-gray-400">
                Years of experience helping brands scale in competitive markets.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
