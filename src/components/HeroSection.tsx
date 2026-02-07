import { useState } from "react";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    moveDate: "",
    fromLocation: "",
    toLocation: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      toast.error("Please fill in your name, phone, and email.");
      return;
    }
    setSubmitted(true);
    toast.success("Thank you! We'll contact you shortly with your free quote.");
  };
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <section id="quote" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Miami Moving professional movers loading a truck" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-28 md:py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7
        }}>
            <span className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 text-primary-foreground" />
              Licensed & Insured — South Florida's Trusted Movers
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] mb-6 text-primary-foreground">Your Miami Move, 
Handled Right

            <br />
              <span className="text-accent">Miami Move</span>
              <br />
              Starts Here
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
              Professional residential & commercial moving across South Florida.
              Upfront pricing, careful handling, and guaranteed on-time delivery.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="tel:+17865640471" className="inline-flex items-center gap-2 bg-accent hover:bg-coral-hover text-accent-foreground px-6 py-3.5 rounded-lg font-bold text-lg transition-colors shadow-lg">
                <Phone className="w-5 h-5" />
                Call (786) 564-0471
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-primary-foreground/60 text-sm">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-accent" /> 5-Star Rated
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-accent" /> Free Estimates
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-accent" /> No Hidden Fees
              </span>
            </div>
          </motion.div>

          {/* Right: Quote Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }}>
            <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-8 border border-border">
              <h2 className="font-display font-bold text-xl md:text-2xl text-card-foreground mb-1">
                Get Your Free Quote
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Fill out the form and we'll call you within 15 minutes.
              </p>

              {submitted ? <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="font-display font-bold text-xl text-card-foreground mb-2">
                    Quote Request Received!
                  </h3>
                  <p className="text-muted-foreground">
                    Our team will contact you shortly at{" "}
                    <strong>{formData.phone}</strong>.
                  </p>
                </div> : <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" value={formData.name} onChange={e => handleChange("name", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" required maxLength={100} placeholder="Your Name " />
                  <input type="tel" value={formData.phone} onChange={e => handleChange("phone", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" required maxLength={20} placeholder="Phone Number " />
                  <input type="email" value={formData.email} onChange={e => handleChange("email", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" required maxLength={255} placeholder="Email Address " />
                  <input type="date" placeholder="Preferred Move Date" value={formData.moveDate} onChange={e => handleChange("moveDate", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" />
                  <div className="grid grid-cols-2 gap-3">
                    <input placeholder="Moving From" value={formData.fromLocation} onChange={e => handleChange("fromLocation", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" maxLength={200} type="text" />
                    <input type="text" placeholder="Moving To" value={formData.toLocation} onChange={e => handleChange("toLocation", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" maxLength={200} />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-coral-hover text-accent-foreground py-3.5 rounded-lg font-bold text-lg transition-colors shadow-lg">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    No obligation. We respect your privacy.
                  </p>
                </form>}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;