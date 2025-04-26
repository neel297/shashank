
import AnimatedElement from "../ui/AnimatedElement";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="floating-decoration top-20 left-20 w-40 h-40 rounded-full bg-pharma-100 mix-blend-multiply filter blur-xl"></div>
      <div className="floating-decoration bottom-20 right-40 w-60 h-60 rounded-full bg-teal-100 mix-blend-multiply filter blur-xl" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedElement>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pharma-500 to-teal-500 mx-auto"></div>
          </AnimatedElement>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="fade-right">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-pharma-800/90"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                <blockquote className="text-white">
                  <p className="text-xl font-playfair italic mb-4">
                    "Dedicated to improving healthcare through the safe and effective use of medications."
                  </p>
                  <footer className="text-pharma-300">
                    — Shashank Mohan Pandey
                  </footer>
                </blockquote>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-lg border-4 border-pharma-500/30 backdrop-blur-sm"></div>
              <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full border-4 border-teal-500/30 backdrop-blur-sm"></div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-left" delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-playfair font-semibold text-gray-900">Pharmaceutical Professional</h3>
              <p className="text-gray-700">
                I am Shashank Mohan Pandey, a dedicated B.Pharmacy graduate with a passion for healthcare innovation 
                and patient-centered pharmaceutical care. With a strong foundation in pharmaceutical sciences and 
                practical experience in various healthcare settings, I strive to contribute to improving medication 
                management and patient outcomes.
              </p>
              <p className="text-gray-700">
                My academic background has equipped me with comprehensive knowledge in pharmacology, pharmaceutical 
                chemistry, and pharmacy practice. Throughout my career, I have developed expertise in medication 
                management, patient counseling, and healthcare optimization processes.
              </p>
              <p className="text-gray-700">
                I believe in continuous learning and staying updated with the latest advancements in pharmaceutical 
                science and healthcare technologies. My goal is to leverage my knowledge and skills to make meaningful 
                contributions to the pharmaceutical industry and ultimately to patient care.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="text-pharma-700 font-semibold mb-2">Email</h4>
                  <p className="text-gray-600">shashankmohanp@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-pharma-700 font-semibold mb-2">Location</h4>
                  <p className="text-gray-600">India</p>
                </div>
                <div>
                  <h4 className="text-pharma-700 font-semibold mb-2">Degree</h4>
                  <p className="text-gray-600">B.Pharmacy</p>
                </div>
                <div>
                  <h4 className="text-pharma-700 font-semibold mb-2">Field</h4>
                  <p className="text-gray-600">Pharmaceutical Sciences</p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default About;
