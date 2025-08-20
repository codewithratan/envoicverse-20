import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Music, Home, Mic, Users, Radio, Info, Mail, Play, Headphones } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "For Artists", href: "/artists", icon: Mic },
  { name: "Tech Demo", href: "/demo", icon: Play },
  { name: "Community", href: "/community", icon: Users, comingSoon: true },
  { name: "Festivals", href: "/festivals", icon: Radio, comingSoon: true },
  { name: "About", href: "/about", icon: Info, comingSoon: true },
  { name: "Contact", href: "/contact", icon: Mail, comingSoon: true },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-music-300/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-3 text-2xl font-bold text-music-800 hover:text-music-600 transition-colors"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-emotion-purple to-emotion-blue rounded-full flex items-center justify-center glow">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="hidden sm:block bg-gradient-to-r from-music-600 to-emotion-purple bg-clip-text text-transparent">
              EnvoicVerse
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
                        ? "bg-gradient-to-r from-music-600 to-emotion-purple text-white glow hover:from-music-700 hover:to-emotion-purple/90" 
                        : "text-music-700 hover:text-music-800 hover:bg-music-100/50"
                    } ${item.comingSoon ? "cursor-not-allowed opacity-60" : ""}`}
                    onClick={() => !item.comingSoon && (window.location.href = item.href)}
                    disabled={item.comingSoon}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                    {item.comingSoon && (
                      <Badge variant="secondary" className="ml-1 text-xs bg-music-200 text-music-700">
                        Soon
                      </Badge>
                    )}
                  </Button>
                </div>
              );
            })}
            
            {/* CTA Buttons */}
            <div className="ml-4 flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-music-400 text-music-700 hover:bg-music-50"
                disabled
              >
                <Headphones className="w-4 h-4 mr-2" />
                Listen
                <Badge variant="secondary" className="ml-2 text-xs">Soon</Badge>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-emotion-purple to-emotion-blue hover:from-emotion-purple/90 hover:to-emotion-blue/90 glow"
                disabled
              >
                <Play className="w-4 h-4 mr-2" />
                Join Beta
                <Badge variant="secondary" className="ml-2 text-xs bg-white/20">Soon</Badge>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-music-700 hover:text-music-800 hover:bg-music-100/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-music-300/30 bg-background/95 backdrop-blur-sm">
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
                        ? "bg-gradient-to-r from-music-600 to-emotion-purple text-white glow" 
                        : "text-music-700 hover:text-music-800 hover:bg-music-100/50"
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
                      <Badge variant="secondary" className="text-xs bg-music-200 text-music-700">
                        Soon
                      </Badge>
                    )}
                  </Button>
                );
              })}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2 border-t border-music-300/30">
                <Button
                  variant="outline"
                  className="w-full border-music-400 text-music-700"
                  disabled
                >
                  <Headphones className="w-4 h-4 mr-2" />
                  Listen Now
                  <Badge variant="secondary" className="ml-2 text-xs">Soon</Badge>
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-emotion-purple to-emotion-blue"
                  disabled
                >
                  <Play className="w-4 h-4 mr-2" />
                  Join Beta
                  <Badge variant="secondary" className="ml-2 text-xs bg-white/20">Soon</Badge>
                </Button>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-music-300/30">
              <div className="flex items-center justify-center gap-2 text-sm text-music-600">
                <Music className="w-4 h-4" />
                <span>Where music truly belongs to you</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
