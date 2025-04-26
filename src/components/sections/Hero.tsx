
import Button from "../ui/Button";
import AnimatedElement from "../ui/AnimatedElement";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-pharma-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="fade-right">
            <div className="text-center lg:text-left">
              <p className="text-pharma-600 font-medium mb-4">B.Pharmacy Professional</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6">
                Shashank <span className="text-gradient">Mohan Pandey</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
                Dedicated pharmaceutical professional with expertise in medicine management,
                patient care, and healthcare innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  onClick={scrollToAbout}
                  className="group"
                >
                  Explore My Profile
                  <ChevronDown className="ml-2 transition-transform group-hover:translate-y-1" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-left" delay={300}>
            <div className="relative">
              <div className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl relative">
                {/* Add profile image here */}
                <div className="absolute inset-0 bg-gradient-to-br from-pharma-600/90 to-teal-500/90 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-4xl font-playfair">
                    SP
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-6 left-6 w-20 h-20 rounded-lg border-4 border-white/20 backdrop-blur-sm"></div>
                <div className="absolute top-6 right-6 w-20 h-20 rounded-full border-4 border-white/20 backdrop-blur-sm"></div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;
