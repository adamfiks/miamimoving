import { motion } from "framer-motion";
import {
  Truck,
  MapPin,
  Building2,
  Package,
  Home,
  Warehouse,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Local Moving",
    description:
      "Fast, reliable local moves within Miami-Dade, Broward, and Palm Beach counties. Same-day availability.",
  },
  {
    icon: MapPin,
    title: "Long Distance",
    description:
      "Cross-state and interstate moving with full tracking, insurance, and on-time delivery guarantees.",
  },
  {
    icon: Building2,
    title: "Commercial Moving",
    description:
      "Minimize business downtime with our efficient office and commercial relocation services.",
  },
  {
    icon: Package,
    title: "Packing & Unpacking",
    description:
      "Professional packing with premium materials. We handle fragile items, artwork, and electronics.",
  },
  {
    icon: Home,
    title: "Residential Moving",
    description:
      "From studios to mansions — we treat your home and belongings with the utmost care.",
  },
  {
    icon: Warehouse,
    title: "Storage Solutions",
    description:
      "Secure, climate-controlled short-term and long-term storage at competitive rates.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">
            What We Offer
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Moving Services Tailored to You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you're moving across the street or across the state, we've got
            you covered with comprehensive, professional solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
