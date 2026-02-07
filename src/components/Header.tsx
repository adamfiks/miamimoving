import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Areas", href: "#areas" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">M</span>
            </div>
            <div>
              <span className={`font-display font-bold text-lg leading-tight block ${scrolled ? "text-foreground" : "text-card"}`}>
                Miami Moving
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-foreground hover:bg-muted"
                    : "text-card/80 hover:text-card hover:bg-card/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+17865640471"
              className="hidden sm:flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-coral-hover transition-colors animate-pulse-glow"
            >
              <Phone className="w-4 h-4" />
              <span>(786) 564-0471</span>
            </a>
            <a
              href="tel:+17865640471"
              className="sm:hidden flex items-center justify-center w-10 h-10 bg-accent text-accent-foreground rounded-lg"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-card"}`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
