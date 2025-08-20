import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft, Music, Badge } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
  comingSoon?: boolean;
}

export default function Placeholder({
  title,
  description,
  comingSoon = true,
}: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-music-50 via-background to-music-100 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-music-300/30 shadow-xl bg-card/80 backdrop-blur-sm text-center">
          <CardHeader className="pb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-emotion-purple to-emotion-blue rounded-full flex items-center justify-center mx-auto mb-6 glow">
              <Construction className="w-10 h-10 text-white" />
            </div>

            <CardTitle className="text-3xl text-music-800 mb-2">
              {title}
            </CardTitle>
            <CardDescription className="text-lg text-music-600">
              {description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {comingSoon && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emotion-purple/10 rounded-full border border-emotion-purple/30">
                <Music className="w-4 h-4 text-emotion-purple" />
                <span className="text-sm font-medium text-music-700">
                  Coming Soon
                </span>
              </div>
            )}

            <p className="text-music-600 max-w-md mx-auto">
              We're building something incredible for India's music ecosystem.
              Stay tuned as we revolutionize how music is discovered, created,
              and experienced!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emotion-purple to-emotion-blue glow"
                onClick={() => (window.location.href = "/")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-music-400 text-music-700 hover:bg-music-50"
                onClick={() => (window.location.href = "/artists")}
              >
                <Music className="w-4 h-4 mr-2" />
                For Artists
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
