import { Card, CardContent } from "../ui/card";
import * as Icons from "lucide-react";

type Skill = {
  name: string;
  icon: keyof typeof Icons;
  level?: number; // Optional proficiency level 1-5
  color?: string; // Badge color
  bgColor?: string; // Background color
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
      title: "Frontend Development",
      subtitle: "UI/UX & Client-Side Technologies",
      skills: data.frontend,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      emoji: "🎨",
    },
    {
      title: "Backend Development",
      subtitle: "APIs & Server-Side Technologies",
      skills: data.backend,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      emoji: "⚡",
    },
    {
      title: "Tools & DevOps",
      subtitle: "Development & Deployment Tools",
      skills: data.tools,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      emoji: "🛠️",
    },
  ];

  const getSkillColor = (skillName: string) => {
    const colorMap: {
      [key: string]: { bg: string; text: string; progress: string };
    } = {
      // Frontend
      HTML: {
        bg: "bg-orange-500",
        text: "text-white",
        progress: "bg-orange-500",
      },
      CSS: { bg: "bg-blue-500", text: "text-white", progress: "bg-blue-500" },
      JavaScript: {
        bg: "bg-yellow-400",
        text: "text-black",
        progress: "bg-yellow-400",
      },
      TypeScript: {
        bg: "bg-blue-600",
        text: "text-white",
        progress: "bg-blue-600",
      },
      ReactJS: {
        bg: "bg-cyan-500",
        text: "text-black",
        progress: "bg-cyan-500",
      },
      NextJS: { bg: "bg-black", text: "text-white", progress: "bg-black" },
      Redux: {
        bg: "bg-purple-600",
        text: "text-white",
        progress: "bg-purple-600",
      },
      "Tailwind CSS": {
        bg: "bg-teal-500",
        text: "text-white",
        progress: "bg-teal-500",
      },
      Bootstrap: {
        bg: "bg-purple-700",
        text: "text-white",
        progress: "bg-purple-700",
      },
      "Material UI": {
        bg: "bg-blue-500",
        text: "text-white",
        progress: "bg-blue-500",
      },
      ShadCN: {
        bg: "bg-slate-900",
        text: "text-white",
        progress: "bg-slate-900",
      },
      Figma: { bg: "bg-pink-500", text: "text-white", progress: "bg-pink-500" },

      // Backend
      "Node.js": {
        bg: "bg-green-600",
        text: "text-white",
        progress: "bg-green-600",
      },
      "Express.js": {
        bg: "bg-gray-700",
        text: "text-white",
        progress: "bg-gray-700",
      },
      Python: {
        bg: "bg-blue-600",
        text: "text-white",
        progress: "bg-blue-600",
      },
      Java: { bg: "bg-red-600", text: "text-white", progress: "bg-red-600" },
      MongoDB: {
        bg: "bg-green-500",
        text: "text-white",
        progress: "bg-green-500",
      },
      PostgreSQL: {
        bg: "bg-blue-700",
        text: "text-white",
        progress: "bg-blue-700",
      },
      MySQL: {
        bg: "bg-orange-600",
        text: "text-white",
        progress: "bg-orange-600",
      },
      Supabase: {
        bg: "bg-emerald-600",
        text: "text-white",
        progress: "bg-emerald-600",
      },

      // Tools
      "VS Code": {
        bg: "bg-blue-600",
        text: "text-white",
        progress: "bg-blue-600",
      },
      Git: {
        bg: "bg-orange-600",
        text: "text-white",
        progress: "bg-orange-600",
      },
      GitHub: {
        bg: "bg-gray-900",
        text: "text-white",
        progress: "bg-gray-900",
      },
      Postman: {
        bg: "bg-orange-500",
        text: "text-white",
        progress: "bg-orange-500",
      },
      Vercel: { bg: "bg-black", text: "text-white", progress: "bg-black" },
      Netlify: {
        bg: "bg-teal-500",
        text: "text-white",
        progress: "bg-teal-500",
      },
      Heroku: {
        bg: "bg-purple-600",
        text: "text-white",
        progress: "bg-purple-600",
      },
      Linux: {
        bg: "bg-yellow-500",
        text: "text-black",
        progress: "bg-yellow-500",
      },
      Render: {
        bg: "bg-gray-900",
        text: "text-white",
        progress: "bg-gray-900",
      },
      "AWS Cloud": {
        bg: "bg-orange-400",
        text: "text-black",
        progress: "bg-orange-400",
      },
    };

    return (
      colorMap[skillName] || {
        bg: "bg-gray-600",
        text: "text-white",
        progress: "bg-gray-600",
      }
    );
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-br from-emerald-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-slate-300"></span>
            <span className="text-sm font-medium text-slate-500 tracking-widest uppercase">
              Tech Stack
            </span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-slate-300"></span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Building modern applications with cutting-edge technologies and best
            practices
          </p>
        </div>

        {/* Skills Sections - Vertical Layout */}
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${category.bgGradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg ${category.borderColor} border-2`}
                >
                  {category.emoji}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {category.title}
                  </h3>
                  <p className="text-slate-600">{category.subtitle}</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = Icons[skill.icon] || Icons.Code;
                  const colors = getSkillColor(skill.name);
                  const proficiencyPercentage = skill.level
                    ? (skill.level / 5) * 100
                    : 0;

                  return (
                    <Card
                      key={skillIndex}
                      className="group/skill relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                    >
                      <CardContent className="p-0">
                        {/* Badge-style header */}
                        <div
                          className={`${colors.bg} ${colors.text} px-3 py-2 flex items-center gap-3`}
                        >
                          <IconComponent className="h-5 w-5" />
                          <span className="font-semibold text-sm truncate">
                            {skill.name}
                          </span>
                        </div>

                        {/* Progress section */}
                        {skill.level && (
                          <div className="p-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs text-slate-600">
                                Proficiency
                              </span>
                              <span className="text-xs font-semibold text-slate-700">
                                {skill.level}/5
                              </span>
                            </div>

                            {/* Progress bar */}
                            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                              <div
                                className={`h-full ${colors.progress} transition-all duration-700 ease-out group-hover/skill:animate-pulse`}
                                style={{
                                  width: `${proficiencyPercentage}%`,
                                  transition: "width 1s ease-out",
                                }}
                              ></div>
                            </div>

                            {/* Level dots */}
                            <div className="flex gap-1 mt-3 justify-center">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    i < (skill.level || 0)
                                      ? colors.progress
                                      : "bg-slate-200"
                                  }`}
                                ></div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Hover effect overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300`}
                        ></div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Stats */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                3+
              </div>
              <div className="text-sm text-slate-300 font-medium">
                Years Coding
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                25+
              </div>
              <div className="text-sm text-slate-300 font-medium">
                Technologies
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                50+
              </div>
              <div className="text-sm text-slate-300 font-medium">
                Projects Built
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold mb-2 group-hover:text-pink-400 transition-colors duration-300">
                24/7
              </div>
              <div className="text-sm text-slate-300 font-medium">
                Always Shipping
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-purple-300 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
