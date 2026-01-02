import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import heroImage from "@/assets/MAN07817.JPG";
import spa from "@/assets/MAN07851.JPG";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 overlay-dark" />
        
        <Navbar variant="transparent" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-card font-medium animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            About Orange Residency
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold tracking-[0.2em] uppercase text-xs mb-4">Since 2021</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                A Thoughtful Retreat in Thiruporur
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Orange Residency is a refined hospitality destination in Thiruporur, designed for guests who appreciate comfort, calm, and understated elegance. Our hotel blends modern convenience with warm, attentive service, creating an experience that feels welcoming from the very first moment.
Whether your visit is for business or leisure, Orange Residency offers a setting where relaxation feels natural and every stay feels personal.
                </p>
                <p>
                  At Orange Residency, we believe that true luxury is found in thoughtful details rather than excess. Every element of our hotel—from the layout of our rooms to the materials we choose—has been carefully considered to enhance comfort, functionality, and ease. This philosophy guides our approach to design and service, ensuring that each space feels calm, refined, and purposefully crafted for our guests.
                </p>
                <p>
                  Today, Orange Residency continues to welcome travelers with a commitment to quality, reliability, and genuine care. Our focus remains on creating an environment where guests feel relaxed, supported, and valued throughout their stay. By combining attentive hospitality with modern comforts, we strive to deliver an experience that feels both reassuring and memorable.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={spa} 
                alt="Orange Residency Interior" 
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-navy p-8 hidden lg:block">
                <p className="text-navy-foreground text-sm tracking-wider uppercase">A Legacy of Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.2em] uppercase text-xs mb-4">Our Philosophy</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              The Pillars of Orange Residency
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-px h-12 bg-gold mx-auto mb-6" />
              <h3 className="font-serif text-xl text-foreground mb-4">Impeccable Service</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our team is committed to delivering attentive and respectful service that feels seamless and genuine. From arrival to departure, every interaction is guided by care, professionalism, and a quiet understanding of our guests’ needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-px h-12 bg-gold mx-auto mb-6" />
              <h3 className="font-serif text-xl text-foreground mb-4">Refined Comfort</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Each space within Orange Residency is thoughtfully designed to create a sense of calm and ease. Balanced interiors, considered details, and functional elegance come together to offer an environment that feels both welcoming and refined.
              </p>
            </div>

            <div className="text-center">
              <div className="w-px h-12 bg-gold mx-auto mb-6" />
              <h3 className="font-serif text-xl text-foreground mb-4">Responsible Hospitality</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We believe true hospitality is built on care—for our guests, our community, and our surroundings. Through mindful practices and thoughtful operations, we strive to deliver comfort that is sustainable and responsible for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-navy text-navy-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-xs mb-4">Our Team</p>
          <h2 className="font-serif text-3xl md:text-4xl text-card mb-8">
            Dedicated to Your Comfort
          </h2>
          <p className="text-navy-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Behind every pleasant stay at Orange Residency is a team committed to genuine care and attentive service. From front-desk assistance to housekeeping and daily operations, our staff works with quiet dedication to ensure your experience feels smooth, comfortable, and welcoming.

We believe thoughtful hospitality is built on consistency, respect, and attention to detail. Every member of our team shares a common goal—to make each guest feel at ease, supported, and well cared for throughout their stay.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
