import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Users,
  Heart,
  Star,
  Sparkles,
  Music,
  Headphones,
  Mic,
  Radio,
  Zap,
  Brain,
  ArrowRight,
  TrendingUp,
  Volume2,
  Globe,
  Gift,
} from "lucide-react";
import { ShootingStars } from "@/components/ui/shooting-stars";

const features = [
  {
    icon: Brain,
    title: "Emotion-Driven Discovery",
    description:
      "NeuroBehavioral Rhythm Technology personalizes music based on your mood and behavior patterns",
    color: "emotion-purple",
  },
  {
    icon: Mic,
    title: "Artist Empowerment",
    description:
      "Complete tools for independent artists to release, grow, and connect without labels",
    color: "emotion-blue",
  },
  {
    icon: Radio,
    title: "Festival Integration",
    description:
      "Top digital artists get fast-tracked to real-world performances at partner festivals",
    color: "emotion-gold",
  },
  {
    icon: Heart,
    title: "Interactive Fan Economy",
    description:
      "Fans vote, gift, and directly support artists through micro-transactions and engagement",
    color: "emotion-purple",
  },
];

const stats = [
  { number: "850M+", label: "Digital Music Users in India", icon: Users },
  { number: "50M+", label: "Independent Creators", icon: Mic },
  { number: "250%", label: "Rise in Live Music Demand", icon: TrendingUp },
  { number: "₹5.1B", label: "Market Opportunity by 2030", icon: Globe },
];

const revenueStreams = [
  {
    icon: Headphones,
    title: "Premium Subscriptions",
    description: "Ad-free, emotion-personalized experience",
  },
  {
    icon: Mic,
    title: "Artist Tools",
    description: "Freemium to Pro artist management suite",
  },
  {
    icon: Radio,
    title: "Live Events",
    description: "Festival ticketing and brand activations",
  },
  {
    icon: Gift,
    title: "Fan Gifting",
    description: "Micro-tipping and exclusive content access",
  },
  {
    icon: Volume2,
    title: "Brand Partnerships",
    description: "Emotion-aligned advertising campaigns",
  },
  {
    icon: Zap,
    title: "Creator Marketplace",
    description: "Music gear and tools commissions",
  },
];

export default function Index() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);

  return (
    <div className="bg-gradient-to-br from-black via-black-800 to-purple-950 relative overflow-hidden">
      {/* Shooting Stars Background */}
      <ShootingStars
        starColor="#9333EA"
        trailColor="#7C3AED"
        minSpeed={8}
        maxSpeed={20}
        minDelay={2000}
        maxDelay={5000}
      />
      <ShootingStars
        starColor="#A855F7"
        trailColor="#8B5CF6"
        minSpeed={5}
        maxSpeed={15}
        minDelay={3000}
        maxDelay={6000}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden z-10">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-purple-500/5 to-purple-400/10 animate-pulse" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Logo/Brand */}
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-purple-500/10 rounded-full border border-purple-300/30 glow">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center">
                <Music className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">
                ENVOICVERSE
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent text-glow leading-tight">
              Music That Understands Your Soul
            </h1>

            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              India's first emotion-driven, artist-first music ecosystem.
              Powered by AI that personalizes every beat to your emotional
              journey.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-purple-600/20 text-purple-100 border-purple-400/50 text-lg"
              >
                <Brain className="w-5 h-5 mr-2" />
                AI-Powered
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-emotion-purple/20 text-music-800 border-emotion-purple/30 text-lg"
              >
                <Heart className="w-5 h-5 mr-2" />
                Emotion-Driven
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-emotion-blue/20 text-music-800 border-emotion-blue/30 text-lg"
              >
                <Mic className="w-5 h-5 mr-2" />
                Artist-First
              </Badge>
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-emotion-gold/20 text-music-800 border-emotion-gold/30 text-lg"
              >
                <Radio className="w-5 h-5 mr-2" />
                Festival-Connected
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="px-10 py-6 text-xl bg-gradient-to-r from-music-600 to-emotion-purple hover:from-music-700 hover:to-emotion-purple/90 glow transition-all duration-500 transform hover:scale-105"
                onClick={() => setIsDemoPlaying(!isDemoPlaying)}
              >
                <Play
                  className={`w-6 h-6 mr-3 ${isDemoPlaying ? "animate-pulse" : ""}`}
                />
                {isDemoPlaying ? "Experience Live" : "Start Your Journey"}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-6 text-xl border-music-400 text-music-700 hover:bg-music-50 transition-all duration-500"
              >
                <Sparkles className="w-6 h-6 mr-3" />
                For Artists
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-music-800">
            Revolutionary Music Experience
          </h2>
          <p className="text-xl text-music-600 max-w-3xl mx-auto">
            We're not just another streaming platform. We're building the future
            where music lives, breathes, and truly belongs to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border-music-300/30 shadow-xl bg-card/80 backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer ${
                activeFeature === index ? "ring-2 ring-emotion-purple glow" : ""
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <CardHeader className="text-center pb-6">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-${feature.color} to-${feature.color}/70 flex items-center justify-center glow-${feature.color.split("-")[1]}`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-music-800">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-lg text-music-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Market Stats Section */}
      <div className="bg-gradient-to-r from-music-100/50 to-music-200/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-music-800">
              India's Music Revolution
            </h2>
            <p className="text-xl text-music-600">
              The numbers that drive our mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-music-300/30 bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 pulse-music"
              >
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-emotion-purple to-emotion-blue flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-music-700">
                    {stat.number}
                  </CardTitle>
                  <CardDescription className="text-music-600">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Model Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-music-800">
            Sustainable Revenue Ecosystem
          </h2>
          <p className="text-xl text-music-600 max-w-3xl mx-auto">
            Multiple revenue streams aligned with emotion, discovery, and artist
            empowerment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {revenueStreams.map((stream, index) => (
            <Card
              key={index}
              className="text-center border-music-300/30 bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-music-500 to-emotion-purple/70 flex items-center justify-center glow">
                  <stream.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-music-800">
                  {stream.title}
                </CardTitle>
                <CardDescription className="text-music-600">
                  {stream.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Tech Showcase Section */}
      <div className="bg-gradient-to-r from-music-800 via-music-900 to-music-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Powered by Advanced AI Technology
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Experience our cutting-edge NeuroBehavioral Rhythm Technology
              through interactive demonstrations
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <Card className="bg-music-700/30 border-music-600/50 backdrop-blur-sm text-center hover:bg-music-700/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-emotion-purple to-emotion-blue flex items-center justify-center glow">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">
                    Emotion Detection
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    AI analyzes behavioral patterns to understand your emotional
                    state
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-music-700/30 border-music-600/50 backdrop-blur-sm text-center hover:bg-music-700/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-emotion-blue to-emotion-gold flex items-center justify-center glow-blue">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">
                    Real-time Adaptation
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Music recommendations adapt instantly to your mood changes
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-music-700/30 border-music-600/50 backdrop-blur-sm text-center hover:bg-music-700/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-emotion-gold to-emotion-purple flex items-center justify-center glow-gold">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">
                    Interactive Visualization
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    See your music data come alive through particle-based
                    animations
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="px-10 py-6 text-xl border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              onClick={() => (window.location.href = "/demo")}
            >
              <Sparkles className="w-6 h-6 mr-3" />
              View Interactive Demo
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-music-600 via-emotion-purple to-emotion-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Music?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join us in building India's most inclusive and emotionally
            intelligent music ecosystem
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="px-10 py-6 text-xl bg-white text-music-700 hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              Join as Artist
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-6 text-xl border-white text-white hover:bg-white/10 transition-all duration-300"
            >
              <ArrowRight className="w-6 h-6 mr-3" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
