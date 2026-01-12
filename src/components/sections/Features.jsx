import ScrollFloat from '../ScrollFloat';
import AnimatedContent from '../AnimatedContent';

function Features() {
  return (
    <section id="our-features" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
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
  Our Features 
</ScrollFloat>

          <p className="mt-4 text-gray-600">
            Everything you need to grow your business online
          </p>
        </div>

        {/* Cards */}
         <AnimatedContent direction="vertical" reverse={false} disappearEase="bounce.in">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <a class="block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0] hover:translate-3 hover:bg-indigo-400 hover:text-white hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6">
            <h3 class="mt-1 text-xl font-semibold">
              Digital Marketing Strategy
            </h3>

            <p class="mt-2 line-clamp-2 text-pretty">
              We create data-driven marketing strategies to grow your brand and
              increase conversions.
            </p>
          </a>

          {/* Card 2 */}
          <a class="block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0] hover:translate-3 hover:bg-indigo-400 hover:text-white hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6">
            <h3 class="mt-1 text-xl font-semibold">Social Media Management </h3>

            <p class="mt-2 line-clamp-2 text-pretty">
              We manage and grow your social media presence with engaging
              content and targeted campaigns.
            </p>
          </a>
          {/* Card 3 */}
          <a class="block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0] hover:translate-3 hover:bg-indigo-400 hover:text-white hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6">
            <h3 class="mt-1 text-xl font-semibold">SEO Optimization </h3>

            <p class="mt-2 line-clamp-2 text-pretty">
              We optimize your website to rank higher on Google and attract
              organic traffic.
            </p>
          </a>

          {/* Card 4 */}
          <a class="block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0] hover:translate-3 hover:bg-indigo-400 hover:text-white hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6">
            <h3 class="mt-1 text-xl font-semibold">Paid Advertising (Ads) </h3>

            <p class="mt-2 line-clamp-2 text-pretty">
              We run high-performing ads on Google, Facebook, and Instagram to
              maximize ROI.
            </p>
          </a>
          {/* Card 5 */}
          <a class="block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0] hover:translate-3 hover:bg-indigo-400 hover:text-white hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6">
            <h3 class="mt-1 text-xl font-semibold">Brand Identity </h3>

            <p class="mt-2 line-clamp-2 text-pretty">
              We build strong brand identities that make your business stand out
              from the competition.
            </p>
          </a>
          {/* Card 6 */}
          <a class="block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0] hover:translate-3 hover:bg-indigo-400 hover:text-white hover:shadow-none focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6">
            <h3 class="mt-1 text-xl font-semibold">Analytics & Reporting </h3>

            <p class="mt-2 line-clamp-2 text-pretty">
              We track performance and provide clear reports to measure growth
              and success.
            </p>
          </a>
        </div>
        </AnimatedContent>
      </div>
      
    </section>
  );
}

export default Features;
