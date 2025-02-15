
import { Briefcase } from "lucide-react";
import { Card } from "./ui/card";

const experiences = [
  {
    title: "AI Intern",
    company: "Indian Army (DGTA)",
    location: "New Delhi",
    period: "November 2024 - January 2025",
    description: [
      "Contributing to AI-driven projects focused on advanced data analysis and decision-making.",
      "Leveraging Python and TensorFlow expertise to develop and optimize machine learning models.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Internpedia",
    location: "Remote",
    period: "November 2022 - December 2022",
    description: [
      "Successfully developed eight unique projects using HTML, CSS, and JavaScript.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 bg-neutral-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-accent-soft text-accent rounded-full">
            <Briefcase className="w-4 h-4" /> Experience
          </h2>
          <h3 className="text-3xl font-bold">Professional Journey</h3>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <p className="text-neutral">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-sm text-neutral">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-neutral space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
