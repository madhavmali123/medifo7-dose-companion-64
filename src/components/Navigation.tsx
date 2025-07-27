import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

 return (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="w-20 h-20 -my-2">
            <img
              src="https://medifor7.com/assets/logo-white-c5290a0d.png"
              alt="MediFor7 Logo"
              className="w-full h-full object-contain"
            />
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('achievements')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Achievements
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="gradient" size="sm">
            <Phone className="w-4 h-4 mr-2" />
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-border bg-white/95 backdrop-blur-md">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('achievements')}
              className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <div className="px-4 pt-2">
              <Button variant="gradient" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  </nav>
);

};

export default Navigation;