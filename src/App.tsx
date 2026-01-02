import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Nearby from "./pages/Nearby";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Trigger enter animation
    setIsAnimating(true);
    setShouldRender(true);
    
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ease-out ${
        isAnimating 
          ? "animate-page-enter" 
          : ""
      }`}
      style={{ opacity: shouldRender ? 1 : 0 }}
    >
      {children}
    </div>
  );
};

const AppRoutes = () => (
  <PageTransition>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/nearby" element={<Nearby />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </PageTransition>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
