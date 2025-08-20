import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, Star, Sparkles, Timer, Heart } from "lucide-react";

const ingredients = [
  { name: "Ripe avocados", amount: "3 large", essential: true },
  { name: "Fresh lime juice", amount: "2-3 tbsp", essential: true },
  { name: "Red onion", amount: "1/4 cup, finely diced", essential: false },
  { name: "Roma tomato", amount: "1 medium, diced", essential: false },
  { name: "Cilantro", amount: "2 tbsp, chopped", essential: false },
  { name: "Jalapeño", amount: "1 small, minced", essential: false },
  { name: "Garlic", amount: "1 clove, minced", essential: false },
  { name: "Sea salt", amount: "1/2 tsp", essential: true },
  { name: "Black pepper", amount: "1/4 tsp", essential: false },
];

const steps = [
  {
    title: "Prepare the avocados",
    description: "Cut avocados in half, remove pits, and scoop flesh into a large bowl.",
    tip: "Choose avocados that yield slightly to pressure but aren't mushy."
  },
  {
    title: "Mash to perfection",
    description: "Mash avocados with a fork, leaving some chunky texture for the best guac experience.",
    tip: "Don't over-mash - a slightly chunky texture is ideal!"
  },
  {
    title: "Add the magic",
    description: "Mix in lime juice and salt immediately to prevent browning and enhance flavor.",
    tip: "Fresh lime juice is key - it brightens the flavor and keeps the color vibrant."
  },
  {
    title: "Layer the flavors",
    description: "Gently fold in onion, tomato, cilantro, jalapeño, and garlic for the perfect flavor balance.",
    tip: "Taste as you go and adjust ingredients to your preference."
  },
  {
    title: "Rest and serve",
    description: "Let guacamole rest for 10 minutes to allow flavors to meld, then serve with your favorite chips.",
    tip: "Cover with plastic wrap pressed directly onto surface to prevent browning."
  }
];

export default function Index() {
  const [currentStep, setCurrentStep] = useState(0);
  const [favorites, setFavorites] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-guac-50 via-background to-guac-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-guac-600/20 to-guac-400/20 animate-pulse" />
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-guac-500/10 rounded-full border border-guac-300/30 glow-lime">
              <Sparkles className="w-4 h-4 text-guac-600" />
              <span className="text-sm font-medium text-guac-700">The Ultimate Recipe</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-guac-600 via-guac-500 to-guac-400 bg-clip-text text-transparent text-glow">
              Glowing Guacamole
            </h1>
            
            <p className="text-xl md:text-2xl text-guac-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Create the perfect, restaurant-quality guacamole that glows with fresh flavors and brings people together
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2 bg-guac-200/50 text-guac-800 border-guac-300">
                <Clock className="w-4 h-4 mr-2" />
                15 minutes
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-guac-200/50 text-guac-800 border-guac-300">
                <Users className="w-4 h-4 mr-2" />
                Serves 4-6
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-guac-200/50 text-guac-800 border-guac-300">
                <ChefHat className="w-4 h-4 mr-2" />
                Easy
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-guac-200/50 text-guac-800 border-guac-300">
                <Star className="w-4 h-4 mr-2 fill-current" />
                5/5 Stars
              </Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-guac-600 hover:bg-guac-700 glow transition-all duration-300 transform hover:scale-105"
              >
                <Timer className="w-5 h-5 mr-2" />
                Start Cooking
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-guac-400 text-guac-700 hover:bg-guac-50 transition-all duration-300"
                onClick={() => setFavorites(!favorites)}
              >
                <Heart className={`w-5 h-5 mr-2 ${favorites ? 'fill-current text-red-500' : ''}`} />
                {favorites ? 'Saved!' : 'Save Recipe'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Ingredients Section */}
          <Card className="border-guac-300/30 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl text-guac-800 flex items-center justify-center gap-3">
                <ChefHat className="w-8 h-8 text-guac-600" />
                Fresh Ingredients
              </CardTitle>
              <CardDescription className="text-lg text-guac-600">
                Quality ingredients make all the difference
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {ingredients.map((ingredient, index) => (
                <div 
                  key={index}
                  className={`flex justify-between items-center p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                    ingredient.essential 
                      ? 'bg-guac-100/80 border border-guac-300/50 glow-lime' 
                      : 'bg-guac-50/50 border border-guac-200/50'
                  }`}
                >
                  <span className="font-medium text-guac-800">{ingredient.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-guac-600">{ingredient.amount}</span>
                    {ingredient.essential && (
                      <Badge variant="secondary" className="bg-guac-500 text-white text-xs">
                        Essential
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Instructions Section */}
          <Card className="border-guac-300/30 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl text-guac-800 flex items-center justify-center gap-3">
                <Sparkles className="w-8 h-8 text-guac-600" />
                Step-by-Step Guide
              </CardTitle>
              <CardDescription className="text-lg text-guac-600">
                Follow these steps for perfect guacamole
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-500 cursor-pointer ${
                    currentStep === index
                      ? 'bg-guac-100/80 border-guac-400 glow transform scale-[1.02]'
                      : 'bg-guac-50/50 border-guac-200/50 hover:bg-guac-100/50'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      currentStep === index
                        ? 'bg-guac-600 text-white pulse-glow'
                        : 'bg-guac-300 text-guac-700'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-guac-800 mb-2">{step.title}</h3>
                      <p className="text-guac-600 mb-3">{step.description}</p>
                      {currentStep === index && (
                        <div className="bg-guac-200/50 p-3 rounded-lg border-l-4 border-guac-500 animate-in slide-in-from-top-2 duration-300">
                          <p className="text-sm text-guac-700 font-medium">💡 Pro Tip: {step.tip}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-16 border-guac-300/30 shadow-xl bg-gradient-to-r from-guac-50/80 to-guac-100/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-guac-800 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-guac-600 fill-current" />
              Pro Tips for Perfect Guacamole
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-card/60 rounded-lg border border-guac-200/50 hover:border-guac-300/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-guac-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-lime">
                  <span className="text-2xl">🥑</span>
                </div>
                <h3 className="font-semibold text-guac-800 mb-2">Choose Ripe Avocados</h3>
                <p className="text-sm text-guac-600">They should yield to gentle pressure but not be mushy</p>
              </div>
              
              <div className="text-center p-6 bg-card/60 rounded-lg border border-guac-200/50 hover:border-guac-300/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-guac-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-lime">
                  <span className="text-2xl">🍋</span>
                </div>
                <h3 className="font-semibold text-guac-800 mb-2">Fresh Lime is Key</h3>
                <p className="text-sm text-guac-600">Always use fresh lime juice to prevent browning and add zing</p>
              </div>
              
              <div className="text-center p-6 bg-card/60 rounded-lg border border-guac-200/50 hover:border-guac-300/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-guac-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-lime">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="font-semibold text-guac-800 mb-2">Serve Fresh</h3>
                <p className="text-sm text-guac-600">Guacamole is best enjoyed within a few hours of making</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
