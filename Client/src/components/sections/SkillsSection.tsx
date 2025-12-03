import { Cpu, Database, Terminal } from "lucide-react";

type Skill = {
  name: string;
  level: number;
};

export const SkillsSection = () => {
  // Hardcoded data to keep the file self-contained
  const frontendSkills: Skill[] = [
    { name: "React", level: 5 },
    { name: "TypeScript", level: 4 },
    { name: "NextJS", level: 4 },
    { name: "Tailwind", level: 5 },
    { name: "Redux", level: 3 },
    { name: "Figma", level: 3 },
  ];

  const backendSkills: Skill[] = [
    { name: "Nodejs", level: 4 },
    { name: "Express", level: 4 },
    { name: "MongoDB", level: 4 },
    { name: "PostgreSQL", level: 3 },
    { name: "Python", level: 2 },
    { name: "Supabase", level: 4 },
  ];

  const toolSkills: Skill[] = [
    { name: "Git", level: 5 },
    { name: "Docker", level: 3 },
    { name: "AWS", level: 2 },
    { name: "Linux", level: 3 },
    { name: "Postman", level: 5 },
  ];

  const interests = [
    { name: "Sports", icon: "🏃‍♂️", label: "Active & Competitive" },
    { name: "Reading", icon: "📚", label: "Continuous Growth" },
    { name: "System Design", icon: "🏗️", label: "Scalable Solutions" },
    { name: "DSA", icon: "⚡", label: "Problem Solving" },
    { name: "Startups", icon: "💡", label: "Innovation" },
  ];

  const getSkillIconName = (name: string) => {
    const map: Record<string, string> = {
      Nodejs: "nodejs",
      NextJS: "nextjs",
    };
    return map[name] || name.toLowerCase();
  };

  const SkillCategory = ({
    title,
    icon,
    skills,
  }: {
    title: string;
    icon: React.ReactNode;
    skills: Skill[];
  }) => (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6 text-gray-200">
        {icon}
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col p-4 bg-gray-900/30 border border-gray-800 rounded hover:border-gray-600 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={`https://skillicons.dev/icons?i=${getSkillIconName(
                  skill.name
                )}`}
                alt={skill.name}
                className="w-8 h-8 rounded-sm opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-sm font-medium text-gray-300">
                {skill.name}
              </span>
            </div>
            {/* Minimal Progress Bar */}
            <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
              <div
                className="h-full bg-gray-500 group-hover:bg-white transition-colors duration-300"
                style={{ width: `${(skill.level || 0) * 20}%` }}
              />
            </div>
            <div className="mt-1 text-[10px] text-gray-600 font-mono text-right">
              Level {skill.level}/5
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-16 px-4 md:px-0 bg-black text-white border-b border-gray-900"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-lg font-mono text-gray-500 mb-12 tracking-wider uppercase opacity-80">
          // Tech Stack
        </h2>

        <div className="space-y-4">
          <SkillCategory
            title="Frontend Development"
            icon={<Cpu size={18} className="text-blue-400" />}
            skills={frontendSkills}
          />
          <SkillCategory
            title="Backend Development"
            icon={<Database size={18} className="text-emerald-400" />}
            skills={backendSkills}
          />
          <SkillCategory
            title="Tools & DevOps"
            icon={<Terminal size={18} className="text-orange-400" />}
            skills={toolSkills}
          />
        </div>
      </div>
    </section>
  );
};
