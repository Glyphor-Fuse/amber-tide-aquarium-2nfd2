
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  showRadialGradient?: boolean;
}

const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-[100vh] items-center justify-center bg-background-900 text-foreground-950 transition-bg overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
          [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
          [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
          [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,#var(--indigo-500)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
          [background-image:var(--white-gradient),var(--aurora)]
          dark:[background-image:var(--dark-gradient),var(--aurora)]
          [background-size:300%,_200%]
          [background-position:50%_50%,50%_50%]
          filter blur-[10px] invert dark:invert-0
          after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
          after:dark:[background-image:var(--dark-gradient),var(--aurora)]
          after:[background-size:200%,_100%] 
          after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
          pointer-events-none
          absolute -inset-[10px] opacity-50`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};

export function Hero() {
  return (
    <AuroraBackground className="bg-background">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center px-4 text-center z-10 max-w-4xl mx-auto mt-20"
      >
        <span className="font-display text-xl md:text-2xl text-accent tracking-[0.2em] uppercase font-bold drop-shadow-md">
          Welcome to the Deep
        </span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-foreground drop-shadow-2xl leading-[0.9]">
          Amber Tide <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Aquarium</span>
        </h1>
        <p className="font-body font-normal text-xl md:text-2xl text-foreground/80 py-4 max-w-2xl mx-auto leading-relaxed">
          Where the charcoal depths meet the warmth of the sun. <br className="hidden md:block"/>
          Experience the magic of the ocean like never before.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" className="bg-primary hover:bg-background-600 text-foreground rounded-full px-10 py-8 text-xl font-bold shadow-[0_0_30px_rgba(255,107,107,0.4)] hover:shadow-[0_0_50px_rgba(255,107,107,0.6)] transition-all duration-300 transform hover:-translate-y-1">
            Book Your Visit
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-10 py-8 text-xl border-2 border-accent text-accent hover:bg-accent hover:text-background font-bold backdrop-blur-sm transition-all duration-300">
            View Map
          </Button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
