
import { Button } from "../ui/button";
import AnimatedElement from "../ui/AnimatedElement";
import { ChevronDown, ExternalLink } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <p className="text-pharma-600 font-medium mb-4">Pharmaceutical Professional</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair mb-2">
                Shashank <span className="text-gradient">Pandey</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-4 font-playfair">
                Pharmacist, B.Pharmacy
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
                Dedicated pharmaceutical professional with expertise in medication management, patient counseling, and healthcare solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  onClick={scrollToContact}
                  className="group bg-gradient-to-r from-pharma-600 to-teal-500 text-white hover:-translate-y-1"
                >
                  Contact Me
                  <ExternalLink className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  onClick={scrollToAbout}
                  className="border-2 border-pharma-500 text-pharma-700 hover:bg-pharma-50 hover:-translate-y-1"
                >
                  View More
                </Button>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-left" delay={300}>
            <div className="relative flex justify-center lg:justify-start">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-xl relative">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgr2h3tSEl6i8hWYbGuaFP3O0QcwnySafS5Go7kDF3pi327nFK2p13DHci4RmAsMyZqU25PMsaMrpjGYF-2S4p8jGcO7XzVxn6gNp_fATgk9iZXtfmh4mOBahCQ_G6CmMIsdLu9JmoZFW-czRHE_cXstcoyM770nYiOQOoQvY5TKiJPvnq2AqnwtqqM3IpX/s640/me.jpg" 
                  alt="Shashank Mohan Pandey" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pharma-600/90 to-teal-500/90 opacity-30"></div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;
