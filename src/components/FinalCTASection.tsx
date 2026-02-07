import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary-foreground mb-6 leading-tight">
            Ready to Make Your Move?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a free, no-obligation quote in minutes. Our friendly team is standing by 7 days a week to help plan your perfect move.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+17865640471"
              className="inline-flex items-center gap-2 bg-accent hover:bg-coral-hover text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl animate-pulse-glow"
            >
              <Phone className="w-5 h-5" />
              Call (786) 564-0471
            </a>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/20 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="mt-8 text-primary-foreground/60 text-sm">
            Open 7 days a week, 8 AM – 10 PM • Licensed & Insured
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
