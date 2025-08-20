import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft, Sparkles } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
  comingSoon?: boolean;
}

export default function Placeholder({ 
  title, 
  description, 
  comingSoon = true 
}: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-guac-50 via-background to-guac-100 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-guac-300/30 shadow-xl bg-card/80 backdrop-blur-sm text-center">
          <CardHeader className="pb-6">
            <div className="w-20 h-20 bg-guac-500/20 rounded-full flex items-center justify-center mx-auto mb-6 glow-lime">
              <Construction className="w-10 h-10 text-guac-600" />
            </div>
            
            <CardTitle className="text-3xl text-guac-800 mb-2">{title}</CardTitle>
            <CardDescription className="text-lg text-guac-600">
              {description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {comingSoon && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-guac-500/10 rounded-full border border-guac-300/30">
                <Sparkles className="w-4 h-4 text-guac-600" />
                <span className="text-sm font-medium text-guac-700">Coming Soon</span>
              </div>
            )}
            
            <p className="text-guac-600 max-w-md mx-auto">
              We're working hard to bring you amazing content. In the meantime, 
              feel free to explore our other sections or continue crafting the perfect guacamole!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-guac-600 hover:bg-guac-700 glow"
                onClick={() => window.location.href = '/'}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-guac-400 text-guac-700 hover:bg-guac-50"
                onClick={() => window.location.href = '/recipes'}
              >
                View All Recipes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
