import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Miami",
  "Miami Beach",
  "Fort Lauderdale",
  "Boca Raton",
  "Hollywood",
  "Hallandale Beach",
  "Aventura",
  "North Miami",
  "North Miami Beach",
  "Sunny Isles Beach",
  "Ojus",
  "West Palm Beach",
];

const ServiceAreasSection = () => {
  return (
    <section id="areas" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">
            Coverage Area
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Serving All of South Florida
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From Boca Raton to Miami and everywhere in between — our team is ready
            to make your move seamless.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Map visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
              <iframe
                title="Miami Moving Service Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459377.31498956986!2d-80.58992872946788!3d26.04443753400985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-80 md:h-96"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Area list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-card rounded-xl px-4 py-3.5 border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-card-foreground text-sm">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground text-sm">
              Don't see your area?{" "}
              <a
                href="tel:+17865640471"
                className="text-accent font-semibold hover:underline"
              >
                Call us
              </a>{" "}
              — we likely serve your neighborhood too.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
