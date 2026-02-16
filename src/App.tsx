
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar, Footer } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { FeedingTimeline } from "@/components/FeedingTimeline";
import { ZoneMap } from "@/components/ZoneMap";
import { SpeciesGallery } from "@/components/SpeciesGallery";
import { Membership } from "@/components/Membership";
import { Testimonials } from "@/components/Testimonials";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground font-body overflow-x-hidden selection:bg-accent selection:text-black">
          <Navbar />
          <Hero />
          <FeedingTimeline />
          <ZoneMap />
          <SpeciesGallery />
          <Membership />
          <Testimonials />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
