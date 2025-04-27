
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "py-2 glass shadow-md backdrop-blur-md bg-white/80" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl md:text-2xl font-playfair font-bold text-pharma-800 relative z-50">
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
                    className={`text-gray-800 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-pharma-500 after:transition-all after:duration-300 ${
                      activeSection === link.href.substring(1) ? "after:w-full text-pharma-600 font-medium" : ""
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
                  className="text-gray-800 focus:outline-none focus:ring-0"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-0 bg-white/95 backdrop-blur-lg">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b p-4">
                    <a href="#home" className="text-xl font-playfair font-bold text-pharma-800">
                      Shashank <span className="text-gradient">Pandey</span>
                    </a>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-gray-800 focus:outline-none focus:ring-0"
                      onClick={() => setOpen(false)}
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </Button>
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
                            className={`text-xl font-medium block relative overflow-hidden group py-2 ${
                              activeSection === link.href.substring(1) ? "text-pharma-600" : "text-gray-800"
                            }`}
                          >
                            <span className="relative z-10 group-hover:text-pharma-600 transition-colors">
                              {link.name}
                            </span>
                            <span 
                              className={`absolute bottom-0 left-0 w-full h-[2px] bg-pharma-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
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
                      className="bg-gradient-to-r from-pharma-600 to-teal-500 hover:from-pharma-700 hover:to-teal-600 text-white font-medium px-6 py-3 rounded-lg w-full block text-center transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Fix the style tag */}
      <style>{`
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
      `}</style>
    </header>
  );
};

export default Navbar;
