import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Smartphone } from "lucide-react";
import heroImage from "@/assets/medifor7-device.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero opacity-10"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">MediFor7</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Your Personal
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Medication Manager
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Smart, reliable, and affordable solution designed to simplify your medication journey. 
              Never miss a dose with our intelligent hardware and mobile app.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Try It Free
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5" />
                <span className="text-sm">1600+ Users</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="w-5 h-5" />
                <span className="text-sm">Award Winning</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm">4 Patents</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Device Image */}
          <div className="relative">
            <div className="relative group">
              <img 
                src={heroImage} 
                alt="MediFor7 Smart Medication Device" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-card group-hover:scale-105 transition-transform duration-300"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-card">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-card">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;