
import { Card, CardContent } from "../ui/Card";
import Button from "../ui/Button";
import AnimatedElement from "../ui/AnimatedElement";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Medication Adherence Program",
    category: "Clinical Practice",
    description: "Developed and implemented a comprehensive medication adherence program focused on improving patient compliance through education, packaging solutions, and follow-up systems.",
    tags: ["Patient Care", "Education", "Program Development"],
    image: "bg-gradient-to-br from-pharma-500 to-pharma-700"
  },
  {
    title: "Pharmacy Workflow Optimization",
    category: "Operations",
    description: "Redesigned pharmacy workflow processes to reduce wait times by 40% and minimize dispensing errors, improving both patient satisfaction and safety metrics.",
    tags: ["Process Improvement", "Safety", "Efficiency"],
    image: "bg-gradient-to-br from-teal-500 to-teal-700"
  },
  {
    title: "Drug Interaction Database",
    category: "Research",
    description: "Contributed to the development of a specialized drug interaction database focused on geriatric medications, helping reduce adverse drug events in elderly patients.",
    tags: ["Research", "Database", "Patient Safety"],
    image: "bg-gradient-to-br from-purple-500 to-purple-700"
  },
  {
    title: "Community Health Screening Initiative",
    category: "Public Health",
    description: "Organized and led community health screening events providing free blood pressure, glucose monitoring, and medication reviews to underserved populations.",
    tags: ["Community Service", "Health Promotion", "Screening"],
    image: "bg-gradient-to-br from-blue-500 to-blue-700"
  },
  {
    title: "Pharmaceutical Waste Management Protocol",
    category: "Environmental",
    description: "Developed and implemented a comprehensive protocol for proper disposal of pharmaceutical waste, ensuring environmental safety and regulatory compliance.",
    tags: ["Sustainability", "Compliance", "Protocols"],
    image: "bg-gradient-to-br from-green-500 to-green-700"
  },
  {
    title: "Antibiotic Stewardship Program",
    category: "Clinical",
    description: "Participated in developing hospital antibiotic stewardship initiatives to promote appropriate use of antimicrobials, reduce resistance, and improve patient outcomes.",
    tags: ["Antimicrobial", "Stewardship", "Clinical Guidelines"],
    image: "bg-gradient-to-br from-red-500 to-red-700"
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
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
    </section>
  );
};

export default Projects;
