import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FaqSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What credit score do I need to apply for a credit card?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question: "How can I apply for a credit card online?",
      answer: "",
    },
    {
      question: "Are there any annual fees associated with the credit card?",
      answer: "",
    },
    {
      question:
        "How long does it take to receive the credit card once approved?",
      answer: "",
    },
    {
      question: "How can I check my credit card balance and transactions?",
      answer: "",
    },
    {
      question: "What should I do if my credit card is lost or stolen?",
      answer: "",
    },
    {
      question: "Is my credit card information secure?",
      answer: "",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-16">
      <h2 className="font-bold text-[40px] text-white [font-family:'M_PLUS_1',Helvetica]">
        FAQs
      </h2>

      <div className="w-full max-w-[1020px]">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-[1.5px] border-[#adb2b1] py-4"
            >
              <AccordionTrigger className="flex justify-between">
                <span className="text-left font-bold text-2xl text-white [font-family:'Poppins',Helvetica] leading-8">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[#adb2b1] font-regular-p font-[number:var(--regular-p-font-weight)] text-[length:var(--regular-p-font-size)] tracking-[var(--regular-p-letter-spacing)] leading-[var(--regular-p-line-height)] [font-style:var(--regular-p-font-style)]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
