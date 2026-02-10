import { useState } from "react";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface CityQuoteFormProps {
  cityName: string;
}

const CityQuoteForm = ({ cityName }: CityQuoteFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    moveDate: "",
    fromLocation: "",
    toLocation: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      toast.error("Please fill in your name, phone, and email.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-quote", {
        body: formData,
      });
      if (error) throw error;
      setSubmitted(true);
      toast.success("Thank you! We'll contact you shortly with your free quote.");
    } catch (err: any) {
      console.error("Quote submission error:", err);
      toast.error("Something went wrong. Please call us directly or try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="city-quote" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary-foreground mb-4">
              Get a Free Moving Quote in {cityName}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-6 leading-relaxed">
              Ready to move? Fill out the form and our {cityName} moving team will
              contact you within 15 minutes with a free, no-obligation estimate.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="tel:+17865640471"
                className="inline-flex items-center gap-2 bg-accent hover:bg-coral-hover text-accent-foreground px-6 py-3.5 rounded-lg font-bold text-lg transition-colors shadow-lg w-fit animate-pulse-glow"
              >
                <Phone className="w-5 h-5" />
                Call (786) 564-0471
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-primary-foreground/60 text-sm">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-accent" /> Licensed & Insured
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-accent" /> Free Estimates
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-accent" /> No Hidden Fees
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-card rounded-2xl shadow-2xl p-6 md:p-8 border border-border">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="font-display font-bold text-xl text-card-foreground mb-2">
                    Quote Request Received!
                  </h3>
                  <p className="text-muted-foreground">
                    Our team will contact you shortly at <strong>{formData.phone}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" required maxLength={100} placeholder="Your Name" />
                  <input type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" required maxLength={20} placeholder="Phone Number" />
                  <input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" required maxLength={255} placeholder="Email Address" />
                  <div className="relative">
                    <input type="date" value={formData.moveDate} onChange={(e) => handleChange("moveDate", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition min-h-[48px]" />
                    {!formData.moveDate && (
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">Moving Date</span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Moving From" value={formData.fromLocation} onChange={(e) => handleChange("fromLocation", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" maxLength={200} />
                    <input type="text" placeholder="Moving To" value={formData.toLocation} onChange={(e) => handleChange("toLocation", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" maxLength={200} />
                  </div>
                  <input type="text" name="website" value={formData.website} onChange={(e) => handleChange("website", e.target.value)} className="absolute opacity-0 pointer-events-none h-0 w-0" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-coral-hover text-accent-foreground py-3.5 rounded-lg font-bold text-lg transition-colors shadow-lg disabled:opacity-60">
                    {loading ? "Sending…" : "Get a Free Quote"}
                    {!loading && <ArrowRight className="w-5 h-5" />}
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    No obligation. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CityQuoteForm;
