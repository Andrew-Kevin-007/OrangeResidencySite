import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Check, Shield, Clock, Phone, CreditCard, Star, Award, Users, Bed } from "lucide-react";
import { format, differenceInDays } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const roomOptions = [
  { value: "deluxe", label: "Deluxe Room", price: 350 },
  { value: "executive", label: "Executive Suite", price: 550 },
  { value: "presidential", label: "Presidential Suite", price: 1200 },
];

const Booking = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    roomType: "",
    adults: "",
    children: "",
    specialRequests: "",
  });

  const selectedRoom = roomOptions.find(r => r.value === formData.roomType);
  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const subtotal = selectedRoom ? selectedRoom.price * nights : 0;
  const taxes = subtotal * 0.12;
  const total = subtotal + taxes;

  const canProceedToStep2 = checkIn && checkOut && formData.roomType && formData.adults;
  const canSubmit = formData.firstName && formData.lastName && formData.email && formData.phone;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Confirmed",
      description: "Thank you! Our reservations team will contact you within 2 hours to finalize your booking.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center bg-navy">
        <Navbar variant="dark" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4 animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            Reserve Your Stay
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-card font-medium animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Book Your Room
          </h1>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="bg-secondary border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all duration-300 ${
                step >= 1 ? "bg-gold text-card" : "bg-muted text-muted-foreground"
              }`}>
                {step > 1 ? <Check size={16} /> : "1"}
              </div>
              <span className={`hidden sm:block text-xs sm:text-sm font-medium ${step >= 1 ? "text-foreground" : "text-muted-foreground"}`}>
                Select Dates
              </span>
            </div>
            
            <div className={`w-8 sm:w-12 md:w-24 h-px transition-all duration-300 ${step >= 2 ? "bg-gold" : "bg-border"}`} />
            
            <div className="flex items-center gap-2 sm:gap-3">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all duration-300 ${
                step >= 2 ? "bg-gold text-card" : "bg-muted text-muted-foreground"
              }`}>
                {step > 2 ? <Check size={16} /> : "2"}
              </div>
              <span className={`hidden sm:block text-xs sm:text-sm font-medium ${step >= 2 ? "text-foreground" : "text-muted-foreground"}`}>
                Guest Details
              </span>
            </div>
            
            <div className={`w-8 sm:w-12 md:w-24 h-px transition-all duration-300 ${step >= 3 ? "bg-gold" : "bg-border"}`} />
            
            <div className="flex items-center gap-2 sm:gap-3">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all duration-300 ${
                step >= 3 ? "bg-gold text-card" : "bg-muted text-muted-foreground"
              }`}>
                3
              </div>
              <span className={`hidden sm:block text-xs sm:text-sm font-medium ${step >= 3 ? "text-foreground" : "text-muted-foreground"}`}>
                Confirm
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Dates & Room */}
                <div className={`space-y-6 transition-all duration-500 ${step === 1 ? "opacity-100" : "opacity-50"}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
                      <CalendarIcon size={16} className="text-gold" />
                    </div>
                    <h2 className="font-serif text-2xl text-foreground">Select Your Dates</h2>
                  </div>

                  {/* Dates */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-xs tracking-wider uppercase text-muted-foreground">Check-in Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal h-14 border-2 hover:border-gold/50 transition-colors">
                            <CalendarIcon className="mr-3 h-5 w-5 text-gold" />
                            {checkIn ? format(checkIn, "EEE, MMM d, yyyy") : <span className="text-muted-foreground">Select arrival date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs tracking-wider uppercase text-muted-foreground">Check-out Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal h-14 border-2 hover:border-gold/50 transition-colors">
                            <CalendarIcon className="mr-3 h-5 w-5 text-gold" />
                            {checkOut ? format(checkOut, "EEE, MMM d, yyyy") : <span className="text-muted-foreground">Select departure date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            initialFocus
                            disabled={(date) => date < (checkIn || new Date())}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Room & Guests */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label className="text-xs tracking-wider uppercase text-muted-foreground">Room Type</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, roomType: value })}>
                        <SelectTrigger className="h-14 border-2 hover:border-gold/50 transition-colors">
                          <SelectValue placeholder="Select your room" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {roomOptions.map((room) => (
                            <SelectItem key={room.value} value={room.value} className="cursor-pointer">
                              <div className="flex justify-between items-center gap-4">
                                <span>{room.label}</span>
                                <span className="text-gold text-sm">${room.price}/night</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs tracking-wider uppercase text-muted-foreground">Adults</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, adults: value })}>
                        <SelectTrigger className="h-14 border-2 hover:border-gold/50 transition-colors">
                          <SelectValue placeholder="Guests" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="1">1 Adult</SelectItem>
                          <SelectItem value="2">2 Adults</SelectItem>
                          <SelectItem value="3">3 Adults</SelectItem>
                          <SelectItem value="4">4 Adults</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs tracking-wider uppercase text-muted-foreground">Children</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, children: value })}>
                        <SelectTrigger className="h-14 border-2 hover:border-gold/50 transition-colors">
                          <SelectValue placeholder="Optional" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="0">No Children</SelectItem>
                          <SelectItem value="1">1 Child</SelectItem>
                          <SelectItem value="2">2 Children</SelectItem>
                          <SelectItem value="3">3 Children</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {canProceedToStep2 && (
                    <Button 
                      type="button" 
                      variant="premium" 
                      size="lg"
                      onClick={() => setStep(2)}
                      className="mt-4"
                    >
                      Continue to Guest Details
                    </Button>
                  )}
                </div>

                {/* Step 2: Personal Info */}
                {step >= 2 && (
                  <div className={`space-y-6 pt-8 border-t border-border transition-all duration-500 ${step === 2 ? "opacity-100" : "opacity-50"}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
                        <Users size={16} className="text-gold" />
                      </div>
                      <h2 className="font-serif text-2xl text-foreground">Guest Information</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-xs tracking-wider uppercase text-muted-foreground">First Name</Label>
                        <Input 
                          className="h-14 border-2 hover:border-gold/50 focus:border-gold transition-colors"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-xs tracking-wider uppercase text-muted-foreground">Last Name</Label>
                        <Input 
                          className="h-14 border-2 hover:border-gold/50 focus:border-gold transition-colors"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-xs tracking-wider uppercase text-muted-foreground">Email Address</Label>
                        <Input 
                          type="email"
                          className="h-14 border-2 hover:border-gold/50 focus:border-gold transition-colors"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-xs tracking-wider uppercase text-muted-foreground">Phone Number</Label>
                        <Input 
                          type="tel"
                          className="h-14 border-2 hover:border-gold/50 focus:border-gold transition-colors"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div className="space-y-2">
                      <Label className="text-xs tracking-wider uppercase text-muted-foreground">Special Requests (Optional)</Label>
                      <textarea 
                        className="w-full h-28 px-4 py-4 border-2 border-input bg-background rounded-md text-sm resize-none focus:outline-none focus:border-gold hover:border-gold/50 transition-colors"
                        placeholder="Early check-in, late check-out, dietary requirements, special occasions..."
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      />
                    </div>

                    <div className="flex gap-4 mt-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="lg"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      {canSubmit && (
                        <Button 
                          type="button" 
                          variant="premium" 
                          size="lg"
                          onClick={() => setStep(3)}
                        >
                          Review Booking
                        </Button>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <div className="space-y-6 pt-8 border-t border-border">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
                        <Check size={16} className="text-gold" />
                      </div>
                      <h2 className="font-serif text-2xl text-foreground">Confirm Your Reservation</h2>
                    </div>

                    <div className="bg-secondary p-6 rounded-lg space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">Guest</span>
                        <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">Email</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">Phone</span>
                        <span className="font-medium">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">Check-in</span>
                        <span className="font-medium">{checkIn && format(checkIn, "EEE, MMM d, yyyy")}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">Check-out</span>
                        <span className="font-medium">{checkOut && format(checkOut, "EEE, MMM d, yyyy")}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">Room</span>
                        <span className="font-medium">{selectedRoom?.label}</span>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="lg"
                        onClick={() => setStep(2)}
                      >
                        Back
                      </Button>
                      <Button type="submit" variant="hero" size="xl" className="flex-1">
                        <CreditCard size={18} className="mr-2" />
                        Confirm Reservation
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Sidebar - Booking Summary */}
            <div className="space-y-6">
              {/* Price Summary */}
              <div className="bg-card border border-border p-6 sticky top-24">
                <h3 className="font-serif text-xl text-foreground mb-6 pb-4 border-b border-border">Booking Summary</h3>
                
                {selectedRoom && nights > 0 ? (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 pb-4 border-b border-border">
                      <Bed size={20} className="text-gold mt-1" />
                      <div>
                        <p className="font-medium text-foreground">{selectedRoom.label}</p>
                        <p className="text-sm text-muted-foreground">{nights} night{nights > 1 ? "s" : ""}</p>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">${selectedRoom.price} × {nights} night{nights > 1 ? "s" : ""}</span>
                        <span className="text-foreground">${subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Taxes & Fees (12%)</span>
                        <span className="text-foreground">${taxes.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between items-center">
                        <span className="font-serif text-lg text-foreground">Total</span>
                        <span className="font-serif text-2xl text-gold">${total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">Select dates and room to see pricing</p>
                )}
              </div>

              {/* Trust Signals */}
              <div className="bg-secondary p-6">
                <h3 className="font-serif text-lg text-foreground mb-4">Why Book Direct?</h3>
                <ul className="space-y-4">
                  {[
                    { icon: <Award size={16} />, text: "Best Rate Guarantee" },
                    { icon: <Star size={16} />, text: "Complimentary Room Upgrade" },
                    { icon: <Clock size={16} />, text: "Early Check-in & Late Check-out" },
                    { icon: <Check size={16} />, text: "Welcome Amenity" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-gold">{item.icon}</span>
                      <span className="text-sm text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-navy p-6 text-navy-foreground">
                <h3 className="font-serif text-lg text-card mb-4">Need Assistance?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-gold" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-gold" />
                    <span className="text-sm">Available 24/7</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield size={16} className="text-gold" />
                    <span className="text-sm">Secure Booking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;