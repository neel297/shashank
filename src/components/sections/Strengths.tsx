
import { Card, CardContent } from "../ui/Card";
import AnimatedElement from "../ui/AnimatedElement";
import { Flask, Heart, Stethoscope, Users, BookOpen, Microscope } from "lucide-react";

const strengths = [
  {
    title: "Pharmaceutical Knowledge",
    description: "Deep understanding of pharmaceutical sciences, medication management, and healthcare protocols.",
    icon: Flask,
    color: "bg-pharma-50 text-pharma-700 border-pharma-200",
  },
  {
    title: "Patient Care",
    description: "Dedicated to improving patient outcomes through effective medication counseling and education.",
    icon: Heart,
    color: "bg-red-50 text-red-700 border-red-200",
  },
  {
    title: "Medical Collaboration",
    description: "Experience working effectively with diverse healthcare professionals for integrated patient care.",
    icon: Stethoscope,
    color: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    title: "Team Leadership",
    description: "Skilled in coordinating pharmacy teams to ensure efficient operations and quality service delivery.",
    icon: Users,
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    title: "Continuous Learning",
    description: "Committed to staying current with pharmaceutical advancements and healthcare innovations.",
    icon: BookOpen,
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    title: "Analytical Thinking",
    description: "Strong problem-solving abilities applied to pharmaceutical challenges and healthcare optimization.",
    icon: Microscope,
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
];

const Strengths = () => {
  return (
    <section id="strengths" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="floating-decoration top-40 right-20 w-72 h-72 rounded-full bg-pharma-50 mix-blend-multiply filter blur-xl"></div>
      <div className="floating-decoration bottom-20 left-20 w-60 h-60 rounded-full bg-teal-50 mix-blend-multiply filter blur-xl" style={{ animationDelay: "3s" }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedElement>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">Professional Strengths</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pharma-500 to-teal-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              Core competencies that differentiate my pharmaceutical practice and enable me to deliver excellent patient care.
            </p>
          </AnimatedElement>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {strengths.map((strength, index) => (
            <AnimatedElement key={strength.title} delay={index * 100}>
              <Card className={`border-l-4 ${strength.color} h-full`}>
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <strength.icon className={`w-12 h-12 ${strength.color.split(' ')[1]}`} />
                    </div>
                    <h3 className="text-xl font-playfair font-semibold mb-3">{strength.title}</h3>
                    <p className="text-gray-600 flex-grow">{strength.description}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
