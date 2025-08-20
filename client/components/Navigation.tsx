import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Sparkles, Home, BookOpen, Users, Info, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Recipes", href: "/recipes", icon: BookOpen },
  { name: "Community", href: "/community", icon: Users, comingSoon: true },
  { name: "About", href: "/about", icon: Info, comingSoon: true },
  { name: "Contact", href: "/contact", icon: Mail, comingSoon: true },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-guac-300/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-3 text-2xl font-bold text-guac-800 hover:text-guac-600 transition-colors"
          >
            <div className="w-10 h-10 bg-guac-500/20 rounded-full flex items-center justify-center glow-lime">
              <span className="text-xl">🥑</span>
            </div>
            <span className="hidden sm:block bg-gradient-to-r from-guac-600 to-guac-500 bg-clip-text text-transparent">
              Glowing Guacamole
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.href;
              
              return (
                <div key={item.name} className="relative">
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
                      isActive 
                        ? "bg-guac-600 text-white glow hover:bg-guac-700" 
                        : "text-guac-700 hover:text-guac-800 hover:bg-guac-100/50"
                    } ${item.comingSoon ? "cursor-not-allowed opacity-60" : ""}`}
                    onClick={() => !item.comingSoon && (window.location.href = item.href)}
                    disabled={item.comingSoon}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                    {item.comingSoon && (
                      <Badge variant="secondary" className="ml-1 text-xs bg-guac-200 text-guac-700">
                        Soon
                      </Badge>
                    )}
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-guac-700 hover:text-guac-800 hover:bg-guac-100/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-guac-300/30 bg-background/95 backdrop-blur-sm">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPath === item.href;
                
                return (
                  <Button
                    key={item.name}
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start gap-3 px-4 py-3 transition-all duration-300 ${
                      isActive 
                        ? "bg-guac-600 text-white glow" 
                        : "text-guac-700 hover:text-guac-800 hover:bg-guac-100/50"
                    } ${item.comingSoon ? "cursor-not-allowed opacity-60" : ""}`}
                    onClick={() => {
                      if (!item.comingSoon) {
                        window.location.href = item.href;
                        setMobileMenuOpen(false);
                      }
                    }}
                    disabled={item.comingSoon}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="flex-1 text-left">{item.name}</span>
                    {item.comingSoon && (
                      <Badge variant="secondary" className="text-xs bg-guac-200 text-guac-700">
                        Soon
                      </Badge>
                    )}
                  </Button>
                );
              })}
            </div>
            
            <div className="mt-4 pt-4 border-t border-guac-300/30">
              <div className="flex items-center justify-center gap-2 text-sm text-guac-600">
                <Sparkles className="w-4 h-4" />
                <span>Made with love for guacamole enthusiasts</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
