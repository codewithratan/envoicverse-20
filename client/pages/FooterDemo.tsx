import { EnvoicVerseFooter } from "@/components/ui/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Music } from "lucide-react";

export default function FooterDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black-900 to-purple-950">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="outline" 
            className="border-purple-400 text-purple-300 hover:bg-purple-900/20"
            onClick={() => window.location.href = '/'}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        {/* Content */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 glow">
            <Music className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent">
            Footer Component Demo
          </h1>
          
          <p className="text-lg text-purple-200 max-w-2xl mx-auto mb-12">
            A comprehensive footer component with newsletter signup, social links, navigation, and dark mode toggle.
          </p>

          {/* Sample Content */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-purple-900/20 p-8 rounded-lg border border-purple-700/50">
              <h3 className="text-xl font-semibold text-purple-200 mb-4">Features</h3>
              <ul className="text-purple-300 space-y-2 text-left">
                <li>• Newsletter subscription form</li>
                <li>• Social media links with tooltips</li>
                <li>• Dark/Light mode toggle</li>
                <li>• Responsive grid layout</li>
                <li>• EnvoicVerse branding</li>
                <li>• Purple theme integration</li>
              </ul>
            </div>
            
            <div className="bg-purple-900/20 p-8 rounded-lg border border-purple-700/50">
              <h3 className="text-xl font-semibold text-purple-200 mb-4">Components Used</h3>
              <ul className="text-purple-300 space-y-2 text-left">
                <li>• Button with variants</li>
                <li>• Input with custom styling</li>
                <li>• Switch for theme toggle</li>
                <li>• Tooltip for social icons</li>
                <li>• Label for accessibility</li>
                <li>• Lucide React icons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Footer */}
      <EnvoicVerseFooter />
    </div>
  );
}
