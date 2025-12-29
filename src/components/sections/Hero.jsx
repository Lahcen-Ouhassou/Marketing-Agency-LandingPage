import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="py-24 text-center bg-gradient-to-b from-background to-muted">
      <h1 className="text-5xl font-bold mb-6">Grow Your Business</h1>

      <p className="text-muted-foreground max-w-xl mx-auto mb-8">
        We help brands grow with modern marketing solutions.
      </p>

      <div className="flex justify-center gap-4">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
    </section>
  );
}

export default Hero;
