import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

function FAQ() {
  return (
    <section className="py-20 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

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
  );
}

export default FAQ;
