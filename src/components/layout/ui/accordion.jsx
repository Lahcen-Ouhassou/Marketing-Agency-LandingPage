export function Accordion({ children }) {
  return <div>{children}</div>;
}

export function AccordionItem({ children }) {
  return <div className="border-b">{children}</div>;
}

export function AccordionTrigger({ children }) {
  return (
    <button className="w-full text-left py-4 font-semibold">{children}</button>
  );
}

export function AccordionContent({ children }) {
  return <div className="pb-4 text-gray-600">{children}</div>;
}
