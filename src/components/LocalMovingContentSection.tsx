import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/data/homeContent";

const LocalMovingContentSection = () => (
  <section className="section-padding bg-muted/50">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-8">{homeContent.heading}</h2>
      <div className="space-y-6">
        {homeContent.paragraphs.map((paragraph) => (
          <p key={paragraph.text} className="text-muted-foreground leading-relaxed">
            {paragraph.text}{" "}
            {paragraph.link && <Link to={paragraph.link.href} className="text-primary font-medium hover:underline">{paragraph.link.label}.</Link>}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        <Button asChild><Link to="/#quote">Get a Free Moving Quote <ArrowRight className="w-4 h-4" /></Link></Button>
        <Button asChild variant="outline"><a href="tel:7865640471"><Phone className="w-4 h-4" /> (786) 564-0471</a></Button>
      </div>
    </div>
  </section>
);

export default LocalMovingContentSection;