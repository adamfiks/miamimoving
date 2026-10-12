import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, Truck, Package, Shield, Clock, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CityQuoteForm from "@/components/CityQuoteForm";
import { getCityBySlug, getCityFaqs, cities } from "@/data/cityData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = slug ? getCityBySlug(slug) : undefined;

  if (!city) return <Navigate to="/" replace />;

  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 6);
  const faqs = getCityFaqs(city);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/" className="inline-flex items-center gap-1.5 text-primary-foreground/60 hover:text-primary-foreground text-sm font-medium mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-tight mb-4">
                {city.h1}
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-3xl leading-relaxed">
                {city.heroText}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">
                Why Choose Miami Moving for Your {city.name} Relocation?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {city.intro}
              </p>

              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                {city.name} Moving Services We Provide
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {city.localDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 bg-card rounded-xl px-4 py-3.5 border border-border">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-4">
                We handle moves for {city.movingTypes.join(", ")} — no job is too big or too small.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {city.neighborhoodNote}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="section-padding bg-muted/50">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                What Sets Our {city.name} Movers Apart
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed and insured for your peace of mind on every move." },
                { icon: Truck, title: "Experienced Crews", desc: "Professional movers trained in careful handling of furniture and valuables." },
                { icon: Clock, title: "Transparent Pricing", desc: "Honest hourly rates with no hidden fees or surprise charges." },
                { icon: Package, title: "Careful Handling", desc: "Premium packing materials and techniques to protect every item." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form CTA */}
        <CityQuoteForm cityName={city.name} />

        {/* City FAQs */}
        <section className="section-padding bg-muted/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-8 text-center">
              {city.name} Moving FAQs
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent forceMount className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Other service areas */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6 text-center">
              We Also Serve These Areas
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/${c.slug}`}
                  className="flex items-center gap-3 bg-card rounded-xl px-4 py-3.5 border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-card-foreground text-sm">{c.name}</span>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-center">
              <Link to="/" className="text-primary font-semibold hover:underline">
                ← Back to Homepage
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CityPage;
