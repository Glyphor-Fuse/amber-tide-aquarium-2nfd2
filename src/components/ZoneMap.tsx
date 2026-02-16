
import { LayoutGrid as LayoutGridIcon} from 'lucide-react'
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "relative overflow-hidden rounded-xl h-[300px] md:h-[400px]")}>
          <motion.div
            className={cn(
              card.className,
              "relative overflow-hidden",
              "bg-background border border-border/10 h-full"
            )}
          >
            <div className="absolute inset-0 h-full w-full transition duration-500 group-hover:scale-110">
               <img 
                 src={card.thumbnail} 
                 alt="zone thumbnail" 
                 className="object-cover w-full h-full brightness-[0.7] hover:brightness-95 transition-all duration-700"
               />
            </div>
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            
            <motion.div className="relative z-10 p-8 h-full flex flex-col justify-end items-start">
                {card.content}
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">Zone A</span>
      <p className="font-bold text-3xl md:text-4xl text-foreground font-display">Shark Tunnel</p>
      <p className="font-normal text-base text-foreground/90 my-4 font-body max-w-md">
        Walk beneath the predators of the deep in our 360-degree glass tunnel. Experience the thrill safely.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">Zone B</span>
      <p className="font-bold text-3xl md:text-4xl text-foreground font-display">Coral Kingdom</p>
      <p className="font-normal text-base text-foreground/90 my-4 font-body">
        Vibrant colors and tiny lives in our largest living reef exhibit.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">Zone C</span>
      <p className="font-bold text-3xl md:text-4xl text-foreground font-display">The Touch Pool</p>
      <p className="font-normal text-base text-foreground/90 my-4 font-body">
        Get hands-on with rays, starfish, and gentle sharks.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">Zone D</span>
      <p className="font-bold text-3xl md:text-4xl text-foreground font-display">Jellyfish Jam</p>
      <p className="font-normal text-base text-foreground/90 my-4 font-body">
        A mesmerizing dance of light and motion in the dark.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/zone-shark.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "md:col-span-1",
    thumbnail: "/images/zone-coral.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "md:col-span-1",
    thumbnail: "/images/zone-touch.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/zone-jelly.png",
  },
];

export function ZoneMap() {
  return (
    <section className="py-24 bg-card border-y border-border/5">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">Explore Our Zones</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Navigate through four unique environments, each with its own ecosystem and inhabitants.
        </p>
      </div>
      <div className="h-full py-2 w-full p-4">
        <LayoutGridIcon cards={cards} />
      </div>
    </section>
  );
}
