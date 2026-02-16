
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Simple Wordmark */}
          <span className="text-2xl font-display font-bold text-foreground">
            Amber<span className="text-primary">Tide</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Zones</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Species</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Feeding Times</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Membership</a>
        </div>

        <Button className="bg-secondary hover:bg-background-600 text-foreground font-bold rounded-full px-6 shadow-lg shadow-secondary/10 hover:shadow-secondary/20 transition-all">
          Buy Tickets
        </Button>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-muted py-16 border-t border-border/10 text-center md:text-left">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-display text-foreground">Amber Tide</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Exploring the hidden depths since 2024. <br/>
            Dedicated to conservation and education.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-foreground mb-4">Visit</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-primary transition-colors cursor-pointer">123 Ocean Drive</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Bay City, CA 90210</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Daily: 9AM - 8PM</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-primary transition-colors cursor-pointer">Instagram</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Facebook</li>
            <li className="hover:text-primary transition-colors cursor-pointer">TikTok</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Newsletter</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-primary transition-colors cursor-pointer">Donate</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Volunteer</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Press Kit</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-border/5 text-center text-xs text-muted-foreground">
        © 2024 Amber Tide Aquarium. All rights reserved.
      </div>
    </footer>
  );
}

export default Navbar;
