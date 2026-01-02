import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/Orange-Residency-Logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Rooms", path: "/rooms" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Nearby", path: "/nearby" },
  { name: "Contact", path: "/contact" },
];

interface NavbarProps {
  variant?: "light" | "dark" | "transparent";
}

export const Navbar = ({ variant = "transparent" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isTransparent = variant === "transparent";
  const showScrolledStyle = isTransparent && isScrolled;

  const bgClass = {
    light: "bg-card/95 backdrop-blur-md border-b border-border",
    dark: "bg-navy",
    transparent: showScrolledStyle 
      ? "bg-navy/95 backdrop-blur-md shadow-lg" 
      : "bg-transparent",
  }[variant];

  const textClass = {
    light: "text-foreground",
    dark: "text-navy-foreground",
    transparent: "text-card",
  }[variant];

  const logoClass = {
    light: "text-foreground",
    dark: "text-navy-foreground",
    transparent: "text-card",
  }[variant];

  // All variants should be positioned absolutely/fixed at top
  const positionClass = isTransparent 
    ? "fixed top-0 left-0 right-0" 
    : "absolute top-0 left-0 right-0";

  return (
    <nav 
      className={`${bgClass} ${positionClass} transition-all duration-300 ease-out w-full z-50`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Top bar - visible on desktop */}
      <div className={`hidden lg:block ${variant === "dark" ? "bg-white/5" : "bg-navy/20"} backdrop-blur-sm`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-end h-9 gap-8 text-[11px] tracking-wide">
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-2.5 text-card/80 hover:text-gold transition-colors duration-300"
            >
              <Phone size={11} strokeWidth={1.5} />
              <span className="font-medium">+91 7200185559</span>
            </a>
            <span className="text-card/30">|</span>
            <span className="text-card/70 font-light">Check-in: 3PM • Check-out: 11AM</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className={`shrink-0 flex items-center transition-all duration-300 ease-out hover:opacity-90`}
          >
            <img src={logoImg} alt="Orange Residency" className="h-12 lg:h-16 object-contain" />
            <span className="sr-only">Orange Residency</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-6 xl:gap-8 mx-8" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-300 ease-out py-2 ${
                  location.pathname === link.path
                    ? "text-gold"
                    : `${textClass} hover:text-gold`
                } group`}
              >
                <span className="relative">
                  {link.name}
                  <span 
                    className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-300 ease-out ${
                      location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                    }`} 
                  />
                </span>
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:block shrink-0">
            <Link to="/booking">
              <Button 
                variant="hero" 
                size="lg"
                className="shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:scale-[1.02] transition-all duration-300 ease-out px-6"
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2.5 ${textClass} transition-all duration-300 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded-sm`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            <div className="relative w-6 h-6">
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
              />
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`lg:hidden fixed inset-0 top-[4.5rem] bg-navy/98 backdrop-blur-lg transition-all duration-400 ease-out ${
            isOpen 
              ? "opacity-100 visible translate-y-0" 
              : "opacity-0 invisible -translate-y-4 pointer-events-none"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="container mx-auto px-6 py-10 flex flex-col h-full">
            <nav className="flex flex-col gap-0" aria-label="Mobile">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base tracking-[0.15em] uppercase font-medium py-5 border-b border-navy-foreground/10 transition-all duration-300 ease-out ${
                    location.pathname === link.path
                      ? "text-gold pl-2"
                      : "text-navy-foreground hover:text-gold hover:pl-3"
                  }`}
                  style={{ 
                    transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateX(0)" : "translateX(-12px)"
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div 
              className="mt-auto pb-8"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.4s ease-out 0.3s"
              }}
            >
              <Link to="/booking" onClick={() => setIsOpen(false)}>
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="w-full shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:scale-[1.01] transition-all duration-300"
                >
                  Book Your Stay
                </Button>
              </Link>
              
              <div className="mt-8 flex items-center justify-center gap-2.5 text-navy-foreground/60">
                <Phone size={14} strokeWidth={1.5} />
                <a 
                  href="tel:+15551234567" 
                  className="text-sm tracking-wide hover:text-gold transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};