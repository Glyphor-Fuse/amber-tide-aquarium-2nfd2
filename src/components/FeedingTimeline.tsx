
import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const SCHEDULE = [
  {
    time: "09:00 AM",
    title: "Morning Ray Feed",
    species: "Spotted Eagle Rays",
    location: "Sunlight Zone",
    description: "Watch our rays glide to the surface for their morning breakfast of shrimp and squid.",
    color: "from-background-400 to-coral-500",
  },
  {
    time: "11:30 AM",
    title: "Shark Frenzy",
    species: "Sand Tiger Sharks",
    location: "Shadow Depths",
    description: "A thrilling display of power as our largest predators take their daily meal.",
    color: "from-background-400 to-background-600",
  },
  {
    time: "02:00 PM",
    title: "Otter Playtime",
    species: "Sea Otters",
    location: "Coastal Cove",
    description: "Not just feeding—it's training and play! See them solve puzzles for treats.",
    color: "from-background-400 to-background-500",
  },
  {
    time: "04:30 PM",
    title: "Jelly Bloom",
    species: "Moon Jellyfish",
    location: "Biolum Bay",
    description: "Experience the magic as we dim the lights and feed the glowing jellies.",
    color: "from-background-400 to-background-500",
  },
  {
    time: "06:00 PM",
    title: "Reef Twilight",
    species: "Tropical Mix",
    location: "Great Barrier Exhibit",
    description: "The tank comes alive with nocturnal activity as the sun sets.",
    color: "from-background-400 to-background-500",
  },
];

export function FeedingTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-muted relative overflow-hidden border-t border-border/5">
      {/* Background decoration - Bioluminescent particles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(78,205,196,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 mb-12 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">Daily Feeding Schedule</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Don't miss the action. Swipe through our daily events to plan your visit around the most exciting times of the day.
        </p>
      </div>

      <div className="relative z-10">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-background/10 -translate-y-1/2 z-0 hidden md:block" />
        
        {/* Cards Container */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto gap-8 py-12 px-6 snap-x snap-mandatory scrollbar-hide relative z-10"
          style={{ scrollBehavior: "smooth" }}
        >
          {SCHEDULE.map((item, index) => (
            <motion.div
              key={index}
              className="snap-center shrink-0 w-[300px] md:w-[400px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group relative h-full bg-card/90 backdrop-blur-sm border border-border/10 rounded-3xl p-6 hover:border-accent/50 transition-colors duration-500 overflow-hidden shadow-xl">
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-background/50 rounded-full text-accent font-bold text-sm border border-accent/20">
                      {item.time}
                    </span>
                    <span className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm font-bold text-secondary mb-4">
                    Target: {item.species}
                  </p>

                  <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                    {item.description}
                  </p>

                  <Button className="w-full bg-background/50 hover:bg-primary hover:text-primary-foreground text-foreground border border-border/10 hover:border-transparent transition-all duration-300">
                    Set Reminder
                  </Button>
                </div>
              </div>
              
              {/* Connector Dot (Desktop) */}
              <div className="hidden md:flex absolute -top-[52px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-muted border-4 border-accent z-20 shadow-[0_0_15px_rgba(78,205,196,0.6)]" />
            </motion.div>
          ))}
          {/* Spacer for right padding */}
          <div className="w-12 shrink-0" />
        </div>
      </div>
    </section>
  );
}

export default FeedingTimeline;
