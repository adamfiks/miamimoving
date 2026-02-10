import { motion } from "framer-motion";
import { ClipboardList, Settings, CalendarCheck, Sofa } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    headline: "Request Your Move",
    text: "Submit your details through our form or give us a call to get started in minutes.",
  },
  {
    icon: Settings,
    headline: "We Handle the Logistics",
    text: "We organize scheduling, access, and building requirements to ensure a smooth move.",
  },
  {
    icon: CalendarCheck,
    headline: "Reserve Your Date",
    text: "A small deposit secures your movers and is deducted from your final total.",
  },
  {
    icon: Sofa,
    headline: "Sit Back & Relax",
    text: "We carefully protect, move, and place your belongings so you can settle in with ease.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">
            Moving Made Simple
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mt-2 mb-4">
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
          {/* Desktop connector lines between icons */}
          <div className="hidden md:block absolute top-12 left-[calc(25%-12px)] w-[calc(50%+24px)] h-px">
            <div className="absolute left-0 right-[66.66%] top-0 h-px bg-border ml-[calc(48px+8px)] mr-[calc(48px+8px)]" />
            <div className="absolute left-[33.33%] right-[33.33%] top-0 h-px bg-border ml-[calc(48px+8px)] mr-[calc(48px+8px)]" />
            <div className="absolute left-[66.66%] right-0 top-0 h-px bg-border ml-[calc(48px+8px)] mr-[calc(48px+8px)]" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.headline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-24 h-24 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-5 relative z-10">
                <step.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Step {index + 1}
              </span>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {step.headline}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm max-w-[260px]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
