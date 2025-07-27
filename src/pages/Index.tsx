import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-sans bg-background text-foreground antialiased">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Features />
        <Achievements />
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;
