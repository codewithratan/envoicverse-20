import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Music } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-music-50 via-background to-music-100 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-music-300/30 shadow-xl bg-card/80 backdrop-blur-sm text-center">
          <CardHeader className="pb-6">
            <div className="text-8xl mb-6">🎵💔</div>
            
            <CardTitle className="text-4xl text-music-800 mb-2">404 - Beat Not Found</CardTitle>
            <CardDescription className="text-lg text-music-600">
              Oops! This page seems to have gone off-key. The rhythm you're looking for doesn't exist in our playlist.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emotion-purple/10 rounded-full border border-emotion-purple/30">
              <Music className="w-4 h-4 text-emotion-purple" />
              <span className="text-sm font-medium text-music-700">Don't worry, the music never stops!</span>
            </div>
            
            <p className="text-music-600 max-w-md mx-auto">
              The page you're looking for doesn't exist, but we have an amazing emotion-driven 
              music platform waiting to discover your perfect soundtrack.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emotion-purple to-emotion-blue glow"
                onClick={() => window.location.href = '/'}
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-music-400 text-music-700 hover:bg-music-50"
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
