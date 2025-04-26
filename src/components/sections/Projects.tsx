import { Card, CardContent } from "../ui/card";
import Button from "../ui/Button";
import AnimatedElement from "../ui/AnimatedElement";
import { ExternalLink, BookOpen, Microscope } from "lucide-react";

const projects = [
  {
    title: "Hospital Pharmacy Report",
    category: "Academic Project",
    description: "Authored a comprehensive report exploring aspects of hospital pharmacy operations, focusing on medication management systems, inventory control, and patient safety protocols.",
    tags: ["Report Writing", "Research", "Analysis"],
    image: "bg-gradient-to-br from-pharma-500 to-pharma-700",
    icon: BookOpen
  },
  {
    title: "Literature Review: Phlebotomics",
    category: "Academic Research",
    description: "Conducted a comprehensive literature review examining the role of phlebotomics in varicose vein management, analyzing clinical trials and therapeutic outcomes.",
    tags: ["Literature Research", "Critical Analysis", "Synthesis"],
    image: "bg-gradient-to-br from-teal-500 to-teal-700",
    icon: Microscope
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="floating-decoration top-40 right-20 w-72 h-72 rounded-full bg-pharma-50 mix-blend-multiply filter blur-xl"></div>
      <div className="floating-decoration bottom-20 left-40 w-64 h-64 rounded-full bg-teal-50 mix-blend-multiply filter blur-xl" style={{ animationDelay: "4s" }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedElement>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">Key Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pharma-500 to-teal-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              Significant pharmaceutical projects and initiatives I've contributed to throughout my career.
            </p>
          </AnimatedElement>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <AnimatedElement key={project.title} delay={index * 100}>
                <Card className="h-full overflow-hidden group hover-card">
                  <div className="relative h-48">
                    <div className={`absolute inset-0 ${project.image}`}></div>
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <span className="bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-semibold mb-3 group-hover:text-pharma-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-2">
                      <Button variant="ghost" size="sm" className="text-pharma-600 hover:text-pharma-700 p-0 group">
                        <span>View Details</span>
                        <ExternalLink size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
