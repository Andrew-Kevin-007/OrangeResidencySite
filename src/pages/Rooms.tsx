import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Wifi, Coffee, Tv, Bath, Wind, Users, Maximize, Car, ArrowRight, Check, BedDouble } from "lucide-react";
import roomDeluxe from "@/assets/MAN07866.JPG";
import roomExecutive from "@/assets/MAN07822.JPG";
import roomPresidential from "@/assets/room-presidential.jpg";

const rooms = [
  {
    name: "Twin Bed Comfort Room",
    tagline: "CITY COMFORT • 2 BEDS • UP TO 3 ADULTS",
    description: "A well-maintained and spacious room designed for a relaxed and practical stay. Ideal for families, friends, or business travelers looking for comfort, cleanliness, and convenience in a calm setting.Natural light, comfortable bedding, and essential amenities ensure a pleasant and restful experience throughout your stay.",
    price: "###",
    guests: "2 Adults",
    image: roomDeluxe,
    amenities: ["King Bed", "City View", "Air Conditioning", "Attached Bathroom", "Flat-Screen TV", "Complimentary WiFi"],
    highlights: ["Comfortable twin beds", "Clean attached bathroom", "Air-conditioned room"],
  },
  {
    name: "4 Bed Family Room",
    tagline: "COMFORT FOR GROUP STAYS",
    description: "A spacious and practical accommodation designed for families and groups traveling together. Featuring four comfortable beds and a well-ventilated layout, this room offers ample space to relax after a long day.Ideal for longer stays, group trips, or family visits, the room focuses on comfort, cleanliness, and functionality to ensure a pleasant and hassle-free experience.",
    price: "###",
    guests: "2 Adults + 1 Child",
    image: roomExecutive,
    amenities: ["King Bed", "City View", "Air Conditioning", "Attached Bathroom", "Flat-Screen TV", "Complimentary WiFi"],
    highlights: ["Comfortable four beds", "Clean attached bathroom", "Air-conditioned room"],
  },
  
];

const amenityIcons: Record<string, React.ReactNode> = {
  "King Bed": <BedDouble size={16} />,
  "City View": <Maximize size={16} />,
  "Air Conditioning": <Wind size={16} />,
  "Attached Bathroom": <Bath size={16} />,
  "Flat-Screen TV": <Tv size={16} />,
  "Rainfall Shower": <Bath size={16} />,
  "Mini Bar": <Coffee size={16} />,
  "55\" Smart TV": <Tv size={16} />,
  "Complimentary WiFi": <Wifi size={16} />,
  "Living Area": <Maximize size={16} />,
  "Panoramic View": <Maximize size={16} />,
  "Jacuzzi Tub": <Bath size={16} />,
  "65\" Smart TV": <Tv size={16} />,
  "Executive Lounge Access": <Users size={16} />,
  "Master Bedroom": <BedDouble size={16} />,
  "Private Dining": <Coffee size={16} />,
  "Grand Living Room": <Maximize size={16} />,
  "Spa Bathroom": <Bath size={16} />,
  "Private Terrace": <Wind size={16} />,
  "Butler Service": <Users size={16} />,
};

const Rooms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-navy">
        <Navbar variant="dark" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Accommodations
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-card font-medium mb-4 animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Rooms & Suites
          </h1>
          <p className="text-navy-foreground/70 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            Each room is a sanctuary of comfort, designed with meticulous attention to detail 
            for the discerning traveler.
          </p>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-20 lg:space-y-32">
            {rooms.map((room, index) => (
              <div 
                key={room.name}
                className="group"
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                      <img 
                        src={room.image} 
                        alt={room.name}
                        className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Decorative corners */}
                      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/0 group-hover:border-gold transition-all duration-500 delay-100" />
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/0 group-hover:border-gold transition-all duration-500 delay-100" />
                      
                      {/* Quick Book Button */}
                      <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <Link to="/booking">
                          <Button variant="hero" size="lg" className="w-full backdrop-blur-sm shadow-xl">
                            Book This Room
                            <ArrowRight size={16} />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-navy/90 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 text-center group-hover:bg-navy transition-all duration-500 group-hover:shadow-lg group-hover:shadow-gold/10">
                      <p className="text-gold-light text-[10px] sm:text-xs uppercase tracking-wider mb-1">From</p>
                      <p className="font-serif text-2xl sm:text-3xl text-card group-hover:text-gold transition-colors duration-500">${room.price}</p>
                      <p className="text-navy-foreground/60 text-[10px] sm:text-xs">per night</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""} space-y-6`}>
                    <div>
                      <p className="text-gold tracking-[0.2em] uppercase text-xs mb-2">
                        {room.tagline}
                      </p>
                      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                        {room.name}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {room.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-3">
                      {room.highlights.map((highlight) => (
                        <span 
                          key={highlight} 
                          className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-sm text-foreground hover:bg-gold/10 hover:text-gold transition-all duration-300 cursor-default"
                        >
                          <Check size={14} className="text-gold" />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Amenities */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Room Amenities</p>
                      <div className="grid grid-cols-2 gap-3">
                        {room.amenities.map((amenity) => (
                          <div key={amenity} className="flex items-center gap-3 text-sm text-muted-foreground group/item hover:text-foreground transition-colors duration-300 cursor-default">
                            <span className="text-gold group-hover/item:scale-110 transition-transform duration-300">{amenityIcons[amenity] || <Wifi size={16} />}</span>
                            {amenity}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
                      <Link to="/booking" className="w-full sm:w-auto">
                        <Button variant="premium" size="lg" className="w-full sm:w-auto">
                          Reserve Now
                        </Button>
                      </Link>
                      <Link to="/gallery" className="w-full sm:w-auto">
                        <Button variant="elegant" size="lg" className="w-full sm:w-auto">
                          View Gallery
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Rooms Include */}
      <section className="py-16 lg:py-20 bg-navy">
        <div className="container mx-auto px-6 lg:px-12">
          <h3 className="font-serif text-2xl text-card text-center mb-12">Every Stay Includes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Wifi size={28} />, label: "High-Speed WiFi", sublabel: "Complimentary" },
              { icon: <Coffee size={28} />, label: "Tea & Coffee", sublabel: "Daily refresh" },
              { icon: <Tv size={28} />, label: "LED TV", sublabel: "Streaming ready" },
              { icon: <Car size={28} />, label: "Parking", sublabel: "On-site available" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 sm:gap-3 group cursor-default">
                <div className="w-12 h-12 sm:w-16 sm:h-16 border border-gold/30 flex items-center justify-center relative overflow-hidden group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/10 transition-all duration-500">
                  <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="text-gold relative z-10 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                </div>
                <div className="text-center">
                  <span className="text-xs sm:text-sm text-card block group-hover:text-gold transition-colors duration-300">{item.label}</span>
                  <span className="text-[10px] sm:text-xs text-navy-foreground/60">{item.sublabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-xs mb-4">Best Rate Guarantee</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Book Direct for Exclusive Benefits
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Enjoy complimentary upgrades, early check-in, late check-out, and welcome amenities 
            when you book directly with us.
          </p>
          <Link to="/booking">
            <Button variant="premium" size="xl">
              Start Your Reservation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;