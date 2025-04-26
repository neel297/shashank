
import AnimatedElement from "../ui/AnimatedElement";
import { Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Pharmacy (B.Pharm)",
    institution: "College of Pharmacy",
    location: "University Name",
    period: "2016 - 2020",
    description: "Comprehensive study of pharmaceutical sciences including pharmacology, medicinal chemistry, pharmaceutics, and clinical pharmacy. Graduated with distinction.",
    achievements: [
      "Graduated with First Class Honors",
      "Specialized in Clinical Pharmacy practices",
      "Participated in pharmaceutical research projects",
      "Received academic excellence award"
    ]
  },
  {
    degree: "Pharmacy Internship",
    institution: "General Hospital",
    location: "City Name",
    period: "2019 - 2020",
    description: "One-year mandatory internship program focused on practical training in hospital pharmacy settings, gaining hands-on experience in medication management and patient care.",
    achievements: [
      "Rotated through various pharmacy departments",
      "Participated in medication reconciliation processes",
      "Assisted in inventory management",
      "Contributed to patient counseling initiatives"
    ]
  },
  {
    degree: "Professional Certification",
    institution: "Pharmaceutical Council",
    location: "State/National Level",
    period: "2020",
    description: "Obtained professional certification after successfully completing the licensure examination, authorizing practice as a registered pharmacist.",
    achievements: [
      "Passed the licensure examination in the first attempt",
      "Received comprehensive training in pharmaceutical ethics",
      "Completed requirements for professional registration"
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
