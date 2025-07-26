import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Pill, 
  Smartphone, 
  Bell, 
  Calendar,
  FileText,
  BarChart3,
  Lightbulb,
  Droplets,
  Volume2,
  Zap,
  CheckCircle,
  Clock
} from "lucide-react";
import appImage from "@/assets/medifor7-app.jpg";

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        {/* How It Works */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, smart, and reliable - medication management made easy in just 4 steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              step: "1",
              title: "Load Medications",
              description: "Organize pills in dedicated containers with ease.",
              icon: Pill,
              color: "bg-primary"
            },
            {
              step: "2", 
              title: "Schedule via App",
              description: "Set alerts and medication times in just a few taps.",
              icon: Smartphone,
              color: "bg-secondary"
            },
            {
              step: "3",
              title: "Receive Smart Alerts", 
              description: "LED indicators and voice prompts notify you when it's time.",
              icon: Bell,
              color: "bg-primary"
            },
            {
              step: "4",
              title: "Track Everything",
              description: "Monitor doses, refills, and usage directly from the app.",
              icon: BarChart3,
              color: "bg-secondary"
            }
          ].map((item, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                Step {item.step}
              </div>
              <CardContent className="p-6 text-center pt-8">
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Device Features */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Key Features of Our Device</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="group hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">28 Weekly Medication Containers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Covers up to 4 doses a day for an entire week.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <Droplets className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">4 Special Purpose Compartments</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">For insulin, liquid medicines, or extra pills.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">LED Alerts for Liquid Medication & Insulin</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Designed especially for patients with diabetes and complex regimens.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <Volume2 className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">Voice Alerts + LED Indicators</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Ensures you never miss a dose, even in noisy environments.</p>
                </CardContent>
              </Card>
            </div>

            <div className="lg:pl-8">
              <div className="bg-gradient-subtle rounded-2xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Smart Integration</h4>
                  <p className="text-muted-foreground mb-6">
                    Our device seamlessly connects with your smartphone for complete medication management control.
                  </p>
                  <Badge variant="secondary" className="bg-gradient-primary text-white">
                    <Zap className="w-4 h-4 mr-1" />
                    Bluetooth Enabled
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Features */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Features of the Mobile App</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="group hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">Smart Reminders</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Sync schedules with the device in seconds.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">Track Medication Count</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Automatic updates when doses are taken.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">Store Prescriptions Digitally</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Easily access and share prescription details.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">Appointment Reminders</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Never miss your next doctor visit.</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <img 
                src={appImage} 
                alt="MediFor7 Mobile App Interface" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-glow hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            <Clock className="w-5 h-5 mr-2" />
            Try It Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;