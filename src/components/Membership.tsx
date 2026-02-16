
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PLANS = [
  {
    name: "Day Pass",
    price: "$29",
    description: "Perfect for a single day of wonder.",
    features: ["Access to all 4 zones", "Feeding schedule access", "Free parking"],
    cta: "Buy Ticket",
    featured: false,
  },
  {
    name: "Ocean Explorer",
    price: "$89",
    description: "Unlimited visits for a full year.",
    features: ["Unlimited entry for 1 year", "Priority exhibit access", "10% Gift Shop discount", "Member-only night events"],
    cta: "Join Now",
    featured: true,
  },
  {
    name: "Family Pod",
    price: "$199",
    description: "Fun for the whole family (up to 4).",
    features: ["Annual pass for 4 people", "4 Guest passes per year", "20% Birthday party discount", "Early bird booking"],
    cta: "Join Now",
    featured: false,
  },
];

export function Membership() {
  return (
    <section className="py-24 bg-muted border-t border-border/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">Become a Member</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Support ocean conservation and enjoy unlimited access to the magic of the deep.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative flex flex-col border ${plan.featured ? 'border-primary bg-card scale-105 shadow-[0_0_30px_rgba(255,107,107,0.15)] z-10' : 'border-border/10 bg-card/60 hover:bg-card hover:border-accent/30'} transition-all duration-300`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background text-sm font-bold px-4 py-4 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-display text-card-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/person</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="mt-1 bg-accent/20 rounded-full p-0.5">
                        <Check className="w-3 h-3 text-accent shrink-0" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.featured ? 'bg-primary hover:bg-background-600' : 'bg-muted hover:bg-muted/80 text-foreground border border-border/10'} font-bold py-6 text-lg`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Membership;
