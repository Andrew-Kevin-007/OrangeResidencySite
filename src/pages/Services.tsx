import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UtensilsCrossed, Sparkles, Waves, Dumbbell, Clock, Shirt, Utensils, Coffee, Wifi, Shield, ConciergeBell, ParkingCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import restaurant from "@/assets/MAN07836.JPG";
import spa from "@/assets/MAN07851.JPG";
import pool from "@/assets/MAN07804.JPG";
import fitness from "@/assets/fitness.jpg";

const services = [
  {
    icon: <Shield size={36} />,
    name: "Guest Room Comfort",
    tagline: "COMFORTABLE STAY",
    description: "Enjoy a calm and well-maintained guest room designed for rest and everyday convenience. Thoughtfully arranged interiors, comfortable bedding, and natural light create a welcoming space to unwind after a long day.Whether you’re visiting for work or leisure, our rooms offer a peaceful environment that feels simple, clean, and relaxing.",
    image: restaurant,
    hours: "24 Hours",
    features: ["Comfortable double bed with fresh linens", "Clean, well-ventilated interiors", "Essential in-room amenities"],
  },
  {
    icon: <Sparkles size={36} />,
    name: "Comfort in Every Touch",
    tagline: "THOUGHTFUL DETAILS",
    description: "At Orange Residency, comfort is reflected in the details that matter most. Freshly prepared linens, clean towels, and well-maintained rooms ensure a stay that feels reassuring, hygienic, and relaxed from the moment you arrive.Our housekeeping standards focus on cleanliness, consistency, and guest comfort—because a good stay begins with feeling at ease.",
    image: spa,
    hours: "24 Hours",
    features: ["Fresh, clean towels & linens", "Hygienic room preparation", "Comfort-focused essentials"],
  },
  {
    icon: <ConciergeBell size={36} />,
    name: "A Warm Welcome, Every Time",
    tagline: "GUEST SERVICES",
    description: "A thoughtfully arranged reception and lounge area designed to make arrivals seamless and comfortable, offering support and assistance whenever you need it.",
    image: pool,
    hours: "24 Hours",
    features: ["Dedicated reception desk", "Comfortable guest seating", "Assistance for check-in & inquiries"],
  },
];

const additionalServices = [
  { icon: <ConciergeBell size={28} />, name: "Front Desk Assistance", description: "Friendly support available during operational hours to assist with check-in, check-out, and guest inquiries." },
  { icon: <ParkingCircle size={28} />, name: "Parking Facility", description: "Convenient on-site parking available for guests, ensuring a hassle-free arrival and departure." },
  { icon: <UtensilsCrossed size={28} />, name: "In-Room Food Support", description: "Assistance with nearby dining options and food delivery services for your convenience." },
  { icon: <Shirt size={28} />, name: "Laundry Assistance", description: "Basic laundry support available on request to keep your stay comfortable and worry-free." },
  { icon: <Utensils size={28} />, name: "Breakfast Arrangement", description: "Simple and satisfying breakfast options arranged to help you start your day with ease." },
  { icon: <Coffee size={28} />, name: "Tea & Coffee Access", description: "Complimentary tea and coffee options available for guests during designated hours." },
  { icon: <Wifi size={28} />, name: "High-Speed Wi-Fi", description: "Reliable internet connectivity throughout the property for work and leisure needs." },
  { icon: <Shield size={28} />, name: "Safety & Security", description: "A safe and secure environment with controlled access and attentive staff presence." },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-navy">
        <Navbar variant="dark" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Thoughtfully Curated Comforts
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-card font-medium mb-6 animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Hotel Services
          </h1>
          <p className="text-navy-foreground/70 max-w-2xl mx-auto text-lg animate-fade-up opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            Everything you need for a smooth, comfortable stay—designed with care, simplicity, and attention to detail.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.name}
                className="group"
              >
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-[300px] sm:h-[380px] lg:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Decorative corners */}
                      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/0 group-hover:border-gold transition-all duration-500 delay-100" />
                      <div className="absolute bottom-16 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/0 group-hover:border-gold transition-all duration-500 delay-100" />
                      
                      {/* Hours badge */}
                      <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm px-4 py-2 flex items-center gap-2 group-hover:bg-card transition-colors duration-300">
                        <Clock size={14} className="text-gold" />
                        <span className="text-sm text-foreground">{service.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="text-gold mb-6 transform group-hover:scale-110 transition-transform duration-500 inline-block">
                      {service.icon}
                    </div>
                    <p className="text-gold tracking-[0.2em] uppercase text-xs mb-2">{service.tagline}</p>
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
                      {service.name}
                    </h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 group/feature cursor-default">
                          <div className="w-2 h-2 bg-gold rotate-45 group-hover/feature:scale-150 transition-transform duration-300" />
                          <span className="text-foreground group-hover/feature:text-gold transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Guest Services</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              At Your Service
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every aspect of your stay is supported by essential services designed to offer comfort, convenience, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {additionalServices.map((service) => (
              <div 
                key={service.name} 
                className="group text-center p-8 bg-card border border-border hover:border-gold/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-default relative overflow-hidden"
              >
                {/* Background fill animation */}
                <div className="absolute inset-0 bg-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                <div className="text-gold mb-6 flex justify-center relative z-10">
                  <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3 relative z-10 group-hover:text-gold transition-colors duration-300">{service.name}</h3>
                <p className="text-muted-foreground text-sm relative z-10">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-navy text-navy-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Personalized Experience</p>
          <h2 className="font-serif text-3xl md:text-4xl text-card mb-6">
            Have a Special Request?
          </h2>
          <p className="text-navy-foreground/70 max-w-2xl mx-auto mb-10 text-lg">
            Our concierge team is available 24/7 to assist with any arrangements, 
            from restaurant reservations to bespoke experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/30 active:translate-y-0 transition-all duration-300">
                Contact Concierge
              </Button>
            </Link>
            <Link to="/booking">
              <Button variant="heroOutline" size="xl" className="hover:-translate-y-1 active:translate-y-0 transition-all duration-300">
                Book Your Stay
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;