import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-navy-foreground/10">
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-2xl text-card mb-2">Stay Connected</h3>
              <p className="text-navy-foreground/60 text-sm">Receive exclusive offers and updates</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2 group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 md:w-72 px-4 py-3 bg-navy-foreground/5 border border-navy-foreground/20 text-card placeholder:text-navy-foreground/40 text-sm focus:outline-none focus:border-gold focus:bg-navy-foreground/10 transition-all duration-300 rounded-sm"
              />
              <button className="px-6 py-3 bg-gold text-card text-xs uppercase tracking-widest font-medium hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 rounded-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-3xl font-medium text-card mb-6 block hover:text-gold transition-colors">
              Orange Residency
            </Link>
            <p className="text-navy-foreground/60 text-sm leading-relaxed mb-8">
              A comfortable and welcoming stay in Thiruporur, offering thoughtfully designed rooms, attentive service, and essential amenities for business and leisure travelers.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={18} />, label: "Instagram" },
                { icon: <Facebook size={18} />, label: "Facebook" },
                { icon: <Twitter size={18} />, label: "Twitter" },
              ].map((social) => (
                <a 
                  key={social.label}
                  href="#" 
                  aria-label={social.label}
                  className="w-10 h-10 border border-navy-foreground/20 flex items-center justify-center text-navy-foreground/60 hover:border-gold hover:text-gold hover:bg-gold/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 rounded-sm group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-card mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Rooms & Suites", path: "/rooms" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Nearby Attractions", path: "/nearby" },
                { name: "Book Now", path: "/booking" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-navy-foreground/60 hover:text-gold hover:pl-2 transition-all duration-300 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-card mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-navy-foreground/60 group-hover:text-navy-foreground transition-colors">
                  2nd Floor<br />
                  Rajiv Gandhi Salai (OMR),Thiruporur,<br />
                  TamilNadu,India-603110
                </span>
              </li>
              <li>
                <a href="tel:+91 7200185559" className="flex items-center gap-3 group">
                  <Phone size={18} className="text-gold flex-shrink-0" />
                  <span className="text-sm text-navy-foreground/60 group-hover:text-gold transition-colors">+91 7200185559</span>
                </a>
              </li>
              <li>
                <a href="mailto:orangeresidencyomr@gmail.com" className="flex items-center gap-3 group">
                  <Mail size={18} className="text-gold flex-shrink-0" />
                  <span className="text-sm text-navy-foreground/60 group-hover:text-gold transition-colors">orangeresidencyomr@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg text-card mb-6">Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-navy-foreground/60">Check-in: 3:00 PM</p>
                  <p className="text-sm text-navy-foreground/60">Check-out: 11:00 AM</p>
                </div>
              </li>
              <li className="pt-2">
                <p className="text-card font-medium mb-2">Front Desk & Concierge</p>
                <p className="text-sm text-navy-foreground/60">Available 24/7</p>
              </li>
              <li className="pt-2">
                <p className="text-card font-medium mb-2">Reservations</p>
                <p className="text-sm text-navy-foreground/60">8:00 AM - 10:00 PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-navy-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-navy-foreground/40">
              © {new Date().getFullYear()} Orange Residency. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-xs text-navy-foreground/40 hover:text-gold transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-navy-foreground/40 hover:text-gold transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-xs text-navy-foreground/40 hover:text-gold transition-colors duration-300">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};