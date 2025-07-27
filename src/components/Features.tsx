import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FreeTrialModal from "@/components/FreeTrialModal";

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
  Clock,
  Syringe
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
              title: "Load Medicines In The Device",
              description: "Organize Medications Into Dedicated Containers.",
              icon: Pill,
              color: "bg-primary"
            },
            {
              step: "2", 
              title: "Set Schedules Through The App",
              description: "Use The Mobile App To Program Alerts And Reminders.",
              icon: Smartphone,
              color: "bg-secondary"
            },
            {
              step: "3",
              title: "Get Alerts On Time", 
              description: "LED Indicators And Voice Alerts Notify You When It’s Time To Take Your Medication.",
              icon: Bell,
              color: "bg-primary"
            },
            {
              step: "4",
              title: "Track Usage",
              description: "Monitor Medicine Counts And Refills Conveniently Through The App.",
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

{/* Ultra-Compact Device Features */}
<div className="mb-10">
  <h3 className="text-xl font-bold text-center mb-6">
    <span className="bg-gradient-primary bg-clip-text text-transparent">Key Features</span>
  </h3>
  
  <div className="grid lg:grid-cols-2 gap-4">
  <div className="grid grid-cols-2 gap-3">
    {/* Card 1 */}
    <Card className="group hover:shadow-card transition-all duration-300 p-3 text-sm flex flex-col items-center text-center">
      <CardHeader className="pb-0 px-0">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center">
            <CheckCircle className="w-3 h-3 text-white" />
          </div>
          <CardTitle className="text-sm">28 Weekly Containers</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-0 pt-1">
        <p className="text-muted-foreground text-xs">4 doses/day for a week</p>
      </CardContent>
    </Card>

    {/* Card 2 */}
    <Card className="group hover:shadow-card transition-all duration-300 p-3 text-sm flex flex-col items-center text-center">
      <CardHeader className="pb-0 px-0">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
            <Droplets className="w-3 h-3 text-white" />
          </div>
          <CardTitle className="text-sm">4 Special Compartments</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-0 pt-1">
        <p className="text-muted-foreground text-xs">For insulin/liquid medicines</p>
      </CardContent>
    </Card>

    {/* Card 3 */}
    <Card className="group hover:shadow-card transition-all duration-300 p-3 text-sm flex flex-col items-center text-center">
      <CardHeader className="pb-0 px-0">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center">
            <Lightbulb className="w-3 h-3 text-white" />
          </div>
          <CardTitle className="text-sm">LED Liquid Alerts</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-0 pt-1">
        <p className="text-muted-foreground text-xs">Timely consumption</p>
      </CardContent>
    </Card>

    {/* Card 4 */}
    <Card className="group hover:shadow-card transition-all duration-300 p-3 text-sm flex flex-col items-center text-center">
      <CardHeader className="pb-0 px-0">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-6 bg-gradient-primary rounded-md flex items-center justify-center">
            <Syringe className="w-3 h-3 text-white" />
          </div>
          <CardTitle className="text-sm">Insulin Alerts</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-0 pt-1">
        <p className="text-muted-foreground text-xs">For diabetes patients</p>
      </CardContent>
    </Card>

    {/* Card 5 - spans both columns */}
    <div className="col-span-2">
      <Card className="group hover:shadow-card transition-all duration-300 p-3 text-sm flex flex-col items-center text-center">
        <CardHeader className="pb-0 px-0">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-6 bg-secondary rounded-md flex items-center justify-center">
              <Volume2 className="w-3 h-3 text-white" />
            </div>
            <CardTitle className="text-sm">Voice + LED Alerts</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="px-0 pt-1">
          <p className="text-muted-foreground text-xs">Clear dose reminders</p>
        </CardContent>
      </Card>
    </div>
  </div>

  {/* Right Panel - Smart Integration */}
  <div className="bg-gradient-subtle rounded-lg p-4 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
        <Zap className="w-6 h-6 text-white" />
      </div>
      <h4 className="text-3xl font-bold mb-2">Smart Integration</h4>
      <p className="text-muted-foreground text-xl mb-3">
        Connects with smartphone for medication control
      </p>
      <Badge variant="secondary" className="bg-gradient-primary text-white text-xl px-2 py-1">
        <Zap className="w-2.5 h-2.5 mr-1" />
        Bluetooth
      </Badge>
    </div>
  </div>
</div>

</div>

{/* App Features - Compact */}
{/* App Features - Compact with Equal Height Cards */}
<div>
  <h3 className="text-3xl font-bold text-center mb-8">
    <span className="bg-gradient-primary bg-clip-text text-transparent">Features of the Mobile App</span>
  </h3>
  
  <div className="grid lg:grid-cols-2 gap-8 items-center">
    <div className="grid grid-cols-2 auto-rows-fr gap-4"> {/* Removed space-y-4 since we're using gap */}
      {/* Card 1 */}
      <Card className="group hover:shadow-card transition-all duration-300 h-full flex flex-col">
        <div className="p-4 h-full flex flex-col">
          <CardHeader className="pb-2 px-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Smart Reminders</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-0 flex-grow flex items-start">
            <p className="text-muted-foreground">Sync schedules with the device in seconds.</p>
          </CardContent>
        </div>
      </Card>

      {/* Card 2 */}
      <Card className="group hover:shadow-card transition-all duration-300 h-full flex flex-col">
        <div className="p-4 h-full flex flex-col">
          <CardHeader className="pb-2 px-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Track Medication Count</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-0 flex-grow flex items-start">
            <p className="text-muted-foreground">Automatic updates when doses are taken.</p>
          </CardContent>
        </div>
      </Card>

      {/* Card 3 */}
      <Card className="group hover:shadow-card transition-all duration-300 h-full flex flex-col">
        <div className="p-4 h-full flex flex-col">
          <CardHeader className="pb-2 px-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Store Prescriptions Digitally</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-0 flex-grow flex items-start">
            <p className="text-muted-foreground">Digital storage for easy access to medicine details.</p>
          </CardContent>
        </div>
      </Card>

      {/* Card 4 */}
      <Card className="group hover:shadow-card transition-all duration-300 h-full flex flex-col">
        <div className="p-4 h-full flex flex-col">
          <CardHeader className="pb-2 px-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-lg">Appointment Reminders</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-0 flex-grow flex items-start">
            <p className="text-muted-foreground">Never miss your next doctor visit.</p>
          </CardContent>
        </div>
      </Card>
    </div>

    <div className="text-center">
      <img 
        src={appImage} 
        alt="MediFor7 Mobile App Interface" 
        className="w-80 max-w-sm mx-auto rounded-xl shadow-glow hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
</div>
        

        {/* CTA */}
        <div className="text-center mt-16">
          <FreeTrialModal/>
        </div>
      </div>
    </section>
  );
};

export default Features;