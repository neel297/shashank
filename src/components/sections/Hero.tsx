
import { Button } from "../ui/button";
import AnimatedElement from "../ui/AnimatedElement";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Stats on left side */}
      <div className="absolute left-10 lg:left-16 top-1/2 transform -translate-y-1/2 hidden md:block">
        <div className="writing-vertical text-gray-500 font-light tracking-wider uppercase">
          Pharmaceutical Professional
        </div>
      </div>

      {/* Stats numbers */}
      <div className="absolute left-16 top-1/3 transform -translate-y-1/2 hidden lg:flex flex-col gap-10">
        <div className="text-left">
          <div className="text-3xl font-playfair font-bold">+5</div>
          <div className="text-xs text-gray-500">Years Experience</div>
        </div>
        <div className="text-left">
          <div className="text-3xl font-playfair font-bold">+20</div>
          <div className="text-xs text-gray-500">Projects completed</div>
        </div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 pt-20 relative z-10">
        <AnimatedElement animation="fade-right">
          <div className="max-w-xl mx-auto lg:mx-0 flex flex-col justify-center lg:pl-20">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-playfair font-bold mb-2 tracking-tighter">
              Hello
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-light">
              — It's Shashank Pandey, a Pharmacist & B.Pharmacy graduate
            </p>
            <p className="text-lg text-gray-700 mb-10 max-w-md">
              Dedicated pharmaceutical professional with expertise in medication management, patient counseling, and healthcare solutions.
            </p>
            
            <Button
              onClick={scrollToContact}
              className="self-start bg-black text-white hover:bg-gray-800 rounded-full px-8"
            >
              Get in touch
            </Button>
          </div>
        </AnimatedElement>

        <AnimatedElement 
          animation="fade-up" 
          className={`relative lg:h-[80vh] flex items-center justify-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="relative w-full h-full">
            {/* Profile image with enhanced smoky bottom effect */}
            <div className="relative h-full">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5KJ-gMu8kvcT__OaeVQzumdtrnYyF2Og9Q0U2FKn9dxCCJ22E_w5Hq8RBKDLEiP5StpX6GSSpIuz3-B73Rsk5p87Wrd7lArGOEF1iqnVcxfNJGU5LmVw70IzXw_w4Ykcb6ufdX4JJqbrR1j3dgZGUFkguZhmx5S-arjzHA7yUxE42H8YyBVdyECJZae3U/s800/Mauve%20Dark%20Professional%20Twitter%20Profile%20Picture_20250515_234455_0000.png" 
                alt="Shashank Mohan Pandey" 
                className="w-full h-full object-contain relative z-10"
                onLoad={() => setIsLoaded(true)}
              />
              {/* Reduced smoky gradient effect for smoother merging with less image coverage */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-white via-white/80 to-transparent z-20"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </AnimatedElement>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center" onClick={scrollDown}>
        <span className="text-sm text-gray-500 mb-2">Scroll down</span>
        <ChevronDown size={20} className="text-gray-500 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
