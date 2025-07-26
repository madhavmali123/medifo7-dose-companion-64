import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-bold text-xl">MediFor7</span>
          </div>
          <p className="text-white/80 mb-4">
            Your Personal Medication Manager - Making healthcare smarter, one dose at a time.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/60">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>for better health outcomes</span>
          </div>
          <div className="mt-4 text-sm text-white/60">
            © 2024 MediFor7. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;