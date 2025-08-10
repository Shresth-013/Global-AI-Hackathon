import { Button } from "@/components/ui/button";
import { Play, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-zen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-glow rounded-full animate-float opacity-20" />
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-glow rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-zen-glow/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="text-center space-y-10 max-w-sm w-full">
          {/* App Title with enhanced styling */}
          <div className="space-y-4">
            <div className="relative">
              <h1 className="text-6xl font-display font-bold text-white tracking-wide drop-shadow-lg">
                Zen<span className="text-zen-glow">AI</span>
              </h1>
              <div className="absolute -inset-2 bg-gradient-glow rounded-full blur-xl opacity-30" />
            </div>
            <p className="text-white/90 text-xl font-medium font-display tracking-wide">
              AI Yoga Coach
            </p>
            <p className="text-white/70 text-sm font-light leading-relaxed max-w-xs mx-auto">
              Experience personalized yoga guidance with advanced AI pose detection
            </p>
          </div>

          {/* Enhanced Yoga Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-28 h-28 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-lg border border-white/20 shadow-glow">
                <div className="relative">
                  <Heart className="w-12 h-12 text-white" />
                  <Sparkles className="w-6 h-6 text-zen-glow absolute -top-1 -right-1 animate-pulse" />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-glow rounded-full blur-2xl opacity-20 animate-pulse" />
            </div>
          </div>

          {/* Enhanced Start Session Button */}
          <div className="space-y-4">
            <Link to="/camera" className="block">
              <Button 
                size="lg" 
                className="w-full h-16 bg-white/95 text-zen-purple hover:bg-white hover:scale-105 rounded-3xl font-display font-bold text-xl shadow-zen-lg hover:shadow-glow transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-sm border border-white/50"
              >
                <div className="w-8 h-8 bg-zen-purple rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 fill-current text-white ml-0.5" />
                </div>
                Start Your Journey
              </Button>
            </Link>
            
            {/* Additional subtle call-to-action */}
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
              <div className="w-2 h-2 bg-zen-glow rounded-full animate-pulse" />
              <span className="font-light">Tap to begin mindful practice</span>
              <div className="w-2 h-2 bg-zen-glow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;