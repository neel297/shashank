import AnimatedElement from "../ui/AnimatedElement";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    position: "Pharmacy Intern",
    company: "Park Benz Laboratories",
    location: "Mandideep, Raisen",
    period: "June 15, 2024 - July 15, 2024",
    description: "Gained hands-on experience in the manufacturing environment for parenteral products, focusing on key operational areas including production, cleaning, packaging, and quality control.",
    responsibilities: [
      "Observed the aseptic filling process for Pantoprazole injection",
      "Observed and performed sterilization and cleaning processes for glass vials/containers",
      "Gained familiarity with primary and secondary packaging materials",
      "Packed Pantoprazole-filled containers into primary packaging",
      "Understood the importance of in-process checks and documentation"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="floating-decoration top-40 left-20 w-80 h-80 rounded-full bg-pharma-50 mix-blend-multiply filter blur-xl"></div>
      <div className="floating-decoration bottom-40 right-20 w-72 h-72 rounded-full bg-teal-50 mix-blend-multiply filter blur-xl" style={{ animationDelay: "3s" }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedElement>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">Professional Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pharma-500 to-teal-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              My journey in the pharmaceutical industry, highlighting key roles and responsibilities.
            </p>
          </AnimatedElement>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="timeline-container">
            {experiences.map((experience, index) => (
              <AnimatedElement key={index} delay={index * 200}>
                <div className="relative mb-12">
                  <div className="timeline-dot"></div>
                  <div className="bg-white rounded-xl shadow-md p-6 ml-6">
                    <div className="flex items-center text-pharma-600 mb-2">
                      <Briefcase size={18} className="mr-2" />
                      <span className="text-sm font-medium">{experience.period}</span>
                    </div>
                    <h3 className="text-xl font-playfair font-semibold mb-1">{experience.position}</h3>
                    <p className="text-gray-700 font-medium mb-3">
                      {experience.company}, {experience.location}
                    </p>
                    <p className="text-gray-600 mb-4">{experience.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1 text-gray-600">
                        {experience.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-pharma-500 mr-2">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
