
import AnimatedElement from "../ui/AnimatedElement";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    position: "Senior Pharmacist",
    company: "Medical Center Pharmacy",
    location: "City, State",
    period: "2022 - Present",
    description: "Managing pharmacy operations and ensuring optimal patient care through effective medication management.",
    responsibilities: [
      "Supervise pharmacy staff and daily operations",
      "Review and verify prescription accuracy and appropriateness",
      "Provide medication counseling to patients",
      "Implement medication safety protocols",
      "Collaborate with healthcare providers on medication therapy management"
    ]
  },
  {
    position: "Clinical Pharmacist",
    company: "General Hospital",
    location: "City, State",
    period: "2020 - 2022",
    description: "Worked in a clinical setting providing pharmaceutical care to inpatients and collaborating with the healthcare team.",
    responsibilities: [
      "Conducted medication reviews and reconciliation",
      "Participated in multidisciplinary patient care rounds",
      "Monitored drug therapies for safety and efficacy",
      "Provided drug information to healthcare professionals",
      "Assisted in managing adverse drug reactions"
    ]
  },
  {
    position: "Pharmacy Intern",
    company: "Community Pharmacy",
    location: "City, State",
    period: "2019 - 2020",
    description: "Gained hands-on experience in retail pharmacy operations under the supervision of licensed pharmacists.",
    responsibilities: [
      "Assisted in prescription processing and dispensing",
      "Learned inventory management and stock control",
      "Observed patient counseling sessions",
      "Participated in health screening events",
      "Helped implement medication adherence programs"
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
