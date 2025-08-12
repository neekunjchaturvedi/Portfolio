import antd from "../../assets/antd.svg";
import shadcn from "../../assets/shadcn.png";

type Skill = {
  name: string;
  level?: number; // Optional proficiency level 1-5
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
      gradient: "from-blue-600 to-purple-600",
    },
    {
      title: "Backend Development",
      subtitle: "APIs & Server-Side Technologies",
      skills: data.backend,
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      title: "Tools & DevOps",
      subtitle: "Development & Deployment Tools",
      skills: data.tools,
      gradient: "from-orange-600 to-red-600",
    },
  ];

  const interests = [
    {
      name: "Sports",
      icon: "🏃‍♂️",
      color: "#FF6B6B",
      description: "Staying active and competitive",
    },
    {
      name: "Reading Books",
      icon: "📚",
      color: "#4ECDC4",
      description: "Continuous learning and growth",
    },
    {
      name: "System Design",
      icon: "🏗️",
      color: "#45B7D1",
      description: "Architecting scalable solutions",
    },
    {
      name: "DSA",
      icon: "⚡",
      color: "#96CEB4",
      description: "Data Structures & Algorithms",
    },
    {
      name: "Startups",
      icon: "💡",
      color: "#FECA57",
      description: "Innovation and entrepreneurship",
    },
  ];

  // Mapping for skillicons.dev API
  const getSkillIconName = (skillName: string): string => {
    const skillIconMap: { [key: string]: string } = {
      // Frontend
      HTML: "html",
      CSS: "css",
      JavaScript: "js",
      TypeScript: "ts",
      React: "react",
      NextJS: "nextjs",
      Redux: "redux",
      Tailwind: "tailwind",
      Bootstrap: "bootstrap",
      MaterialUI: "materialui",
      Figma: "figma",

      // Backend
      Nodejs: "nodejs",
      Express: "expressjs",
      Python: "python",
      Java: "java",
      MongoDB: "mongodb",
      PostgreSQL: "postgres",
      MySQL: "mysql",
      Supabase: "supabase",

      // Tools
      Git: "git",
      GitHub: "github",
      GitHubActions: "githubactions",
      NPM: "npm",
      Postman: "postman",
      Docker: "docker",
      AWS: "aws",
      Vercel: "vercel",
      Netlify: "netlify",
      Heroku: "heroku",
      Linux: "linux",
    };

    return skillIconMap[skillName] || skillName.toLowerCase();
  };

  // Get skill color for progress bars
  const getSkillColor = (skillName: string): string => {
    const colorMap: { [key: string]: string } = {
      // Frontend
      HTML: "#E34F26",
      CSS: "#1572B6",
      JavaScript: "#F7DF1E",
      TypeScript: "#3178C6",
      React: "#61DAFB",
      NextJS: "#374151",
      Redux: "#764ABC",
      Tailwind: "#06B6D4",
      Bootstrap: "#7952B3",
      MaterialUI: "#007FFF",
      ShadCN: "#374151",
      AntDesign: "#1890FF",
      Figma: "#F24E1E",

      // Backend
      Nodejs: "#339933",
      Express: "#374151",
      Python: "#3776AB",
      Java: "#ED8B00",
      MongoDB: "#47A248",
      PostgreSQL: "#336791",
      MySQL: "#4479A1",
      Supabase: "#3ECF8E",

      // Tools
      Git: "#F05032",
      GitHub: "#374151",
      GitHubActions: "#2088FF",
      NPM: "#CB3837",
      Postman: "#FF6C37",
      Docker: "#2496ED",
      AWS: "#FF9900",
      Vercel: "#374151",
      Netlify: "#00C7B7",
      Heroku: "#430098",
      Linux: "#FCC624",
    };

    return colorMap[skillName] || "#6B7280";
  };

  const renderSkillIcon = (skillName: string) => {
    // Custom images for ShadCN and AntDesign
    if (skillName === "ShadCN") {
      return <img src={shadcn} alt="ShadCN" className="w-8 h-8 rounded" />;
    }
    if (skillName === "AntDesign") {
      return <img src={antd} alt="Ant Design" className="w-8 h-8" />;
    }

    // Use skillicons.dev for all other skills
    const iconName = getSkillIconName(skillName);
    return (
      <img
        src={`https://skillicons.dev/icons?i=${iconName}`}
        alt={skillName}
        className="w-8 h-8"
      />
    );
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gray-600"></span>
            <span className="text-sm font-medium text-gray-400 tracking-widest uppercase">
              Tech Stack
            </span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gray-600"></span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building modern applications with cutting-edge technologies and best
            practices
          </p>
        </div>

        {/* Skills Sections */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group">
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
                <p className="text-gray-400">{category.subtitle}</p>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const skillColor = getSkillColor(skill.name);
                  const proficiencyPercentage = skill.level
                    ? (skill.level / 5) * 100
                    : 0;

                  return (
                    <div
                      key={skillIndex}
                      className="group/skill relative flex flex-col items-center"
                    >
                      {/* Skill Badge */}
                      <div className="relative mb-3">
                        <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl px-4 py-3 flex items-center gap-3 hover:bg-gray-700/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                          {renderSkillIcon(skill.name)}
                          <span className="text-white font-medium text-sm whitespace-nowrap">
                            {skill.name}
                          </span>
                        </div>

                        {/* Glow effect on hover */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover/skill:opacity-20 blur-xl transition-opacity duration-300 -z-10"
                          style={{ backgroundColor: skillColor }}
                        ></div>
                      </div>

                      {/* Level Meter */}
                      {skill.level && (
                        <div className="w-full max-w-[120px]">
                          {/* Progress bar */}
                          <div className="w-full bg-gray-800 rounded-full h-1.5 mb-2 overflow-hidden">
                            <div
                              className="h-full transition-all duration-1000 ease-out rounded-full"
                              style={{
                                width: `${proficiencyPercentage}%`,
                                backgroundColor: skillColor,
                                boxShadow: `0 0 10px ${skillColor}40`,
                              }}
                            ></div>
                          </div>

                          {/* Level dots */}
                          <div className="flex gap-1 justify-center">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1.5 h-1.5 rounded-full transition-all duration-500"
                                style={{
                                  backgroundColor:
                                    i < (skill.level || 0)
                                      ? skillColor
                                      : "#374151",
                                  boxShadow:
                                    i < (skill.level || 0)
                                      ? `0 0 4px ${skillColor}`
                                      : "none",
                                }}
                              ></div>
                            ))}
                          </div>

                          {/* Level text */}
                          <div className="text-center mt-1">
                            <span className="text-xs text-gray-500 font-medium">
                              Level {skill.level}/5
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Interests Section */}
        <div className="mt-20">
          {/* Interests Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-white tracking-widest uppercase">
                Interests
              </span>
            </div>
          </div>

          {/* Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {interests.map((interest, index) => (
              <div key={index} className="group/interest relative">
                <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ backgroundColor: `${interest.color}20` }}
                    >
                      {interest.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-sm truncate">
                        {interest.name}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover/interest:opacity-20 blur-xl transition-opacity duration-300 -z-10"
                  style={{ backgroundColor: interest.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Stats */}
        <div className="mt-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                3+
              </div>
              <div className="text-sm text-gray-400 font-medium">
                Years Coding
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                25+
              </div>
              <div className="text-sm text-gray-400 font-medium">
                Technologies
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                20+
              </div>
              <div className="text-sm text-gray-400 font-medium">
                Projects Built
              </div>
            </div>
            
          </div>
        </div>

        
        
      </div>
    </section>
  );
};

export default SkillsSection;
