import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Recipes from "./pages/Recipes";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route
            path="/community"
            element={
              <Placeholder
                title="Community Hub"
                description="Connect with fellow guacamole enthusiasts, share recipes, and discover new variations from around the world."
              />
            }
          />
          <Route
            path="/about"
            element={
              <Placeholder
                title="About Glowing Guacamole"
                description="Learn about our mission to spread the joy of perfect guacamole and the story behind our glowing recipes."
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Placeholder
                title="Get in Touch"
                description="Have a question, suggestion, or want to share your own guacamole creation? We'd love to hear from you!"
              />
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
