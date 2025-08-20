import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-guac-50 via-background to-guac-100 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-guac-300/30 shadow-xl bg-card/80 backdrop-blur-sm text-center">
          <CardHeader className="pb-6">
            <div className="text-8xl mb-6">🥑💔</div>
            
            <CardTitle className="text-4xl text-guac-800 mb-2">404 - Page Not Found</CardTitle>
            <CardDescription className="text-lg text-guac-600">
              Oops! This page seems to have gone as missing as the perfect avocado at the store.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-guac-500/10 rounded-full border border-guac-300/30">
              <Sparkles className="w-4 h-4 text-guac-600" />
              <span className="text-sm font-medium text-guac-700">Don't worry, the guacamole is still fresh!</span>
            </div>
            
            <p className="text-guac-600 max-w-md mx-auto">
              The page you're looking for doesn't exist, but we have plenty of delicious 
              guacamole recipes waiting for you on our homepage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-guac-600 hover:bg-guac-700 glow"
                onClick={() => window.location.href = '/'}
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-guac-400 text-guac-700 hover:bg-guac-50"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
