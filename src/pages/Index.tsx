import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles, Shield, Quote, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero.png";
import roomDeluxe from "@/assets/deulex.png";
import roomExecutive from "@/assets/MAN07824.JPG";
import restaurant from "@/assets/MAN07836.JPG";
import spa from "@/assets/MAN07851.JPG";

// Intersection Observer hook for scroll animations
const useIntersectionObserver = (options = {}) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold: 0.12, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const Index = () => {
  const introSection = useIntersectionObserver();
  const roomsSection = useIntersectionObserver();
  const featuresSection = useIntersectionObserver();
  const testimonialSection = useIntersectionObserver();
  const servicesSection = useIntersectionObserver();
  const ctaSection = useIntersectionObserver();

  const scrollToContent = () => window.scrollTo({ top: window.innerHeight, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/80" />

        <Navbar variant="transparent" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div
              className="inline-flex items-center gap-3 mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "180ms", animationFillMode: "forwards" }}
            >
              <div className="w-12 h-px bg-gold/80" />
              <p className="text-gold tracking-[0.35em] uppercase text-[11px] font-medium">
                Luxury Redefined
              </p>
              <div className="w-12 h-px bg-gold/80" />
            </div>

            <h1
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-card font-medium mb-6 leading-[1.05] opacity-0 animate-fade-up"
              style={{ animationDelay: "360ms", animationFillMode: "forwards" }}
            >
              Where Elegance Meets
              <br />
              <span className="italic text-gold-light">Timeless Comfort</span>
            </h1>

            <p
              className="text-card/85 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "540ms", animationFillMode: "forwards" }}
            >
              Experience thoughtful hospitality, well-designed spaces, and attentive service—crafted
              to make every stay feel effortless and welcoming.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center opacity-0 animate-fade-up mt-4 px-4 sm:px-0"
              style={{ animationDelay: "720ms", animationFillMode: "forwards" }}
            >
              <div className="flex flex-col items-center">
                <Link to="/booking" className="w-full sm:w-auto">
                  <Button
                    variant="hero"
                    size="lg"
                    className="h-11 px-7 text-sm shadow-lg shadow-gold/30 hover:shadow-gold/50 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto sm:min-w-[170px]"
                  >
                    Book Your Stay
                  </Button>
                </Link>
                <p className="text-xs text-card/70 mt-2">Best rate guarantee • Free cancellation</p>
              </div>

              <div className="flex flex-col items-center">
                <Link to="/rooms" className="w-full sm:w-auto">
                  <Button
                    variant="heroOutline"
                    size="lg"
                    className="h-11 px-7 text-sm backdrop-blur-sm hover:bg-card/10 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto sm:min-w-[170px] border-2 border-card"
                  >
                    Explore Rooms
                  </Button>
                </Link>
                <p className="text-xs text-card/70 mt-2">View room types & amenities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 group focus:outline-none"
          aria-label="Scroll to content"
        >
          <div className="w-10 h-16 rounded-full border-2 border-card/30 flex flex-col items-center justify-start p-3 group-hover:border-gold/60 transition-all duration-500">
            <ChevronDown
              size={20}
              className="text-card/70 animate-bounce group-hover:text-gold transition-colors duration-300"
            />
          </div>
        </button>

        {/* Hero Bottom Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/95 to-transparent pt-20 pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              {[
                { value: "Welcoming Guests", label: "Since 2021" },
                { value: "Designed for Comfort", label: "Well-Appointed Rooms" },
                { value: "Personal & Attentive", label: "Warm Hospitality" },
                { value: "24/7 Assistance", label: "Always Available" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="opacity-0 animate-fade-up"
                  style={{
                    animationDelay: `${900 + index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <p className="font-serif text-2xl md:text-3xl text-gold mb-2 transition-transform duration-300 hover:scale-105">
                    {stat.value}
                  </p>
                  <p className="text-card/65 text-[10px] uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section
        ref={introSection.ref as React.RefObject<HTMLElement>}
        className="py-24 lg:py-36 bg-background relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-gold/50 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${
              introSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-6">Welcome to ORANGE RESIDENCY</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-10 leading-relaxed">
              A Place Designed for <span className="italic">Comfort and Ease</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Located in Thiruporur, Orange Residency offers a welcoming stay defined by thoughtful spaces, attentive service, and a calm atmosphere. Every detail is designed to ensure comfort, convenience, and a pleasant experience for business and leisure travelers alike.
            </p>
            <Link to="/about">
              <Button
                variant="elegant"
                size="lg"
                className="group hover:scale-[1.02] transition-all duration-300"
              >
                Discover Our Story
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Rooms Preview */}
      <section
        ref={roomsSection.ref as React.RefObject<HTMLElement>}
        className="py-24 lg:py-36 bg-secondary"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div
            className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 transition-all duration-700 ease-out ${
              roomsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Accommodations</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
                Exceptional Rooms & Suites
              </h2>
            </div>
            <Link to="/rooms" className="mt-6 lg:mt-0">
              <Button
                variant="elegant"
                size="lg"
                className="group hover:scale-[1.02] transition-all duration-300"
              >
                View All Rooms
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: roomDeluxe,
                name: "Deluxe Room (A/C)",
                desc: "A comfortable single-occupancy room designed for solo travelers, offering essential amenities, a calm interior, and a relaxed stay experience.",
                price: "***",
              },
              {
                image: roomExecutive,
                name: "Deluxe Double Room (A/C)",
                desc: "A spacious room with a double bed, ideal for couples or shared stays, featuring a bright layout, modern comforts, and a welcoming atmosphere.",
                price: "***",
              },
            ].map((room, index) => (
              <div
                key={room.name}
                className={`group cursor-pointer transition-all duration-700 ease-out ${
                  roomsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: roomsSection.isVisible ? `${200 + index * 150}ms` : "0ms",
                }}
              >
                <div className="relative overflow-hidden mb-6 rounded-sm shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />

                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/0 group-hover:border-gold transition-all duration-500 delay-100" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/0 group-hover:border-gold transition-all duration-500 delay-100" />

                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                    <Link to="/booking">
                      <Button variant="hero" className="w-full shadow-xl">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-gold transition-colors duration-300 relative">
                      {room.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
                    </h3>
                    <p className="text-muted-foreground text-sm group-hover:text-muted-foreground/80 transition-colors duration-300">
                      {room.desc}
                    </p>
                  </div>
                  <p className="text-gold font-serif text-xl group-hover:scale-105 transition-transform duration-300 origin-right">
                    From {room.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        ref={featuresSection.ref as React.RefObject<HTMLElement>}
        className="py-24 lg:py-36 bg-navy text-navy-foreground relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--gold)/0.05),transparent_50%)]" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              featuresSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Why Choose Us</p>
            <h2 className="font-serif text-3xl md:text-4xl text-card">What Sets Orange Residency Apart</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Star size={32} strokeWidth={1.5} />,
                title: "Trusted Comfort",
                desc: "Well-maintained rooms, courteous staff, and a consistently pleasant stay that guests can rely on.",
              },
              {
                icon: <Sparkles size={32} strokeWidth={1.5} />,
                title: "Thoughtful Hospitality",
                desc: "Personal attention, flexible support, and a warm approach that makes every guest feel welcome.",
              },
              {
                icon: <Shield size={32} strokeWidth={1.5} />,
                title: "Reliable Quality",
                desc: "Clean spaces, essential amenities, and careful upkeep to ensure peace of mind throughout your stay.",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`text-center group transition-all duration-700 ease-out ${
                  featuresSection.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: featuresSection.isVisible ? `${200 + index * 150}ms` : "0ms",
                }}
              >
                <div className="w-20 h-20 mx-auto mb-8 border border-gold/30 flex items-center justify-center relative overflow-hidden group-hover:border-gold transition-all duration-500 ease-out group-hover:shadow-lg group-hover:shadow-gold/10">
                  <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="text-gold relative z-10 transition-transform duration-500 group-hover:scale-110">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-card mb-4 transition-colors duration-300 group-hover:text-gold">
                  {feature.title}
                </h3>
                <p className="text-navy-foreground/70 text-sm leading-relaxed group-hover:text-navy-foreground/90 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section
        ref={testimonialSection.ref as React.RefObject<HTMLElement>}
        className="py-24 lg:py-36 bg-cream"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${
              testimonialSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Quote
              size={48}
              strokeWidth={1}
              className="text-gold/40 mx-auto mb-8 animate-[float_6s_ease-in-out_infinite]"
            />
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-8 leading-relaxed italic">
              “A very comfortable stay with clean rooms and friendly staff. Everything was well maintained, and the service made us feel at home. Would definitely recommend for families and business travelers.”
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-gold/60" />
              <div>
                <p className="font-medium text-foreground">Ravi Kumar & Family</p>
                <p className="text-muted-foreground text-sm mt-1">Guest at Orange Residency</p>
              </div>
              <div className="w-12 h-px bg-gold/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section
        ref={servicesSection.ref as React.RefObject<HTMLElement>}
        className="py-24 lg:py-36 bg-background"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-700 ease-out ${
                servicesSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">
                HOTEL AMENITIES & SERVICES
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
                Comfort Designed for <span className="italic">Everyday Stays</span>
              </h2>
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                Orange Residency offers thoughtfully maintained amenities focused on comfort, cleanliness, and convenience. Our services are designed to support a relaxed and pleasant stay for both business and leisure travelers.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Comfortable Air-Conditioned Rooms",
                  "Clean & Well-Maintained Bathrooms",
                  "Television & Essential In-Room Amenities",
                  "24/7 Front Desk Assistance",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 group"
                    style={{
                      transitionDelay: servicesSection.isVisible ? `${300 + index * 100}ms` : "0ms",
                    }}
                  >
                    <div className="w-3 h-3 bg-gold rotate-45 group-hover:scale-125 transition-all duration-300" />
                    <span className="text-foreground font-medium group-hover:text-gold transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link to="/services">
                <Button
                  variant="elegant"
                  size="lg"
                  className="group hover:scale-[1.02] transition-all duration-300"
                >
                  Explore All Services
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </Button>
              </Link>
            </div>

            <div
              className={`grid grid-cols-2 gap-4 transition-all duration-700 ease-out ${
                servicesSection.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: servicesSection.isVisible ? "200ms" : "0ms" }}
            >
              <div className="space-y-4">
                <div className="overflow-hidden rounded-sm group/img shadow-md hover:shadow-xl transition-shadow duration-500">
                  <img
                    src={restaurant}
                    alt="Fine Dining"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="bg-secondary p-4 sm:p-6 transition-all duration-300 hover:bg-secondary/80 group/card cursor-pointer">
                  <p className="font-serif text-base sm:text-lg text-foreground group-hover/card:text-gold transition-colors duration-300">
                    Comfortable Guest Room
                  </p>
                  <p className="text-muted-foreground text-sm">Well-maintained accommodation designed for rest, convenience, and a pleasant stay.</p>
                </div>
              </div>
              <div className="space-y-4 mt-8 sm:mt-12">
                <div className="overflow-hidden rounded-sm group/img shadow-md hover:shadow-xl transition-shadow duration-500">
                  <img
                    src={spa}
                    alt="Spa & Wellness"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="bg-secondary p-4 sm:p-6 transition-all duration-300 hover:bg-secondary/80 group/card cursor-pointer">
                  <p className="font-serif text-base sm:text-lg text-foreground group-hover/card:text-gold transition-colors duration-300">
                    Thoughtful Comfort
                  </p>
                  <p className="text-muted-foreground text-sm">Clean linens and attention to detail for a refreshing, restful stay.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaSection.ref as React.RefObject<HTMLElement>}
        className="py-24 lg:py-36 bg-charcoal text-charcoal-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--gold)/0.08),transparent_50%)]" />

        <div
          className={`container mx-auto px-6 lg:px-12 text-center relative transition-all duration-700 ease-out ${
            ctaSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-6">BEGIN YOUR STAY</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-card mb-8">
            Reserve Your Stay at Orange Residency
          </h2>
          <p className="text-charcoal-foreground/70 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Comfortable rooms, attentive service, and a welcoming atmosphere—everything you need for a pleasant and relaxing stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button
                variant="hero"
                size="xl"
                className="shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 min-w-[200px]"
              >
                Book Your Stay
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="heroOutline"
                size="xl"
                className="hover:bg-card/10 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 min-w-[200px]"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
