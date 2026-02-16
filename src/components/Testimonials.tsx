
import React, { useEffect, useState, useCallback } from 'react';
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl border border-border/10 flex-shrink-0 bg-card/40 px-8 py-6 md:w-[450px]"
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm leading-[1.6] text-muted-foreground font-normal italic">
                "{item.quote}"
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-accent font-bold">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-muted-foreground/60 font-normal uppercase tracking-wider text-xs">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export function Testimonials() {
  const reviews = [
    {
      quote: "The shark tunnel is absolutely breathtaking. I felt like I was swimming right alongside them!",
      name: "Sarah Jenkins",
      title: "Family Pass Holder",
    },
    {
      quote: "Feeding the stingrays was the highlight of our trip. The staff were so knowledgeable and kind.",
      name: "Mike Ross",
      title: "First-time Visitor",
    },
    {
      quote: "A magical place. The lighting and atmosphere make you feel like you're on another planet.",
      name: "Elena Rodriguez",
      title: "Photographer",
    },
    {
      quote: "My kids learned so much at the Touch Pool. Best educational experience in the city.",
      name: "David Kim",
      title: "Father of 3",
    },
    {
      quote: "The evening 'Reef Twilight' event is a must-see. The bioluminescence is unreal.",
      name: "Jessica Chen",
      title: "Marine Biology Student",
    },
  ];

  return (
    <section className="py-24 bg-background relative">
       {/* Gradient mask for bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-10 text-center relative z-20">
         <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">Visitor Voices</h2>
         <p className="text-muted-foreground">Hear from those who have dove into the deep.</p>
      </div>
      <InfiniteMovingCards items={reviews} direction="right" speed="slow" className="relative z-0" />
    </section>
  );
}

export default InfiniteMovingCards;
