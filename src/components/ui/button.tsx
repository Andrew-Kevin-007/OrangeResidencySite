import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md rounded-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-md rounded-md",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent-foreground/20 rounded-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-sm rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium hotel variants with enhanced micro-interactions
        hero: "bg-gold text-card hover:bg-gold-dark border-0 tracking-widest uppercase text-xs font-semibold rounded-sm shadow-md hover:shadow-xl hover:shadow-gold/25 hover:-translate-y-0.5 active:translate-y-0",
        heroOutline: "bg-transparent border-2 border-card text-card hover:bg-card/10 hover:border-gold hover:text-gold tracking-widest uppercase text-xs font-semibold rounded-sm hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm",
        premium: "bg-navy text-navy-foreground hover:bg-charcoal tracking-widest uppercase text-xs font-semibold rounded-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
        premiumGold: "bg-gold text-card hover:bg-gold-dark tracking-widest uppercase text-xs font-semibold rounded-sm shadow-md hover:shadow-xl hover:shadow-gold/25 hover:-translate-y-0.5 active:translate-y-0",
        elegant: "bg-transparent border border-foreground/20 text-foreground hover:border-gold hover:text-gold tracking-widest uppercase text-xs font-medium rounded-sm hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gold/5 before:translate-y-full hover:before:translate-y-0 before:transition-transform before:duration-300",
        navLink: "bg-transparent text-foreground/80 hover:text-gold tracking-wider uppercase text-xs font-medium",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 px-8",
        xl: "h-14 px-10 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
