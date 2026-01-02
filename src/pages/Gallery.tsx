import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { X } from "lucide-react";
import img1 from "@/assets/MAN07802.JPG";
import img2 from "@/assets/MAN07817.JPG";
import img3 from "@/assets/MAN07831.JPG";
import img4 from "@/assets/MAN07844.JPG";
import img5 from "@/assets/MAN07857.JPG";
import img6 from "@/assets/MAN07876.JPG";
import img7 from "@/assets/MAN07891.JPG";
import img8 from "@/assets/MAN07915.JPG";

const galleryImages = [
  { src: img1, category: "lobby", alt: "Hotel ", caption: "Elegant entrance with warm hospitality" },
  { src: img2, category: "wellness", alt: "Hallway", caption: "Tastefully designed for comfort and relaxation" },
  { src: img3, category: "rooms", alt: "Deluxe Double Room View", caption: "Spacious living with modern amenities" },
  { src: img4, category: "rooms", alt: "Modern Bathroom Facilities", caption: "Clean, well-maintained bathroom with essential fittings designed for comfort and daily convenience." },
  { src: img5, category: "rooms", alt: "Spacious Twin Room", caption: "Designed for shared stays, offering comfortable bedding, natural light, and a calm, welcoming environment." },
  { src: img6, category: "rooms", alt: "Comfortable Air-Conditioned Room", caption: "A calm and comfortable space equipped with modern essentials for a pleasant and restful stay." },
  { src: img7, category: "wellness", alt: "Comfortable Lounge Area", caption: "A simple and welcoming space where guests can sit back, relax, or spend a quiet moment." },
  { src: img8, category: "lobby", alt: "Orange Residency – Exterior View", caption: "A clear and accessible entrance designed to welcome guests with comfort and convenience." },
];

const categories = ["all", "rooms", "wellness", "lobby"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-navy">
        <Navbar variant="dark" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Visual Journey
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-card font-medium mb-4 animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Gallery
          </h1>
          <p className="text-navy-foreground/70 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            Explore the spaces, rooms, and surroundings of Orange Residency through a curated collection of images that reflect our comfort, design, and hospitality.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-xs tracking-widest uppercase transition-all duration-300 relative overflow-hidden ${
                  activeCategory === category
                    ? "bg-gold text-card shadow-lg shadow-gold/20"
                    : "bg-transparent text-muted-foreground hover:text-foreground border border-border hover:border-gold/50 hover:-translate-y-0.5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden cursor-pointer group rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className={`relative w-full overflow-hidden ${index === 0 ? "h-64 sm:h-full sm:min-h-[500px]" : "h-64 sm:h-80"}`}>
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ imageRendering: "auto", backfaceVisibility: "hidden" }}
                  />
                </div>
                {/* Premium overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/0 group-hover:border-gold transition-all duration-500 delay-100" />
                <div className="absolute bottom-20 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/0 group-hover:border-gold transition-all duration-500 delay-100" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-card font-serif text-xl mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {image.alt}
                  </h3>
                  <p className="text-card/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-navy/98 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-card hover:text-gold hover:rotate-90 transition-all duration-300 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery image" 
            loading="eager"
            decoding="async"
            className="max-w-full max-h-[90vh] object-contain shadow-2xl animate-scale-in rounded-sm"
            style={{ imageRendering: "auto", backfaceVisibility: "hidden" }}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
