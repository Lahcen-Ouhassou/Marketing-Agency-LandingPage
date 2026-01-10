import { Link } from "react-router-dom";
import ScrollFloat from '../ScrollFloat';

function CTA() {
  return (
    <section className="py-24 bg-indigo-600 text-white">
              
      <div className="max-w-4xl mx-auto px-6 text-center">
 <ScrollFloat
  animationDuration={1}
  ease="back.inOut(2)"
  scrollStart="center bottom+=50%"
  scrollEnd="bottom bottom-=40%"
  stagger={0.03}
  containerClassName=""
  textClassName="text-4xl font-bold sm:text-4xl"
>
   Ready to grow your business?
</ScrollFloat>
       

        <p className="text-indigo-100 mb-10">
          Let’s work together to build strategies that bring real results.
        </p>

        <div className="flex justify-center gap-4">
        <Link
            to="/contact"
            className="bg-white text-indigo-600 font-semibold px-8 py-3 opacity-90 cursor-pointer"
           >
            Contact Us
          </Link>

         <Link
            to="/services"
            className="border border-white px-8 py-3 opacity-90 hover:bg-white hover:text-indigo-600 transition cursor-pointer"
          >
            Our Services
          </Link>
          
        </div>


      </div>
    </section>
  );
}

export default CTA;
