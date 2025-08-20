import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles, Music, Brain, Zap } from "lucide-react";

export default function Demo() {
  const musicWords = ["ENVOICVERSE", "MUSIC", "EMOTION", "AI", "ARTIST", "FESTIVAL", "DISCOVER"];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-music-950 via-music-900 to-music-800">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="outline" 
            className="border-music-400 text-music-300 hover:bg-music-800"
            onClick={() => window.location.href = '/'}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center gap-2">
            <Badge className="bg-gradient-to-r from-emotion-purple to-emotion-blue text-white">
              <Sparkles className="w-3 h-3 mr-1" />
              Interactive Demo
            </Badge>
          </div>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-music-200 via-emotion-purple to-emotion-blue bg-clip-text text-transparent">
            Particle Text Effect Demo
          </h1>
          <p className="text-xl text-music-300 max-w-2xl mx-auto">
            Experience our AI-powered text visualization technology in action
          </p>
        </div>
      </div>

      {/* Main Demo */}
      <div className="container mx-auto px-4">
        <ParticleTextEffect 
          words={musicWords}
          className="mb-12"
        />

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="bg-music-800/50 border-music-600/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-emotion-purple to-emotion-blue flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-music-200">AI-Powered</CardTitle>
              <CardDescription className="text-music-400">
                Advanced algorithms create dynamic, emotion-responsive visualizations
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-music-800/50 border-music-600/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-emotion-blue to-emotion-gold flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-music-200">Interactive</CardTitle>
              <CardDescription className="text-music-400">
                Right-click and drag to interact with particles in real-time
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-music-800/50 border-music-600/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-emotion-gold to-emotion-purple flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-music-200">Music-Themed</CardTitle>
              <CardDescription className="text-music-400">
                Visualizations adapt to musical emotions and rhythm patterns
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Technical Details */}
        <Card className="max-w-4xl mx-auto bg-music-800/30 border-music-600/30 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-music-200 text-center">How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-music-300 mb-2">Particle Physics</h3>
                <p className="text-music-400 text-sm">
                  Each particle follows realistic physics with acceleration, velocity, and target-seeking behavior 
                  to create smooth, organic text formations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-music-300 mb-2">Color Dynamics</h3>
                <p className="text-music-400 text-sm">
                  Dynamic color blending system transitions between EnvoicVerse brand colors, 
                  creating visually stunning text transformations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-music-300 mb-2">Canvas Rendering</h3>
                <p className="text-music-400 text-sm">
                  High-performance HTML5 Canvas rendering with motion blur effects 
                  and 60fps animations for smooth visual experience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-music-300 mb-2">User Interaction</h3>
                <p className="text-music-400 text-sm">
                  Real-time mouse interaction allows users to destroy particles, 
                  creating engaging and playful user experiences.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center pb-16">
          <h2 className="text-3xl font-bold text-music-200 mb-4">
            Ready to Experience EnvoicVerse?
          </h2>
          <p className="text-music-400 mb-8 max-w-2xl mx-auto">
            This is just a glimpse of the innovative technology powering our emotion-driven music platform
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-emotion-purple to-emotion-blue hover:from-emotion-purple/90 hover:to-emotion-blue/90 glow"
            onClick={() => window.location.href = '/'}
          >
            <Music className="w-5 h-5 mr-2" />
            Explore Platform
          </Button>
        </div>
      </div>
    </div>
  );
}
