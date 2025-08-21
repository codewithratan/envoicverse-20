import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { EnvoicVerseFooter } from "./components/ui/footer-section";
import Index from "./pages/Index";
import Artists from "./pages/Artists";
import Demo from "./pages/Demo";
import ShootingStarsDemo from "./pages/ShootingStarsDemo";
import FooterDemo from "./pages/FooterDemo";
import GlobeDemo from "./pages/GlobeDemo";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/shooting-stars" element={<ShootingStarsDemo />} />
              <Route path="/footer-demo" element={<FooterDemo />} />
              <Route path="/globe-demo" element={<GlobeDemo />} />
              <Route
                path="/community"
                element={
                  <Placeholder
                    title="Music Community"
                    description="Connect with fellow music lovers, discover new artists, and engage with the emotion-driven music ecosystem."
                  />
                }
              />
              <Route
                path="/festivals"
                element={
                  <Placeholder
                    title="Festival Network"
                    description="Explore our partner festivals and live events where digital artists transition to real-world stages."
                  />
                }
              />
              <Route
                path="/about"
                element={
                  <Placeholder
                    title="About EnvoicVerse"
                    description="Learn about our mission to create India's most inclusive and emotionally intelligent music ecosystem."
                  />
                }
              />
              <Route
                path="/contact"
                element={
                  <Placeholder
                    title="Get in Touch"
                    description="Have questions about our platform? Want to partner with us? We'd love to hear from you!"
                  />
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <EnvoicVerseFooter />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
