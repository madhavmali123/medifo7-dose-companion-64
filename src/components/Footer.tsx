import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Rights */}
          <div className="space-y-4">
            <div className="w-40">
              <img
                src="https://medifor7.com/assets/logo-white-c5290a0d.png"
                alt="MediFor7 Logo"
                className="w-full h-auto"
              />
            </div>
          
            <p className="text-white/80">All Rights Reserved</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <div className="flex items-start gap-3 mt-4">
              <Phone className="w-5 h-5 mt-1 text-white/80" />
              <p className="text-white/80">+91 72197 85868</p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 text-white/80" />
              <p className="text-white/80">info.medifor7@gmail.com</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-white/80" />
              <p className="text-white/80">
                COEP's Bhau Institute, Near Boat Club,
                <br />
                Shivajinagar, COEP Pune – 411005 MH
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links</h3>
            <div className="flex flex-col space-y-3 mt-4">
              <a
                href="https://x.com/MediFor7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white flex items-center gap-2"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </a>
              <a
                href="https://linkedin.com/company/medifor7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://instagram.com/medifor7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <div className="flex flex-col space-y-2 mt-4">
              <a href="#" className="text-white/80 hover:text-white">
                Terms & Conditions
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                Support
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-white/60">
            ©2025 MediFor7. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
