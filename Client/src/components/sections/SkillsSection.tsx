
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import * as Icons from "lucide-react";

type Skill = {
  name: string;
  icon: keyof typeof Icons;
};

type SkillsData = {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
};

interface SkillsSectionProps {
  data: SkillsData;
}

const SkillsSection = ({ data }: SkillsSectionProps) => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: data.frontend,
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Backend",
      skills: data.backend,
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Tools",
      skills: data.tools,
      color: "bg-purple-50 border-purple-200",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-slate-800 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`${category.color} border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-slate-800">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = Icons[skill.icon] || Icons.Code;
                    return (
                      <div
                        key={skillIndex}
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
                      >
                        <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-slate-800 transition-colors duration-200">
                          <IconComponent className="h-5 w-5 text-slate-600 group-hover:text-white transition-colors duration-200" />
                        </div>
                        <span className="font-medium text-slate-800">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
