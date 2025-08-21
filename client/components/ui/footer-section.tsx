"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Moon, 
  Send, 
  Sun, 
  Twitter, 
  Music, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from "lucide-react"

function EnvoicVerseFooter() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t border-purple-800/50 bg-gradient-to-b from-black to-purple-950 text-purple-100 transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.1)_0%,rgba(0,0,0,0)_50%)]" />
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Newsletter Section */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center">
                <Music className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
                EnvoicVerse
              </h2>
            </div>
            <h3 className="mb-4 text-lg font-semibold text-purple-200">Stay In The Loop</h3>
            <p className="mb-6 text-purple-300">
              Get the latest updates on new artists, exclusive releases, and platform features.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 bg-purple-900/20 border-purple-700/50 text-purple-100 placeholder:text-purple-400 focus:border-purple-500"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-purple-200">Platform</h3>
            <nav className="space-y-2 text-sm">
              <a href="/" className="block transition-colors hover:text-purple-400 text-purple-300">
                Home
              </a>
              <a href="/artists" className="block transition-colors hover:text-purple-400 text-purple-300">
                For Artists
              </a>
              <a href="/demo" className="block transition-colors hover:text-purple-400 text-purple-300">
                Tech Demo
              </a>
              <a href="/shooting-stars" className="block transition-colors hover:text-purple-400 text-purple-300">
                Shooting Stars
              </a>
              <a href="/community" className="block transition-colors hover:text-purple-400 text-purple-300">
                Community
              </a>
              <a href="/festivals" className="block transition-colors hover:text-purple-400 text-purple-300">
                Festivals
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-purple-200">Connect</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-purple-300">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <Mail className="h-4 w-4 text-purple-400" />
                <span>hello@envoicverse.com</span>
              </div>
              <div className="flex items-center gap-2 text-purple-300">
                <Phone className="h-4 w-4 text-purple-400" />
                <span>+91 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Social & Theme */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-purple-200">Follow Us</h3>
            <div className="mb-6 flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-purple-600/50 bg-purple-900/20 hover:bg-purple-800/30 text-purple-300 hover:text-purple-200"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-purple-600/50 bg-purple-900/20 hover:bg-purple-800/30 text-purple-300 hover:text-purple-200"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-purple-600/50 bg-purple-900/20 hover:bg-purple-800/30 text-purple-300 hover:text-purple-200"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-purple-600/50 bg-purple-900/20 hover:bg-purple-800/30 text-purple-300 hover:text-purple-200"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2 text-purple-300">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-purple-600"
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-purple-800/50 pt-8 text-center md:flex-row">
          <div className="flex items-center gap-2 text-sm text-purple-400">
            <span>© 2024 EnvoicVerse. Made with</span>
            <Heart className="h-4 w-4 text-purple-500 fill-current" />
            <span>for music lovers.</span>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#" className="transition-colors hover:text-purple-400 text-purple-300">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-purple-400 text-purple-300">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-purple-400 text-purple-300">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { EnvoicVerseFooter }
