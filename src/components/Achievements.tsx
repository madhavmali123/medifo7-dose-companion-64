import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, Shield, Star, Zap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Winner - i2i Business Model Competition",
      description: "1st Prize in the Entrepreneurship sector, COEP Technological University, Pune.",
      icon: Trophy,
      badge: "Winner",
      color: "bg-yellow-500"
    },
    {
      title: "DST NIDHI EIR Program Graduate", 
      description: "Recognized by COEP's Bhau Institute for impactful innovation.",
      icon: Award,
      badge: "Graduate",
      color: "bg-blue-500"
    },
    {
      title: "Startup India Seed Fund Recipient",
      description: "Government-supported grant for technology-driven healthcare innovation.",
      icon: Zap,
      badge: "Funded",
      color: "bg-green-500"
    },
    {
      title: "4 Design Patents Granted (India)",
      description: "Protecting our unique hardware and design innovations.",
      icon: Shield,
      badge: "Patented",
      color: "bg-purple-500"
    }
  ];

  const sponsors = [
    "Investor 1", "Investor 3", "Investor 4", "Investor 5",
    "Investor 6", "Investor 7", "Investor 8", "Investor 9", "Investor 10"
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Our Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and awards that validate our commitment to healthcare innovation.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <Badge className="bg-gradient-primary text-white rounded-tl-none rounded-br-none">
                  {achievement.badge}
                </Badge>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg leading-tight">{achievement.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center group hover:shadow-card transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">1600+</h3>
              <p className="text-muted-foreground">Trusted Users</p>
              <p className="text-sm text-muted-foreground mt-2">
                From individuals to institutions, our users love the convenience and reliability of MediFor7.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-card transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">4</h3>
              <p className="text-muted-foreground">Design Patents</p>
              <p className="text-sm text-muted-foreground mt-2">
                Protecting our unique hardware and design innovations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-card transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Multiple</h3>
              <p className="text-muted-foreground">Awards Won</p>
              <p className="text-sm text-muted-foreground mt-2">
                Recognized for innovation and entrepreneurship excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sponsors */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Sponsored & Supported By</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.map((sponsor, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm hover:bg-accent transition-colors">
                {sponsor}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;