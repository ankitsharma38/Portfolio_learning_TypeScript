
import { Trophy } from "lucide-react";
import { Card } from "./ui/card";

const achievements = [
  {
    title: "Winner, Half Hackathon",
    year: "2025",
    description: "Awarded first place for developing a creative solution."
  },
  {
    title: "Finalist, Cyber-Quest Hackathon",
    year: "2024",
    description: "Organized by Indian Army & Cyber Peace."
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-orange-50/50">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-orange-100 text-orange-500 rounded-full">
            <Trophy className="w-4 h-4" /> Achievements
          </h2>
          <h3 className="text-3xl font-bold">Awards & Recognition</h3>
        </div>
        <div className="grid gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold">{achievement.title}</h4>
                  <p className="text-orange-500 font-medium">{achievement.year}</p>
                  <p className="text-neutral mt-2">{achievement.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
