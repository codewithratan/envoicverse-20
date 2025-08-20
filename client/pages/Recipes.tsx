import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, ChefHat, ArrowRight, Sparkles } from "lucide-react";

const recipes = [
  {
    title: "Classic Guacamole",
    description:
      "The traditional recipe that started it all - simple, fresh, and absolutely delicious",
    time: "15 min",
    serves: "4-6",
    difficulty: "Easy",
    featured: true,
    image: "🥑",
    tags: ["Traditional", "Quick", "Vegetarian"],
  },
  {
    title: "Spicy Jalapeño Guac",
    description:
      "Turn up the heat with extra jalapeños and a hint of cayenne pepper",
    time: "20 min",
    serves: "4-6",
    difficulty: "Easy",
    featured: false,
    image: "🌶️",
    tags: ["Spicy", "Bold", "Vegetarian"],
  },
  {
    title: "Pomegranate Guacamole",
    description:
      "A festive twist with pomegranate seeds for extra crunch and sweetness",
    time: "25 min",
    serves: "4-6",
    difficulty: "Medium",
    featured: false,
    image: "💎",
    tags: ["Festive", "Sweet", "Crunchy"],
  },
  {
    title: "Bacon Guacamole",
    description:
      "Indulgent guacamole with crispy bacon bits for the ultimate comfort food",
    time: "30 min",
    serves: "4-6",
    difficulty: "Medium",
    featured: false,
    image: "🥓",
    tags: ["Indulgent", "Savory", "Comfort"],
  },
  {
    title: "Tropical Mango Guac",
    description:
      "Fresh mango chunks add tropical sweetness to this summer favorite",
    time: "20 min",
    serves: "4-6",
    difficulty: "Easy",
    featured: false,
    image: "🥭",
    tags: ["Tropical", "Sweet", "Summer"],
  },
  {
    title: "Roasted Corn Guacamole",
    description:
      "Smoky roasted corn kernels add texture and depth to classic guacamole",
    time: "35 min",
    serves: "4-6",
    difficulty: "Medium",
    featured: false,
    image: "🌽",
    tags: ["Smoky", "Textured", "Hearty"],
  },
];

export default function Recipes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-guac-50 via-background to-guac-100">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-guac-600/20 to-guac-400/20 animate-pulse" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-guac-500/10 rounded-full border border-guac-300/30 glow-lime">
              <Sparkles className="w-4 h-4 text-guac-600" />
              <span className="text-sm font-medium text-guac-700">
                Recipe Collection
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-guac-600 via-guac-500 to-guac-400 bg-clip-text text-transparent">
              All Guacamole Recipes
            </h1>

            <p className="text-lg md:text-xl text-guac-700 mb-8 max-w-2xl mx-auto">
              Explore our complete collection of guacamole recipes, from classic
              to creative variations
            </p>
          </div>
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {recipes.map((recipe, index) => (
            <Card
              key={index}
              className={`border-guac-300/30 shadow-xl bg-card/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                recipe.featured ? "ring-2 ring-guac-400 glow" : ""
              }`}
            >
              <CardHeader className="text-center pb-4">
                {recipe.featured && (
                  <Badge className="mb-3 bg-guac-500 text-white self-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <div className="text-6xl mb-4">{recipe.image}</div>
                <CardTitle className="text-xl text-guac-800">
                  {recipe.title}
                </CardTitle>
                <CardDescription className="text-guac-600">
                  {recipe.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge
                    variant="secondary"
                    className="bg-guac-200/50 text-guac-800 border-guac-300"
                  >
                    <Clock className="w-3 h-3 mr-1" />
                    {recipe.time}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-guac-200/50 text-guac-800 border-guac-300"
                  >
                    <Users className="w-3 h-3 mr-1" />
                    {recipe.serves}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-guac-200/50 text-guac-800 border-guac-300"
                  >
                    <ChefHat className="w-3 h-3 mr-1" />
                    {recipe.difficulty}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-1 justify-center">
                  {recipe.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="text-xs border-guac-400 text-guac-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  className="w-full bg-guac-600 hover:bg-guac-700 transition-all duration-300"
                  disabled={!recipe.featured}
                >
                  {recipe.featured ? (
                    <>
                      View Recipe
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    "Coming Soon"
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-guac-300/30 shadow-xl bg-gradient-to-r from-guac-50/80 to-guac-100/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-guac-800">
                Can't find what you're looking for?
              </CardTitle>
              <CardDescription className="text-guac-600">
                We're constantly adding new recipes to our collection. Check
                back soon for more delicious guacamole variations!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                size="lg"
                className="bg-guac-600 hover:bg-guac-700 glow"
                onClick={() => (window.location.href = "/")}
              >
                Back to Classic Recipe
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
