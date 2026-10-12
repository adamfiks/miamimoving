import { Navigate, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, Shield, Truck, Clock, Package } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CityQuoteForm from "@/components/CityQuoteForm";
import { getServiceBySlug, services as allServices } from "@/data/serviceData";
import { cities } from "@/data/cityData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ServicePage = () => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "");
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/" replace />;

  const otherServices = allServices.filter((s) => s.slug !== service.slug);
  const topCities = cities.slice(0, 6);

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
                {service.h1}
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-3xl leading-relaxed">
                {service.heroText}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro & Benefits */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                {service.intro}
              </p>

              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">
                What's Included
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3 mb-12">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 bg-card rounded-xl px-4 py-3.5 border border-border">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              {service.detailedContent.map((block) => (
                <div key={block.heading} className="mb-8">
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {block.heading}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {block.text}{" "}
                    {block.link && <Link to={block.link.href} className="text-primary font-medium hover:underline">{block.link.label}.</Link>}
                  </p>
                </div>
              ))}
              <h2 className="font-display font-bold text-2xl text-foreground mb-5">Your Preparation Checklist</h2>
              <ul className="space-y-3 mb-10">
                {service.preparation.map((item) => <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />{item}</li>)}
              </ul>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">Areas We Serve</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{service.areas.text}</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {service.areas.cities.map((city) => <li key={city.href}><Link to={city.href} className="text-primary font-medium hover:underline">{city.label}</Link></li>)}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="section-padding bg-muted/50">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                Why Trust Miami Moving
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed and insured for your peace of mind on every move." },
                { icon: Truck, title: "Experienced Crews", desc: "Professional movers trained in careful handling of furniture and valuables." },
                { icon: Clock, title: "Transparent Pricing", desc: "Honest rates with no hidden fees or surprise charges." },
                { icon: Package, title: "Careful Handling", desc: "Protective packing materials and techniques to protect every item." },
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

        <section className="section-padding bg-background">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-8">{service.title} FAQs</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`service-faq-${index}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow">
                  <AccordionTrigger className="font-display font-semibold text-card-foreground text-left hover:no-underline py-5">{faq.question}</AccordionTrigger>
                  <AccordionContent forceMount className="text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Quote Form */}
        <CityQuoteForm cityName="Miami" />

        {/* Other Services */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6 text-center">
              Explore Our Other Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-card-foreground">{s.title}</span>
                </Link>
              ))}
            </div>

            <h3 className="font-display font-bold text-xl text-foreground mb-4 text-center">
              Service Areas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {topCities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/${c.slug}`}
                  className="text-center bg-card rounded-xl px-4 py-3 border border-border hover:border-primary/30 hover:shadow-md transition-all text-sm font-medium text-card-foreground"
                >
                  {c.name}
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

export default ServicePage;
