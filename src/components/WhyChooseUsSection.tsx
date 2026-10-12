import { motion } from "framer-motion";
import {
  Shield,
  Users,
  DollarSign,
  Clock,
  Star,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind. Your belongings are protected every step of the way.",
  },
  {
    icon: Users,
    title: "Experienced Movers",
    description: "Our professional movers handle local residential and commercial moves across South Florida.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No hidden fees, no surprises. Get a transparent quote before we lift a single box.",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description: "We show up when we say we will. Your schedule matters — and we respect it.",
  },
  {
    icon: Star,
    title: "Careful Service",
    description: "We focus on careful handling and clear communication throughout your move.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">
            Why Miami Moving
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mt-2 mb-4">
            The Moving Company You Can Trust
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We combine professionalism, care, and transparent pricing for local
            moves across South Florida.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "Local", label: "South Florida Moves" },
            { number: "Care", label: "For Your Belongings" },
            { number: "Clear", label: "Transparent Pricing" },
            { number: "Insured", label: "Moving Services" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-primary/5 rounded-2xl p-6 border border-primary/10"
            >
              <div className="font-display font-extrabold text-3xl md:text-4xl text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
