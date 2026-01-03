import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

function Services() {
  return (
    <div className="min-h-screen py-20 px-4">
      {/* ===== Services Cards ===== */}
      <section className="max-w-6xl mx-auto mb-20 text-white">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Fast</CardTitle>
            </CardHeader>
            <CardContent>Super fast performance</CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Secure</CardTitle>
            </CardHeader>
            <CardContent>High level security</CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scalable</CardTitle>
            </CardHeader>
            <CardContent>Ready for growth</CardContent>
          </Card>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="max-w-3xl mx-auto text-white">
        <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is this?</AccordionTrigger>
            <AccordionContent>Landing page for business</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Is it customizable?</AccordionTrigger>
            <AccordionContent>Yes, fully customizable</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}

export default Services;
