
import { Code } from "lucide-react";
import { Card } from "./ui/card";

const projects = [
  {
    title: "AI Project 1",
    description: "Machine learning model for data analysis using TensorFlow and Python.",
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    image: "/placeholder.svg"
  },
  {
    title: "Full Stack App",
    description: "E-commerce platform built with MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/placeholder.svg"
  },
  {
    title: "UI/UX Design",
    description: "Modern design system created in Figma for a startup.",
    tech: ["Figma", "Adobe XD"],
    image: "/placeholder.svg"
  },
  {
    title: "ML Model",
    description: "Predictive analysis system for business forecasting.",
    tech: ["Python", "Pandas", "NumPy"],
    image: "/placeholder.svg"
  },
  {
    title: "Web App",
    description: "Social media dashboard with real-time analytics.",
    tech: ["React", "Firebase", "Tailwind"],
    image: "/placeholder.svg"
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application for task management.",
    tech: ["React Native", "Redux", "Node.js"],
    image: "/placeholder.svg"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-orange-100 text-orange-500 rounded-full">
            <Code className="w-4 h-4" /> Projects
          </h2>
          <h3 className="text-3xl font-bold">Featured Projects</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="space-y-4">
                <div className="h-48 bg-orange-50 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="text-neutral">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-orange-50 text-orange-500 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
