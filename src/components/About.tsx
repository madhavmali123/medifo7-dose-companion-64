import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, AlertCircle, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At MediFor7, we understand the challenges of medication adherence—missed doses, complex schedules, 
            and the risk of error. Inspired by real-life struggles of elderly relatives and hospital care routines, 
            we created an innovative combination of smart hardware and a user-friendly mobile app to make 
            medication management seamless and worry-free.
          </p>
        </div>

        <div className="text-center mb-12">
          <blockquote className="text-2xl lg:text-3xl font-semibold text-primary italic">
            "Our mission is to improve lives through intelligent medication management."
          </blockquote>
        </div>

        {/* Problem & Solution Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group hover:shadow-card transition-all duration-300 border-l-4 border-l-primary">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Missed Doses</h3>
              <p className="text-sm text-muted-foreground">
                Traditional pill organizers can't remind you when to take medication
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-all duration-300 border-l-4 border-l-secondary">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Complex Schedules</h3>
              <p className="text-sm text-muted-foreground">
                Managing multiple medications with different timings is overwhelming
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-all duration-300 border-l-4 border-l-primary">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Caregiver Burden</h3>
              <p className="text-sm text-muted-foreground">
                Family members worry about their loved ones taking medication correctly
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-all duration-300 border-l-4 border-l-secondary">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Healthcare Costs</h3>
              <p className="text-sm text-muted-foreground">
                Poor medication adherence leads to hospital readmissions and complications
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose MediFor7 */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Why Choose MediFor7?</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">For the Elderly</h4>
                <p className="text-muted-foreground">
                  Friendly reminders and automation make care simpler for seniors and their families.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">For Hospitals & Clinics</h4>
                <p className="text-muted-foreground">
                  Boosts staff efficiency and patient safety with automated medication management.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">For Busy Professionals</h4>
                <p className="text-muted-foreground">
                  Never forget your dose in the rush of daily life with smart reminders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;