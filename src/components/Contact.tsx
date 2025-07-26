import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Twitter, Linkedin, Instagram, Zap } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Get in Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your medication management? Contact our team today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="group hover:shadow-card transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Phone</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+91 72197 85868</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info.medifo7@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">Address</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  COEP's Bhau Institute, Near Boat Club, Shivajinagar, COEP Pune – 411005 MH
                </p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="group hover:shadow-card transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Connect With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Card className="group hover:shadow-glow transition-all duration-300 bg-gradient-hero text-white border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Try It Free</h3>
                <p className="mb-6 text-white/90">
                  Start your journey with a Free Trial of MediFor7 and discover the future of medication management.
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Get Started Today
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Company Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-primary">
                    Terms & Conditions
                  </Button>
                  <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Button>
                  <Button variant="ghost" className="justify-start p-0 h-auto text-muted-foreground hover:text-primary">
                    Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;