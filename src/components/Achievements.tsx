import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, Shield, Star, Zap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Winner - i2i Business Model Competition",
      description:
        "We are thrilled to announce that MediFor7 won 1st prize in the Entrepreneurship sector at the Ignited Innovators of India (i2i) Business Model Competition, COEP Technological University, Pune. Our innovative solution simplifies medication management with smart hardware and software features.",
      icon: Trophy,
      badge: "Winner",
      color: "bg-yellow-500",
      image: "https://medifor7.com/assets/achv-2-896ee0a4.jpeg", // <-- Add your image path
    },
    {
      title: "DST NIDHI EIR Program Graduate",
      description:
        "We are proud to announce that MediFor7 has successfully completed the DST NIDHI EIR Scheme from COEPs Bhau Institute, Pune. This recognition strengthens our mission to revolutionize medication management for the elderly, hospital patients, and busy professionals across India.",
      icon: Award,
      badge: "Graduate",
      color: "bg-blue-500",
      image: "https://medifor7.com/assets/Nidhi%20EiR-b1ceecc4.jpeg",
    },
    {
      title: "Startup India Seed Fund Recipient",
      description:
        "We Are Thrilled To Announce That Our Startup, MediFor7, Has Successfully Secured The Prestigious Startup India Seed Fund Grant Through COEPs Bhau Institute, Pune. This Remarkable Milestone Reflects Our Commitment To Revolutionizing Medication Management For Elderly Individuals, Hospital Patients, And Busy Professionals Through Our Innovative Hardware And Software Solution.",
      icon: Zap,
      badge: "Funded",
      color: "bg-green-500",
      image: "https://medifor7.com/assets/achv-1-45a4293d.jpeg",
    },
    {
      title: "4 Design Patents Granted (India)",
      description:
        "MediFor7 is a revolutionary solution for medication adherence, proudly granted 4 design patents by the Indian government. With 28-dose containers, LED alerts, voice reminders, and a mobile app, it ensures seamless and reliable medication management.",
      icon: Shield,
      badge: "Patented",
      color: "bg-purple-500",
      image: "https://medifor7.com/assets/Patent-45ef27fe.jpeg",
    },
  ];

  const sponsors = [
    {
      name: "Investor 7",
      image: "https://medifor7.com/assets/investor-1-0225410f.jpeg",
    },
    {
      name: "Investor 6",
      image: "https://medifor7.com/assets/investor-3-55a2ee25.jpeg",
    },
    {
      name: "Investor 8",
      image: "https://medifor7.com/assets/investor-4-67b98d9d.jpeg",
    },
    {
      name: "Investor 4",
      image: "https://medifor7.com/assets/investor-5-ee7bac36.jpeg",
    },
    {
      name: "Investor 9",
      image: "https://medifor7.com/assets/investor-6-cc126096.jpeg",
    },
    {
      name: "Investor 1",
      image: "https://medifor7.com/assets/investor-7-7f5968c8.jpeg",
    },
    {
      name: "Investor 3",
      image: "https://medifor7.com/assets/investor-8-31291f84.jpeg",
    },
    {
      name: "Investor 10",
      image: "https://medifor7.com/assets/investor-9-2fcd6511.jpeg",
    },
    {
      name: "Investor 5",
      image: "https://medifor7.com/assets/investor-10-9000323a.jpeg",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Achievements
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and awards that validate our commitment to healthcare
            innovation.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 px-auto ">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 relative overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-0 right-0 z-10">
                <Badge className="bg-gradient-primary text-white rounded-tl-none rounded-br-none">
                  {achievement.badge}
                </Badge>
              </div>

              {/* images */}
              {/* images */}
              {achievement.image && (
                <div className="w-full overflow-hidden rounded bg-gradient-to-r from-blue-200 to-purple-200">
                  <img
                    src={achievement.image}
                    className="w-full max-h-80 object-contain border p-2 rounded-lg"
                  />
                </div>
              )}

              {/* Header with Icon and Title */}
              <CardHeader className="pb-2 px-4 pt-3">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <achievement.icon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-base text-lg leading-snug">
                    {achievement.title}
                  </CardTitle>
                </div>
              </CardHeader>

              {/* Description */}
              <CardContent className="px-4 pb-4 pt-1">
                <p className="text-lg text-muted-foreground">
                  {achievement.description}
                </p>
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
                From individuals to institutions, our users love the convenience
                and reliability of MediFor7.
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
<div className="text-center overflow-hidden">
  <h3 className="text-2xl font-bold mb-8">
    <span className="bg-gradient-primary bg-clip-text text-transparent">
      Sponsored & Supported By
    </span>
  </h3>
  <div className="relative w-full h-24 overflow-hidden">
    {/* Marquee Container */}
    <div className="absolute top-0 left-0 flex items-center h-full animate-marquee whitespace-nowrap">
      {/* Duplicate the sponsors array 3 times for seamless looping */}
      {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
        <div
          key={`sponsor-${index}`}
          className="inline-flex mx-8 w-32 h-20 items-center justify-center bg-white shadow rounded-md p-2 hover:scale-105 transition-transform flex-shrink-0"
        >
          <img
            src={sponsor.image}
            alt={sponsor.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default Achievements;
