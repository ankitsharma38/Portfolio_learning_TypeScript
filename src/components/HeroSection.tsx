
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h2 className="inline-block px-3 py-1 text-sm bg-accent-soft text-accent rounded-full">
            Computer Engineering Student
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Building the Future with{" "}
            <span className="text-accent">AI & Engineering</span>
          </h1>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            3rd year Computer Engineering student passionate about AI/ML, Full Stack Development, and creating innovative solutions.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button className="bg-accent hover:bg-accent/90">
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
