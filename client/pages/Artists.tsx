import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mic,
  Users,
  TrendingUp,
  ArrowRight,
  Music,
  Radio,
  Heart,
  DollarSign,
  BarChart3,
  Share2,
  Upload,
  Calendar,
  Award,
  Zap,
} from "lucide-react";

const artistTools = [
  {
    icon: Upload,
    title: "Easy Upload & Distribution",
    description:
      "Release your music across all platforms instantly. No label needed.",
    features: [
      "Multi-format support",
      "Instant distribution",
      "Metadata management",
    ],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Deep insights into your audience, engagement, and emotional response data.",
    features: ["Emotion analytics", "Fan demographics", "Real-time metrics"],
  },
  {
    icon: Heart,
    title: "Fan Engagement Tools",
    description:
      "Build deeper connections with features like gifting, voting, and exclusive content.",
    features: [
      "Direct fan interaction",
      "Micro-monetization",
      "Community building",
    ],
  },
  {
    icon: Radio,
    title: "Festival Fast-Track",
    description:
      "Top-performing artists get priority access to our partner festival network.",
    features: [
      "Live performance opportunities",
      "Festival submissions",
      "Event coordination",
    ],
  },
  {
    icon: Share2,
    title: "Social Integration",
    description:
      "Seamlessly share and cross-promote across all social platforms.",
    features: ["Auto-sharing", "Content templates", "Campaign management"],
  },
  {
    icon: DollarSign,
    title: "Multiple Revenue Streams",
    description:
      "Earn from streaming, fan gifts, merchandise, and live performances.",
    features: ["Direct payments", "Merchandise sales", "Tip integration"],
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Upload up to 3 songs",
      "Basic analytics",
      "Community access",
      "Standard distribution",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Creator",
    price: "₹499",
    period: "month",
    description: "For serious independent artists",
    features: [
      "Unlimited uploads",
      "Advanced analytics",
      "Fan engagement tools",
      "Priority support",
      "Festival submissions",
      "Revenue optimization",
    ],
    cta: "Start Creating",
    popular: true,
  },
  {
    name: "Pro",
    price: "₹999",
    period: "month",
    description: "For established artists and labels",
    features: [
      "Everything in Creator",
      "White-label options",
      "Advanced marketing tools",
      "Dedicated manager",
      "Custom integrations",
      "Premium placement",
    ],
    cta: "Go Pro",
    popular: false,
  },
];

const successStories = [
  {
    name: "Arjun Mehta",
    genre: "Indie Folk",
    achievement: "10M+ streams in 6 months",
    quote:
      "EnvoicVerse's emotion-based discovery helped my music find the right audience organically.",
    image: "🎸",
  },
  {
    name: "Priya Sharma",
    genre: "Electronic Pop",
    achievement: "Featured at 5 major festivals",
    quote:
      "The festival fast-track feature transformed my career from bedroom producer to main stage.",
    image: "🎹",
  },
  {
    name: "The Monsoon Collective",
    genre: "World Fusion",
    achievement: "₹2L+ monthly revenue",
    quote:
      "Fan gifting and direct support features created a sustainable income stream for our band.",
    image: "🥁",
  },
];

export default function Artists() {
  return (
    <div className="bg-gradient-to-br from-black via-black-800 to-purple-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-music-600/20 to-emotion-purple/20 animate-pulse" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-emotion-purple/10 rounded-full border border-emotion-purple/30 glow">
              <Mic className="w-4 h-4 text-emotion-purple" />
              <span className="text-sm font-medium text-music-700">
                For Independent Artists
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent">
              Your Music, Your Rules, Your Success
            </h1>

            <p className="text-lg md:text-xl text-music-700 mb-8 max-w-2xl mx-auto">
              Join thousands of independent artists who are building their
              careers without labels, intermediaries, or compromises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg bg-gradient-to-r from-emotion-purple to-emotion-blue glow transition-all duration-300 transform hover:scale-105"
                disabled
              >
                <Mic className="w-5 h-5 mr-2" />
                Join as Artist
                <Badge variant="secondary" className="ml-2 text-xs bg-white/20">
                  Coming Soon
                </Badge>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-music-400 text-music-700 hover:bg-music-50"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Artist Tools Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-800">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-music-600 max-w-2xl mx-auto">
            Professional-grade tools and insights without the traditional
            industry gatekeepers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {artistTools.map((tool, index) => (
            <Card
              key={index}
              className="border-music-300/30 shadow-xl bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emotion-purple to-emotion-blue rounded-lg flex items-center justify-center mb-4 glow">
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-music-800">
                  {tool.title}
                </CardTitle>
                <CardDescription className="text-music-600">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-music-600"
                    >
                      <Zap className="w-4 h-4 mr-2 text-emotion-purple" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gradient-to-r from-music-100/50 to-music-200/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-800">
              Choose Your Plan
            </h2>
            <p className="text-lg text-music-600">
              Start free, upgrade when you're ready to scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative border-music-300/30 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  tier.popular
                    ? "ring-2 ring-emotion-purple glow transform scale-105"
                    : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-emotion-purple to-emotion-blue text-white px-4 py-1">
                      <Award className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-music-800">
                    {tier.name}
                  </CardTitle>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-music-700">
                      {tier.price}
                    </span>
                    <span className="text-music-600">/{tier.period}</span>
                  </div>
                  <CardDescription className="text-music-600">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-music-600"
                      >
                        <Zap className="w-4 h-4 mr-2 text-emotion-purple" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full transition-all duration-300 ${
                      tier.popular
                        ? "bg-gradient-to-r from-emotion-purple to-emotion-blue hover:from-emotion-purple/90 hover:to-emotion-blue/90 glow"
                        : "bg-music-600 hover:bg-music-700"
                    }`}
                    disabled
                  >
                    {tier.cta}
                    <Badge
                      variant="secondary"
                      className="ml-2 text-xs bg-white/20"
                    >
                      Soon
                    </Badge>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-music-800">
            Artist Success Stories
          </h2>
          <p className="text-lg text-music-600">
            Real artists, real results, real impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {successStories.map((story, index) => (
            <Card
              key={index}
              className="border-music-300/30 shadow-xl bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{story.image}</div>
                <CardTitle className="text-xl text-music-800">
                  {story.name}
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="bg-emotion-purple/20 text-music-700"
                >
                  {story.genre}
                </Badge>
                <div className="mt-2">
                  <span className="text-lg font-bold text-emotion-purple">
                    {story.achievement}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-music-600 italic text-center">
                  "{story.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-music-600 via-emotion-purple to-emotion-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Music Career?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the waitlist and be among the first artists to experience the
            future of music
          </p>

          <Button
            size="lg"
            variant="secondary"
            className="px-10 py-4 text-lg bg-white text-music-700 hover:bg-white/90"
            disabled
          >
            <Mic className="w-5 h-5 mr-2" />
            Join Artist Waitlist
            <Badge variant="secondary" className="ml-2 text-xs bg-music-200">
              Coming Soon
            </Badge>
          </Button>
        </div>
      </div>
    </div>
  );
}
