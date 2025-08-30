import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Upload, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${heroBackground})` 
      }}
    >
      {/* AI Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-hero opacity-40"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Team Branding */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-2">Hacktronics</h2>
          <p className="text-lg mb-2 text-yellow-200">
            "नए भारत की शुरुआत डिजिटल क्रांति से पशुपालकों के हित की बात"
          </p>
          <p className="text-sm opacity-90">
            Accurate Animal Type Classification with AI for India's Herds
          </p>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            AI-powered
            <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Animal Type Classification
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            Standardizing livestock evaluation under the Rashtriya Gokul Mission & BPA integration
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 min-w-[280px]"
            >
              <Upload className="w-5 h-5" />
              🚀 Demo the AI Model
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="pilot" 
              size="lg" 
              className="text-lg px-8 py-4 min-w-[280px]"
            >
              <Users className="w-5 h-5" />
              📩 Request a Pilot with Your District
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center animate-scale-in">
              <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
              <p className="text-white/90">Animals per day capacity</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center animate-scale-in" 
                  style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl font-bold text-white mb-2">95%</h3>
              <p className="text-white/90">Accuracy rate</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center animate-scale-in" 
                  style={{ animationDelay: '0.4s' }}>
              <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
              <p className="text-white/90">Offline-first operation</p>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;