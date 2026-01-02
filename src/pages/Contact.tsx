import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import whatsappIcon from "@/assets/image.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center bg-navy">
        <Navbar variant="dark" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-card font-medium animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-8">We'd Love to Hear From You</h2>
              <p className="text-muted-foreground mb-12 leading-relaxed">
                Whether you have questions about our accommodations, need to make special arrangements, 
                or simply want to learn more about Orange Residency, our team is here to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group cursor-default">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                    <MapPin size={20} className="text-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-gold transition-colors duration-300">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      2nd Floor,<br />
                      Rajiv Gandhi Salai (OMR),Thiruporur,<br />
                      TamilNadu,India-603110
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-default">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                    <Phone size={20} className="text-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-gold transition-colors duration-300">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      Reservations: +91 7200185559<br />
                      General Inquiries: +91 8667594285
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-default">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                    <Mail size={20} className="text-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-gold transition-colors duration-300">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      orangeresidencyomr@gmail.com<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-default">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                    <Clock size={20} className="text-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-gold transition-colors duration-300">Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Front Desk: 24/7<br />
                      Concierge: 24/7<br />
                      Reservations Office: 8:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary p-6 sm:p-8 lg:p-12">
              <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-6 sm:mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label className="text-xs tracking-wider uppercase text-muted-foreground">Full Name</Label>
                    <Input 
                      className="h-12 bg-card"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs tracking-wider uppercase text-muted-foreground">Email</Label>
                    <Input 
                      type="email"
                      className="h-12 bg-card"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label className="text-xs tracking-wider uppercase text-muted-foreground">Phone (Optional)</Label>
                    <Input 
                      type="tel"
                      className="h-12 bg-card"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs tracking-wider uppercase text-muted-foreground">Subject</Label>
                    <Input 
                      className="h-12 bg-card"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs tracking-wider uppercase text-muted-foreground">Message</Label>
                  <textarea 
                    className="w-full h-40 px-4 py-3 border border-input bg-card rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold hover:border-muted-foreground/40 transition-all duration-300"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" variant="premium" size="lg" className="w-full hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative h-[420px] bg-muted overflow-hidden">
        <iframe
          title="Hotel Location"
          src="https://www.google.com/maps?q=Orange%20Residency%20OMR%2C%20Rajiv%20Gandhi%20Salai%2C%20Thiruporur%2C%20Tamil%20Nadu%20603110&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full border-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/15 to-transparent" />
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917200185559?text=Hello,%20I%20would%20like%20to%20inquire%20about%20Orange%20Residency"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative w-16 h-16 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-active:scale-95 overflow-hidden bg-white">
          <img 
            src={whatsappIcon} 
            alt="WhatsApp" 
            loading="eager"
            decoding="sync"
            className="w-full h-full object-contain p-1"
            style={{ imageRendering: 'auto', backfaceVisibility: 'hidden' }}
          />
        </div>
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-charcoal text-card px-3 py-1.5 rounded text-xs whitespace-nowrap shadow-lg">
            Chat on WhatsApp
          </div>
        </div>
      </a>

      <Footer />
    </div>
  );
};

export default Contact;
