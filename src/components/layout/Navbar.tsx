
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button"; 

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Strengths", href: "#strengths" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  // Handle smooth scrolling for both desktop and mobile
  const scrollToSection = (href: string) => {
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ease-out ${
        isScrolled 
          ? "py-2 fluid-glass shadow-2xl" 
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl md:text-2xl font-playfair font-bold text-black relative z-50">
            Shashank <span className="text-gradient">Pandey</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`font-poppins text-gray-800 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-black after:transition-all after:duration-300 ${
                      activeSection === link.href.substring(1) ? "after:w-full text-black font-medium" : ""
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation using shadcn Sheet component */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-800 focus:outline-none focus:ring-0 p-0 w-12 h-12 flex items-center justify-center"
                  aria-label="Open menu"
                >
                  <div className="hamburger w-full h-full flex items-center justify-center">
                    <input 
                      type="checkbox" 
                      checked={open} 
                      onChange={() => setOpen(!open)} 
                      className="absolute w-12 h-12 opacity-0 cursor-pointer z-50"
                    />
                    <svg viewBox="0 0 32 32" className="w-7 h-7">
                      <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                      <path className="line" d="M7 16 27 16"></path>
                    </svg>
                  </div>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-0 bg-white/95 backdrop-blur-lg">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b p-4">
                    <a href="#home" className="text-xl font-playfair font-bold text-black">
                      Shashank <span className="text-gradient">Pandey</span>
                    </a>
                  </div>
                  <nav className="flex-grow pt-6 px-4">
                    <ul className="space-y-6">
                      {navLinks.map((link, index) => (
                        <li 
                          key={link.name} 
                          style={{ 
                            animationDelay: `${index * 50}ms`,
                            opacity: 0,
                            animation: open ? 'slideInRight 0.3s forwards' : 'none'
                          }}
                          className="transform transition-all duration-300"
                        >
                          <a
                            href={link.href}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(link.href);
                            }}
                            className={`font-poppins text-xl font-medium block relative overflow-hidden group py-2 ${
                              activeSection === link.href.substring(1) ? "text-black" : "text-gray-800"
                            }`}
                          >
                            <span className="relative z-10 group-hover:text-black transition-colors">
                              {link.name}
                            </span>
                            <span 
                              className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                                activeSection === link.href.substring(1) ? "scale-x-100" : ""
                              }`}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="p-4 mt-auto">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("#contact");
                      }}
                      className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-full w-full block text-center transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Get in touch
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <style>
        {`
        .hamburger {
          cursor: pointer;
          position: relative;
        }
        
        .hamburger input {
          position: absolute;
          top: -5px;
          left: -5px;
          width: 100%;
          height: 100%;
          padding: 10px;
          cursor: pointer;
        }
        
        .hamburger svg {
          height: 2em;
          transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .line {
          fill: none;
          stroke: #000;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 3;
          transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .line-top-bottom {
          stroke-dasharray: 12 63;
        }
        
        .hamburger input:checked + svg {
          transform: rotate(-45deg);
        }
        
        .hamburger input:checked + svg .line-top-bottom {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32.42;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        `}
      </style>
    </header>
  );
};

export default Navbar;
