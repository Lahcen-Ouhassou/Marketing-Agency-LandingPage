import Hero from "../components/sections/Hero"
import Features from "../components/sections/Features"
import FAQ from "../components/sections/FAQ"
import WhyChooseUs from "../components/sections/WhyChooseUs"
import StatsSection from "../components/sections/StatsSection"
import CTA from "@/components/sections/CTA";



function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhyChooseUs />
      <StatsSection />
      <FAQ />
      <CTA />
    </>
  );
}

export default Home;
