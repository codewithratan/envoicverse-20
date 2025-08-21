import {
  Home,
  User,
  Briefcase,
  FileText,
  Music,
  Globe,
  Sparkles,
} from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Artists", url: "/artists", icon: User },
    { name: "Demos", url: "/demo", icon: Briefcase },
    { name: "Community", url: "/community", icon: FileText },
  ];

  return <NavBar items={navItems} />;
}

export default function TubelightNavbarDemoPage() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Artists", url: "/artists", icon: User },
    { name: "Music", url: "#", icon: Music },
    { name: "Globe", url: "/globe-demo", icon: Globe },
    { name: "Effects", url: "/demo", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black-800 to-purple-950 relative">
      {/* Demo Navbar */}
      <NavBar items={navItems} />

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Tubelight Navbar
          </h1>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Interactive navigation bar with smooth animations and tubelight glow
            effects. Features responsive design and smooth transitions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/40 border border-purple-500/20 rounded-lg p-6">
              <div className="text-purple-400 text-2xl mb-3">✨</div>
              <h3 className="text-purple-300 font-semibold mb-2">
                Smooth Animations
              </h3>
              <p className="text-purple-200/70 text-sm">
                Framer Motion powered spring animations with layoutId for
                seamless tab transitions.
              </p>
            </div>

            <div className="bg-black/40 border border-purple-500/20 rounded-lg p-6">
              <div className="text-purple-400 text-2xl mb-3">💡</div>
              <h3 className="text-purple-300 font-semibold mb-2">
                Tubelight Effect
              </h3>
              <p className="text-purple-200/70 text-sm">
                Unique tubelight glow effect on active tabs with multiple blur
                layers for realistic lighting.
              </p>
            </div>

            <div className="bg-black/40 border border-purple-500/20 rounded-lg p-6">
              <div className="text-purple-400 text-2xl mb-3">📱</div>
              <h3 className="text-purple-300 font-semibold mb-2">
                Responsive Design
              </h3>
              <p className="text-purple-200/70 text-sm">
                Shows text labels on desktop and icon-only view on mobile
                devices for optimal UX.
              </p>
            </div>

            <div className="bg-black/40 border border-purple-500/20 rounded-lg p-6">
              <div className="text-purple-400 text-2xl mb-3">🎯</div>
              <h3 className="text-purple-300 font-semibold mb-2">
                Fixed Positioning
              </h3>
              <p className="text-purple-200/70 text-sm">
                Bottom position on mobile, top position on desktop with backdrop
                blur for modern glass effect.
              </p>
            </div>

            <div className="bg-black/40 border border-purple-500/20 rounded-lg p-6">
              <div className="text-purple-400 text-2xl mb-3">🔗</div>
              <h3 className="text-purple-300 font-semibold mb-2">
                React Router
              </h3>
              <p className="text-purple-200/70 text-sm">
                Fully integrated with React Router for SPA navigation without
                page refreshes.
              </p>
            </div>

            <div className="bg-black/40 border border-purple-500/20 rounded-lg p-6">
              <div className="text-purple-400 text-2xl mb-3">🎨</div>
              <h3 className="text-purple-300 font-semibold mb-2">
                Theme Integrated
              </h3>
              <p className="text-purple-200/70 text-sm">
                Perfectly matched with EnvoicVerse purple and black theme with
                glassmorphism effects.
              </p>
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="bg-black/30 border border-purple-500/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-purple-300 mb-6 text-center">
              How to Use
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">
                  Basic Implementation
                </h3>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-purple-200">
                  <code>{`import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, User, Briefcase, FileText } from 'lucide-react'

const navItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'About', url: '/about', icon: User },
  { name: 'Projects', url: '/projects', icon: Briefcase },
  { name: 'Contact', url: '/contact', icon: FileText }
]

<NavBar items={navItems} />`}</code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">
                  Key Features
                </h3>
                <ul className="text-purple-200 space-y-2">
                  <li>
                    • Fixed positioning (bottom on mobile, top on desktop)
                  </li>
                  <li>• Backdrop blur glass effect</li>
                  <li>• Active tab indicator with tubelight glow</li>
                  <li>• Smooth spring animations via Framer Motion</li>
                  <li>
                    • Lucide React icons with responsive text/icon switching
                  </li>
                  <li>• Fully typed TypeScript interface</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
