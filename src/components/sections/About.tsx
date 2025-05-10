
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
        
        <AnimatedElement animation="fade-right">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-gray-700 text-justify">
              I am Shashank Mohan Pandey, a dedicated and passionate Pharmacist with a B.Pharmacy degree. Throughout my career, I have developed expertise in pharmaceutical care, medication management, and patient counseling. My professional journey has been centered around improving patient outcomes and enhancing medication safety practices.
            </p>
            <p className="text-gray-700 text-justify">
              With a strong foundation in pharmaceutical sciences and a commitment to continuous learning, I strive to stay updated with the latest advancements in pharmacotherapy. My approach combines scientific knowledge with empathetic patient care to deliver comprehensive pharmaceutical services.
            </p>
            <p className="text-gray-700 text-justify">
              I am particularly interested in clinical pharmacy, medication therapy management, and pharmaceutical research. My goal is to contribute to healthcare improvement through effective medication management and patient education, ultimately enhancing therapeutic outcomes and patient satisfaction.
            </p>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default About;
