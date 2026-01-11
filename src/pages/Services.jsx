import {
  FaCode,
  FaPaintBrush,
  FaSearch,
  FaShoppingCart,
  FaTools,
  FaChartLine,
} from "react-icons/fa";
import AnimatedContent from '@/components/AnimatedContent';

export default function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Modern, fast and scalable websites built with the latest technologies.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI / UX Design",
      desc: "Clean and intuitive designs focused on user experience.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Solutions",
      desc: "Complete online stores with secure payments and smooth checkout.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      desc: "Improve your website visibility and ranking on search engines.",
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      desc: "Marketing strategies that help your business grow online.",
    },
    {
      icon: <FaTools />,
      title: "Maintenance & Support",
      desc: "Ongoing support, updates, and performance monitoring.",
    },
  ];

  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* ===== TITLE ===== */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold whitespace-nowrap">Our Services</h1>
            <span className="h-px mt-3 bg-linear-to-l from-transparent to-gray-300 flex-1 "></span>
          </div>

          <p className="text-gray-500">What we can do for your business</p>
        </div>

        {/* ===== SERVICES LIST ===== */}
        <div className="grid gap-14 md:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedContent direction="vertical" reverse={false} disappearEase="bounce.in">
            <div key={index} className="flex gap-6 items-start">
              {/* Icon */}
              <div className="text-3xl text-indigo-600">{service.icon}</div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
