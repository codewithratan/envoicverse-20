"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Music, Sparkles } from "lucide-react";

export default function ShootingStarsDemo() {
  return (
    <div className="h-screen w-full bg-black relative overflow-hidden">
      {/* Background with stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="stars absolute inset-0" />
      </div>

      {/* Header */}
      <div className="absolute top-8 left-8 z-20">
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 glow">
            <Music className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent">
          Shooting Stars Effect
        </h1>
        
        <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto mb-12">
          A mesmerizing background effect with customizable shooting stars traversing across the screen. 
          Perfect for creating immersive musical experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 glow"
            onClick={() => window.location.href = '/demo'}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            View More Effects
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-300 hover:bg-purple-900/20"
            onClick={() => window.location.href = '/'}
          >
            <Music className="w-5 h-5 mr-2" />
            Back to Platform
          </Button>
        </div>
      </div>

      {/* Multiple shooting star layers with purple theme */}
      <ShootingStars
        starColor="#9333EA"
        trailColor="#7C3AED"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#A855F7"
        trailColor="#8B5CF6"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#C084FC"
        trailColor="#A78BFA"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />

      <style jsx>{`
        .stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #9333EA, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 40px 70px, #A855F7, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 50px 160px, #8B5CF6, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #C084FC, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 130px 80px, #A78BFA, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #7C3AED, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.6;
        }

        @keyframes twinkle {
          0% { opacity: 0.4; }
          50% { opacity: 0.8; }
          100% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
