import AnimatedElement from "../ui/AnimatedElement";
import { Calendar, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Pharmacy (B.Pharmacy)",
    institution: "AKS University",
    location: "Satna",
    period: "2021 - 2025",
    description: "Comprehensive study of pharmaceutical sciences, including pharmacology, medicinal chemistry, pharmaceutics, and clinical pharmacy. Currently pursuing with focus on developing expertise in medication management and patient care.",
    achievements: [
      "Focus on pharmaceutical sciences and patient care",
      "Developing expertise in medication management",
      "Studying clinical pharmacy practices",
      "Learning advanced pharmacology concepts"
    ]
  },
  {
    degree: "Secondary School Certificate (12th Grade)",
    institution: "Simran Public School",
    location: "Maihar",
    period: "Completed 2021",
    description: "Completed higher secondary education with a specialization in Biology, which developed my interest and provided the essential foundation for pursuing pharmaceutical studies.",
    achievements: [
      "Specialized in Biology",
      "Built foundation for pharmaceutical studies",
      "Developed interest in healthcare sciences"
    ]
  },
  {
    degree: "Professional Development",
    institution: "Various Institutions",
    location: "Multiple Locations",
    period: "2021 - Present",
    description: "Continuous professional development through various programs and seminars.",
    achievements: [
      "Pharma Management Programme - Institute of Pharmaceutical Education and Research (IPER)",
      "Art of Facing Interviews and Techniques in the Pharma Sector - IPER",
      "Graduate Employability Enhancement Training (GEET) - Infosys, Learnet Skills Limited"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="floating-decoration top-20 right-40 w-64 h-64 rounded-full bg-pharma-100 mix-blend-multiply filter blur-xl"></div>
      <div className="floating-decoration bottom-40 left-20 w-72 h-72 rounded-full bg-teal-100 mix-blend-multiply filter blur-xl" style={{ animationDelay: "4s" }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedElement>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">Education & Certifications</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pharma-500 to-teal-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              My academic background and professional qualifications in pharmaceutical sciences.
            </p>
          </AnimatedElement>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="timeline-container">
            {education.map((item, index) => (
              <AnimatedElement key={index} delay={index * 200}>
                <div className="relative mb-12">
                  <div className="timeline-dot"></div>
                  <div className="bg-white rounded-xl shadow-md p-6 ml-6">
                    <div className="flex items-center text-pharma-600 mb-2">
                      <Calendar size={18} className="mr-2" />
                      <span className="text-sm font-medium">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-playfair font-semibold mb-1">{item.degree}</h3>
                    <p className="text-gray-700 font-medium mb-3">
                      {item.institution}, {item.location}
                    </p>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1 text-gray-600">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-pharma-500 mr-2">•</span>
                            <span>{achievement}</span>
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

export default Education;
