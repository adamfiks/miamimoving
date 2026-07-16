import { useState, useEffect, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/serviceData";
import { cities } from "@/data/cityData";

const serviceDropdownItems = services.map((s) => ({
  label: s.title,
  href: `/${s.slug}`,
}));

const cityDropdownItems = cities
  .filter((c) => c.slug !== "ojus-movers")
  .map((c) => ({ label: c.name, href: `/${c.slug}` }));

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", dropdown: serviceDropdownItems },
  { label: "Service Areas", href: "/#areas", dropdown: cityDropdownItems },
  { label: "Why Us", href: "/#why-us" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

const NavAnchor = ({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    const [path, hash] = href.split("#");
    const targetPath = path || "/";

    if (location.pathname === targetPath && hash) {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname === "/" && href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    onClick?.();
  };

  return (
    <Link to={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

const DropdownNav = ({
  link,
  scrolled,
}: {
  link: (typeof navLinks)[0];
  scrolled: boolean;
}) => {
  const baseClass = `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
    scrolled
      ? "text-foreground hover:bg-muted"
      : "text-card/80 hover:text-card hover:bg-card/10"
  }`;

  if (!link.dropdown) {
    return (
      <NavAnchor href={link.href} className={baseClass}>
        {link.label}
      </NavAnchor>
    );
  }

  return (
    <div className="relative group">
      <NavAnchor
        href={link.href}
        className={`${baseClass} inline-flex items-center gap-1`}
      >
        {link.label}
        <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180" />
      </NavAnchor>

      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60]">
        <div className="bg-card border border-border rounded-xl shadow-xl py-2 min-w-[220px]">
          {link.dropdown.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (label: string) => {
    setExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border max-h-[80vh] overflow-y-auto">
      <nav className="flex flex-col p-4 gap-1">
        {navLinks.map((link) => {
          if (link.dropdown) {
            const isOpen = expanded === link.label;
            return (
              <div key={link.href}>
                <button
                  onClick={() => toggle(link.label)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="ml-4 flex flex-col gap-0.5 mt-1 mb-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={onClose}
                        className="px-4 py-2.5 rounded-lg text-sm text-foreground/80 hover:bg-muted transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavAnchor
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="px-4 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors"
            >
              {link.label}
            </NavAnchor>
          );
        })}
        <NavAnchor
          href="/#quote"
          onClick={onClose}
          className="mt-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-center hover:opacity-90 transition-opacity"
        >
          Get a Free Quote
        </NavAnchor>
      </nav>
    </div>
  );
};

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
          <Link to="/" className="flex items-center gap-2">
            <div>
              <span
                className={`font-display font-bold text-lg leading-tight block ${
                  scrolled ? "text-foreground" : "text-card"
                }`}
              >
                Miami Moving
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <DropdownNav key={link.href} link={link} scrolled={scrolled} />
            ))}
          </nav>

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
              className={`md:hidden p-2 rounded-lg ${
                scrolled ? "text-foreground" : "text-card"
              }`}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <MobileMenu onClose={() => setMobileOpen(false)} />
      )}
    </header>
  );
};
export default Header;