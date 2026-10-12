import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { serviceAreasContent as content } from "@/data/serviceAreas";

const ServiceAreas = () => (
  <><Header /><main>
    <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-1.5 text-primary-foreground/60 hover:text-primary-foreground text-sm font-medium mb-6"><ArrowLeft className="w-4 h-4" /> Back to Home</Link>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-tight mb-6">{content.h1}</h1>
        <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-3xl">{content.intro}</p>
      </div>
    </section>
    {content.groups.map((group, index) => <section key={group.name} className={`section-padding ${index % 2 ? "bg-muted/50" : "bg-background"}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">{group.name}</h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">{group.intro}</p>
        <ul className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {group.areas.map((area) => <li key={area.slug}>
            <Link to={`/${area.slug}`} className="inline-flex items-center gap-2 font-display font-bold text-lg text-primary hover:underline mb-2">{area.name}<ArrowRight className="w-4 h-4" /></Link>
            <p className="text-muted-foreground leading-relaxed">{area.text}</p>
          </li>)}
        </ul>
      </div>
    </section>)}
    <section className="section-padding bg-muted/50"><div className="max-w-5xl mx-auto">
      <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">{content.sharedHeading}</h2>
      <p className="text-muted-foreground leading-relaxed">{content.sharedText}</p>
      <div className="flex flex-wrap gap-4 mt-8">
        <Button asChild><Link to="/#quote">Get a Free Moving Quote<ArrowRight className="w-4 h-4" /></Link></Button>
        <Button asChild variant="outline"><a href="tel:+17865640471"><Phone className="w-4 h-4" />(786) 564-0471</a></Button>
      </div>
    </div></section>
    <section className="section-padding bg-background"><div className="max-w-3xl mx-auto">
      <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-8">Service Area FAQs</h2>
      <Accordion type="single" collapsible>{content.faqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}>
        <AccordionTrigger className="text-left font-semibold text-foreground">{faq.question}</AccordionTrigger>
        <AccordionContent forceMount className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
      </AccordionItem>)}</Accordion>
    </div></section>
  </main><Footer /></>
);
export default ServiceAreas;