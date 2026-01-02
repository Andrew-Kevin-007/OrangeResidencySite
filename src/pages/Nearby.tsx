import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Navigation } from "lucide-react";
import thiruporurTemple from "@/assets/thiruporurtemple.jpg";
import mahabalipuram from "@/assets/mahabalipuram.jpg";
import muttukaduLake from "@/assets/1.png";
import dakshinaChitraImg from "@/assets/2.jpg";
import ecrBeach from "@/assets/ecrbeach.jpg";
import crocodileBankImg from "@/assets/crocodilebank.jpg";

const nearbyPlaces = [
  {
    name: "Murugan Temple, Thiruporur",
    description: "A revered temple dedicated to Lord Murugan, known for its spiritual significance, traditional Dravidian architecture, and vibrant festival celebrations that draw devotees year-round.",
    distance: "1 km",
    time: "2-5 min drive",
    image: thiruporurTemple,
    type: "Heritage & Culture",
  },
  {
    name: "Mahabalipuram",
    description: "A UNESCO World Heritage coastal town celebrated for its ancient rock-cut temples, shore monuments, and exquisite stone carvings that reflect Tamil Nadu’s rich heritage.",
    distance: "16 km",
    time: "15-25 min drive",
    image: mahabalipuram,
    type: "Heritage & Culture",
  },
  {
    name: "Muttukadu Lake",
    description: "A peaceful backwater destination known for boating, calm waters, and lush surroundings—ideal for a quiet escape into nature and relaxed waterfront views.",
    distance: "12 km",
    time: "15-25 min drive",
    image: muttukaduLake,
    type: "Nature & Relaxation",
  },
  {
    name: "ECR Beach",
    description: "A serene stretch along the East Coast Road, perfect for beach walks, sunrise and sunset views, and unwinding by the sea away from city noise.",
    distance: "15 km",
    time: "15-25 min drive",
    image: ecrBeach,
    type: "Nature & Relaxation",
  },
  {
    name: "DakshinaChitra",
    description: "An open-air heritage museum showcasing the traditional architecture, art, and lifestyles of South India through authentic homes, crafts, and cultural exhibits.",
    distance: "14 km",
    time: "18-25 min drive",
    image: dakshinaChitraImg,
    type: "Heritage & Culture",
  },
  {
    name: "Crocodile Bank",
    description: "A renowned reptile conservation center home to crocodiles, gharials, turtles, and snakes, offering an educational and engaging wildlife experience.",
    distance: "15 km",
    time: "15-25 min drive",
    image: crocodileBankImg,
    type: "Nature & Relaxation",
  },
];

const Nearby = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-navy">
        <Navbar variant="dark" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Explore the Area
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-card font-medium mb-4 animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Nearby Places
          </h1>
          <p className="text-navy-foreground/70 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            Discover the best attractions, dining, and experiences within reach of Orange Residency.
          </p>
        </div>
      </section>

      {/* Places Grid */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {nearbyPlaces.map((place) => (
              <div key={place.name} className="group">
                <div className="relative overflow-hidden mb-4 sm:mb-6">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-56 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-card px-3 py-1 text-xs tracking-wider uppercase">
                    {place.type}
                  </div>
                </div>
                
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-2 sm:mb-3">{place.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {place.description}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gold" />
                    <span>{place.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gold" />
                    <span>{place.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="flex justify-center mb-6">
            <Navigation size={32} className="text-gold" />
          </div>
          <h3 className="font-serif text-2xl text-foreground mb-4">
            Need Personalized Recommendations?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Our concierge team is here to help you discover hidden gems and arrange 
            bespoke experiences tailored to your interests.
          </p>
          <Link to="/contact">
            <Button variant="elegant" size="lg">
              Contact Concierge
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nearby;
