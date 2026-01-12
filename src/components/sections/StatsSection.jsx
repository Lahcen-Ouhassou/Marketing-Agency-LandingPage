import ScrollFloat from '../ScrollFloat';
import CountUp from '../CountUp';

function StatsSection() {
 const stats = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];


  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== TITLE (نفس design) ===== */}
        <div className="mb-20 text-center">
           <ScrollFloat
  animationDuration={1}
  ease="back.inOut(2)"
  scrollStart="center bottom+=50%"
  scrollEnd="bottom bottom-=40%"
  stagger={0.03}
  containerClassName=""
  textClassName="text-4xl font-bold sm:text-4xl"
>
 Our Impact in Numbers
</ScrollFloat>

          <p className="mt-4 text-gray-500">
            Numbers that reflect our dedication and success
          </p>
        </div>

        {/* ===== STATS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="transition-transform duration-300 hover:-translate-y-2"
            >
             <h3 className="text-4xl font-extrabold text-indigo-600 mb-2">
  <CountUp
    to={stat.value}
    duration={2}
    className="inline-block"
  />
  <span>{stat.suffix}</span>
</h3>
              <p className="text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default StatsSection;
