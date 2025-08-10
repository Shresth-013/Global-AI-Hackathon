import { Button } from "@/components/ui/button";
import { Mic, ArrowLeft, Circle, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import yogaWarriorPose from "@/assets/yoga-warrior-pose.jpg";

const Camera = () => {
  return (
    <div className="min-h-screen relative bg-gray-900 overflow-hidden">
      {/* Enhanced Background Image with overlay effects */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${yogaWarriorPose})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-zen-purple/10 to-zen-blue/20" />
      </div>

      {/* Enhanced Skeleton Overlay with glowing effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <svg 
            className="w-80 h-96 drop-shadow-2xl" 
            viewBox="0 0 200 300" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Glowing background for skeleton */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Body outline with enhanced green lines and joints */}
            {/* Head with glow */}
            <circle cx="100" cy="30" r="8" stroke="#10b981" strokeWidth="3" fill="none" filter="url(#glow)" />
            
            {/* Spine with gradient effect */}
            <line x1="100" y1="38" x2="100" y2="120" stroke="#10b981" strokeWidth="3" filter="url(#glow)" />
            
            {/* Left arm with enhanced styling */}
            <line x1="100" y1="60" x2="70" y2="50" stroke="#10b981" strokeWidth="3" filter="url(#glow)" />
            <line x1="70" y1="50" x2="40" y2="55" stroke="#10b981" strokeWidth="3" filter="url(#glow)" />
            <circle cx="70" cy="50" r="4" fill="#10b981" className="animate-pulse" />
            <circle cx="40" cy="55" r="4" fill="#10b981" className="animate-pulse" />
            
            {/* Right arm with enhanced styling */}
            <line x1="100" y1="60" x2="130" y2="50" stroke="#10b981" strokeWidth="3" filter="url(#glow)" />
            <line x1="130" y1="50" x2="160" y2="55" stroke="#10b981" strokeWidth="3" filter="url(#glow)" />
            <circle cx="130" cy="50" r="4" fill="#10b981" className="animate-pulse" />
            <circle cx="160" cy="55" r="4" fill="#10b981" className="animate-pulse" />
            
            {/* Hips */}
            <line x1="85" y1="120" x2="115" y2="120" stroke="#10b981" strokeWidth="3" filter="url(#glow)" />
            
            {/* Left leg */}
            <line x1="90" y1="120" x2="80" y2="180" stroke="#10b981" strokeWidth="3" filter="url(#glow)" />
            <line x1="80" y1="180" x2="75" y2="220" stroke="#10b981" strokeWidth="3" filter="url(#glow)" />
            <circle cx="80" cy="180" r="4" fill="#10b981" className="animate-pulse" />
            <circle cx="75" cy="220" r="4" fill="#10b981" className="animate-pulse" />
            
            {/* Right leg */}
            <line x1="110" y1="120" x2="130" y2="180" stroke="#10b981" strokeWidth="3" filter="url(#glow)" />
            <line x1="130" y1="180" x2="140" y2="220" stroke="#10b981" strokeWidth="3" filter="url(#glow)" />
            <circle cx="130" cy="180" r="4" fill="#10b981" className="animate-pulse" />
            <circle cx="140" cy="220" r="4" fill="#10b981" className="animate-pulse" />
            
            {/* Enhanced joint circles */}
            <circle cx="100" cy="60" r="5" fill="#10b981" className="animate-pulse" /> {/* Shoulders */}
            <circle cx="90" cy="120" r="4" fill="#10b981" className="animate-pulse" /> {/* Left hip */}
            <circle cx="110" cy="120" r="4" fill="#10b981" className="animate-pulse" /> {/* Right hip */}
          </svg>
          
          {/* Additional glowing effect around skeleton */}
          <div className="absolute inset-0 bg-gradient-radial from-zen-success/20 via-transparent to-transparent rounded-full blur-xl" />
        </div>
      </div>

      {/* Enhanced Top Navigation */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
        <Link to="/">
          <Button 
            variant="ghost" 
            size="icon"
            className="w-12 h-12 bg-black/20 hover:bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl text-white shadow-zen transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </Link>
        
        {/* Enhanced Voice Icon with status indicator */}
        <div className="relative">
          <div className="w-14 h-14 bg-zen-success/20 rounded-2xl flex items-center justify-center backdrop-blur-lg border border-zen-success/30 animate-pulse-glow shadow-glow">
            <Mic className="w-7 h-7 text-zen-success" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-zen-success rounded-full border-2 border-white animate-pulse" />
        </div>
      </div>

      {/* Status indicators */}
      <div className="absolute top-24 left-6 right-6 z-10">
        <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <Circle className="w-3 h-3 fill-zen-success text-zen-success animate-pulse" />
              <span className="text-sm font-medium">Pose Detection Active</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-zen-blue" />
              <span className="text-xs text-white/70">AI Analyzing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Action */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center px-6 z-10">
        <Link to="/feedback" className="w-full max-w-sm">
          <Button 
            className="w-full h-14 bg-gradient-zen hover:bg-gradient-zen-reverse backdrop-blur-lg border border-white/30 rounded-3xl text-white font-display font-semibold text-lg shadow-zen-lg hover:shadow-glow transition-all duration-500 hover:scale-105"
          >
            Continue to Feedback
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Camera;