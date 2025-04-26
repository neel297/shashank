
import { useEffect, useState, useRef } from "react";
import AnimatedElement from "../ui/AnimatedElement";

const technicalSkills = [
  { name: "Medication Management", level: 95 },
  { name: "Drug Information Services", level: 90 },
  { name: "Pharmaceutical Compounding", level: 85 },
  { name: "Clinical Pharmacology", level: 88 },
  { name: "Pharmacovigilance", level: 80 },
  { name: "Pharmacy Informatics", level: 75 }
];

const softSkills = [
  { name: "Patient Counseling", level: 92 },
  { name: "Healthcare Team Collaboration", level: 88 },
  { name: "Communication", level: 90 },
  { name: "Problem Solving", level: 85 },
  { name: "Attention to Detail", level: 95 },
  { name: "Leadership", level: 80 }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="floating-decoration top-20 left-40 w-72 h-72 rounded-full bg-pharma-100 mix-blend-multiply filter blur-xl"></div>
      <div className="floating-decoration bottom-20 right-20 w-80 h-80 rounded-full bg-teal-100 mix-blend-multiply filter blur-xl" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedElement>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">Professional Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pharma-500 to-teal-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              Technical and soft skills developed throughout my pharmaceutical career.
            </p>
          </AnimatedElement>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedElement animation="fade-right">
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-center md:text-left">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={index * 100} />
                ))}
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-left" delay={200}>
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-center md:text-left">Soft Skills</h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={index * 100} />
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        <AnimatedElement delay={300}>
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-center">Additional Skills & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Pharmaceutical Research", "Drug Formulary Management", "Patient Education", 
                "Healthcare Regulations", "Inventory Control", "Medical Equipment",
                "EMR Systems", "Pharmacy Software", "Dispensing Systems", "Medication Therapy Management",
                "Sterile Compounding", "Quality Assurance", "Clinical Trials Support"
              ].map((tag, index) => (
                <div key={tag} className="skill-tag group" style={{ transitionDelay: `${index * 50}ms` }}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
  };
  delay: number;
}

const SkillBar = ({ skill, delay }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium text-gray-800">{skill.name}</span>
        <span className="text-pharma-600 font-semibold">{skill.level}%</span>
      </div>
      <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-pharma-500 to-teal-500 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
