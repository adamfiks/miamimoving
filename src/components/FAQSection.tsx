import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does a local move cost?",
    answer:
      "Local move costs depend on factors like the number of rooms, distance, and additional services (packing, disassembly). We offer free, no-obligation estimates — call us or fill out our quote form for an accurate price.",
  },
  {
    question: "Do you offer same-day moving services?",
    answer:
      "Yes! Subject to availability, we can accommodate same-day moves. Call us at (786) 564-0471 to check availability and schedule your move.",
  },
  {
    question: "Are my belongings insured during the move?",
    answer:
      "Absolutely. We are fully licensed and insured. Basic coverage is included with every move, and additional full-value protection is available for an extra fee.",
  },
  {
    question: "How should I prepare for my move?",
    answer:
      "We recommend decluttering, labeling boxes, securing valuables separately, and ensuring clear pathways. Our team also offers full packing services if you'd prefer to leave it to the pros.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve all of South Florida including Miami, Fort Lauderdale, Boca Raton, Hollywood, Aventura, West Palm Beach, and surrounding areas. Contact us if you're unsure — we likely cover your area.",
  },
  {
    question: "Can you move specialty items like pianos or artwork?",
    answer:
      "Yes, our team is trained and equipped to handle specialty items including pianos, fine art, antiques, and large appliances with the utmost care.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "We understand plans change. You can cancel or reschedule your move up to 48 hours before the scheduled date at no charge.",
  },
  {
    question: "Do you provide packing materials?",
    answer:
      "Yes, we provide professional-grade packing materials including boxes, bubble wrap, packing paper, and tape. These can be included as part of our packing service or purchased separately.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">
            FAQs
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="font-display font-semibold text-card-foreground text-left hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
