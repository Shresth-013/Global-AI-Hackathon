import { Button } from "@/components/ui/button";
import { Mic, ArrowLeft, RotateCcw, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import yogaWarriorPose from "@/assets/yoga-warrior-pose.jpg";

const Feedback = () => {
  return (
    <div className="min-h-screen relative bg-gray-900 overflow-hidden">
      {/* Enhanced Background Image with overlay effects */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${yogaWarriorPose})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-zen-purple/10 to-zen-blue/20" />
      </div>

      {/* Enhanced Skeleton Overlay with correction highlighting */}
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
              <filter id="warning-glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Body outline with green lines and highlighted correction areas */}
            {/* Head */}
            <circle cx="100" cy="30" r="8" stroke="#10b981" strokeWidth="3" fill="none" filter="url(#glow)" />
            
            {/* Spine */}
            <line x1="100" y1="38" x2="100" y2="120" stroke="#10b981" strokeWidth="3" filter="url(#glow)" />
            
            {/* Left arm - correct position */}
            <line x1="100" y1="60" x2="70" y2="50" stroke="#10b981" strokeWidth="3" filter="url(#glow)" />
            <line x1="70" y1="50" x2="40" y2="55" stroke="#10b981" strokeWidth="3" filter="url(#glow)" />
            <circle cx="70" cy="50" r="4" fill="#10b981" className="animate-pulse" />
            <circle cx="40" cy="55" r="4" fill="#10b981" className="animate-pulse" />
            
            {/* Right arm - needs correction - highlighted in warning color */}
            <line x1="100" y1="60" x2="130" y2="50" stroke="#f59e0b" strokeWidth="4" filter="url(#warning-glow)" className="animate-pulse" />
            <line x1="130" y1="50" x2="160" y2="55" stroke="#f59e0b" strokeWidth="4" filter="url(#warning-glow)" className="animate-pulse" />
            <circle cx="130" cy="50" r="6" fill="#f59e0b" className="animate-pulse" />
            <circle cx="160" cy="55" r="6" fill="#f59e0b" className="animate-pulse" />
            
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
            <circle cx="100" cy="60" r="5" fill="#10b981" className="animate-pulse" />
            <circle cx="90" cy="120" r="4" fill="#10b981" className="animate-pulse" />
            <circle cx="110" cy="120" r="4" fill="#10b981" className="animate-pulse" />
          </svg>
          
          {/* Correction indicator arrow */}
          <div className="absolute top-12 right-8">
            <div className="bg-amber-500/20 backdrop-blur-lg rounded-2xl p-2 border border-amber-500/30">
              <AlertTriangle className="w-6 h-6 text-amber-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Top Navigation */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
        <Link to="/camera">
          <Button 
            variant="ghost" 
            size="icon"
            className="w-12 h-12 bg-black/20 hover:bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl text-white shadow-zen transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </Link>
        
        {/* Enhanced Voice Icon with active state */}
        <div className="relative">
          <div className="w-14 h-14 bg-zen-success/20 rounded-2xl flex items-center justify-center backdrop-blur-lg border border-zen-success/30 animate-pulse-glow shadow-glow">
            <Mic className="w-7 h-7 text-zen-success" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-zen-success rounded-full border-2 border-white animate-pulse" />
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute top-24 left-6 right-6 z-10">
        <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center justify-between text-white mb-2">
            <span className="text-sm font-medium">Pose Analysis Complete</span>
            <CheckCircle className="w-5 h-5 text-zen-success" />
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-gradient-zen h-2 rounded-full w-3/4 transition-all duration-1000" />
          </div>
        </div>
      </div>

      {/* Enhanced Feedback Message */}
      <div className="absolute bottom-32 left-0 right-0 px-6 z-10">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 mx-auto max-w-sm shadow-zen-lg border border-white/50">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-gray-900 mb-1">Adjustment Needed</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Lower your right shoulder slightly to align with your left shoulder for better balance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Actions */}
      <div className="absolute bottom-4 left-0 right-0 flex gap-3 px-6 z-10">
        <Link to="/camera" className="flex-1">
          <Button 
            variant="outline"
            className="w-full h-14 bg-black/20 hover:bg-black/40 backdrop-blur-lg border border-white/30 rounded-3xl text-white font-display font-semibold hover:scale-105 transition-all duration-300"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
        </Link>
        <Link to="/" className="flex-1">
          <Button 
            className="w-full h-14 bg-gradient-zen hover:bg-gradient-zen-reverse rounded-3xl text-white font-display font-semibold shadow-zen-lg hover:shadow-glow transition-all duration-500 hover:scale-105"
          >
            Complete Session
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Feedback;