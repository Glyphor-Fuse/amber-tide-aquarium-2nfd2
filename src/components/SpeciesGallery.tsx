
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-2xl relative bg-card overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out border border-border/10",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-background/60 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-background-50 to-background-200 font-display drop-shadow-md">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: any[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

export function SpeciesGallery() {
  const species = [
    {
      title: "Royal Gramma",
      src: "/images/fish-1.png",
    },
    {
      title: "Green Sea Turtle",
      src: "/images/fish-2.png",
    },
    {
      title: "Lionfish",
      src: "/images/fish-3.png",
    },
    {
      title: "Clownfish Colony",
      src: "/images/fish-4.png",
    },
    {
      title: "Giant Pacific Octopus",
      src: "/images/fish-5.png",
    },
    {
      title: "Seahorse Garden",
      src: "/images/fish-6.png",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-xl">
             <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">Meet the Locals</h2>
             <p className="text-lg text-muted-foreground">
               From the microscopic to the majestic, discover the diverse species that call Amber Tide home.
             </p>
          </div>
          <button className="hidden md:block text-accent hover:text-foreground font-bold tracking-wide uppercase text-sm border-b-2 border-accent pb-1 transition-colors">
            View Full Database
          </button>
        </div>
        <FocusCards cards={species} />
      </div>
    </section>
  );
}

export default FocusCards;
