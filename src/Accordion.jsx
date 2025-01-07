import AccordionItem from "./AccordionItem";

function Accordion({ faq }) {
  return (
    <div>
      {faq.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Accordion;
