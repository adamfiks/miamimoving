import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { cities } from "@/data/cityData";

const footerCities = cities.slice(0, 8);

const services = [
  "Local Moving",
  "Long Distance Moving",
  "Commercial Moving",
  "Packing & Unpacking",
  "Residential Moving",
  "Storage Solutions",
];

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">M</span>
              </div>
              <span className="font-display font-bold text-xl">Miami Moving</span>
            </div>
            <p className="text-primary-foreground/60 leading-relaxed mb-6 text-sm">
              South Florida's most trusted moving company. Licensed, insured, and dedicated to making your move stress-free.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+17865640471"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                (786) 564-0471
              </a>
              <a
                href="mailto:info@miami-moving.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@miami-moving.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  1221 Brickell Ave, Suite 900
                  <br />
                  Miami, FL 33131
                </span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0" />
                8 AM – 10 PM, 7 days a week
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2.5">
              {footerCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    to={`/${city.slug}`}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#quote" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                  Get a Free Quote
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="tel:+17865640471"
                className="inline-flex items-center gap-2 bg-accent hover:bg-coral-hover text-accent-foreground px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Miami Moving. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-sm">
            Licensed & Insured • USDOT Registered
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
