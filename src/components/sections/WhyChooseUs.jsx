import { CheckCircle } from "lucide-react";
import AnimatedContent from '../AnimatedContent';
import ScrollFloat from '../ScrollFloat';


function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-20">
          <div className="mb-16 text-center">
              <ScrollFloat
  animationDuration={1}
  ease="back.inOut(2)"
  scrollStart="center bottom+=50%"
  scrollEnd="bottom bottom-=40%"
  stagger={0.03}
  containerClassName=""
  textClassName="text-4xl font-bold sm:text-4xl"
>
  Why Choose Us
</ScrollFloat>
            <p className="mt-4 text-gray-600">
            We focus on results, transparency, and long-term growth for your business
          </p>
        </div>
        </div>

        {/* CONTENT */}

        <AnimatedContent direction="vertical" reverse={false} disappearEase="bounce.in">
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
        </AnimatedContent>
      </div>
    </section>
  );
}

export default WhyChooseUs;
