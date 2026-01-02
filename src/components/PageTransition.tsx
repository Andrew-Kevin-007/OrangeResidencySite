import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // Start exit animation
    setIsVisible(false);
    
    // After exit animation, swap content and start enter animation
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      // Small delay before enter animation
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }, 150);

    return () => clearTimeout(timeout);
  }, [location.pathname, children]);

  // Initial mount - show immediately
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-2"
      }`}
    >
      {displayChildren}
    </div>
  );
};
