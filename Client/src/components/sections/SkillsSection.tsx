import { useState } from "react"
import { Code, Cpu, Database, Terminal, ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { IconCloud } from "@/components/ui/icon-cloud"
import antd from "@/assets/antd.svg"
import shadcn from "@/assets/shadcn.png"

type Skill = {
  name: string
  level: number
}

export const SkillsSection = () => {
  const Programming: Skill[] = [
    { name: "Javascript", level: 5 },
    { name: "Typescript", level: 5 },
    { name: "Java", level: 4 },
    { name: "Python", level: 3 },
    { name: "C", level: 3 },
  ]

  const frontendSkills: Skill[] = [
    { name: "React", level: 5 },
    { name: "TypeScript", level: 4 },
    { name: "NextJS", level: 4 },
    { name: "Tailwind", level: 5 },
    { name: "Bootstrap", level: 5 },
    { name: "MaterialUI", level: 5 },
    { name: "ShadCN", level: 3 },
    { name: "AntDesign", level: 3 },
    { name: "SASS", level: 4 },
    { name: "Redux", level: 3 },
    { name: "Markdown", level: 3 },
    { name: "Figma", level: 3 },
  ]

  const backendSkills: Skill[] = [
    { name: "Nodejs", level: 4 },
    { name: "Express", level: 4 },
    { name: "MongoDB", level: 4 },
    { name: "PostgreSQL", level: 4 },
    { name: "Supabase", level: 4 },
    { name: "Prisma", level: 4 },
    { name: "Redis", level: 3 },
    { name: "RabbitMQ", level: 3 },
    { name: "Firebase", level: 3 },
  ]

  const toolSkills: Skill[] = [
    { name: "VSCode", level: 5 },
    { name: "Git", level: 5 },
    { name: "Github", level: 5 },
    { name: "Github Actions", level: 4 },
    { name: "Docker", level: 3 },
    { name: "AWS", level: 3 },
    { name: "Linux", level: 3 },
    { name: "Debian", level: 3 },
    { name: "Postman", level: 5 },
    { name: "Vercel", level: 5 },
    { name: "Netlify", level: 5 },
    { name: "Bash", level: 3 },
  ]

  const getSkillIconName = (name: string) =>
    ({
      Nodejs: "nodedotjs",
      NextJS: "nextdotjs",
      Typescript: "typescript",
    }[name] || name.toLowerCase())

  const SkillBlock = ({ skills }: { skills: Skill[] }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="group flex flex-col p-4 bg-gray-900/30 border border-gray-800 rounded hover:border-gray-600 transition-colors"
        >
          <div className="flex items-center gap-3 mb-3">

            {skill.name === "ShadCN" ? (
              <img src={shadcn} className="w-8 h-8" />
            ) : skill.name === "AntDesign" ? (
              <img src={antd} className="w-8 h-8" />
            ) : (
              <img
                src={`https://skillicons.dev/icons?i=${getSkillIconName(skill.name.replace(/\s/g, ""))}`}
                className="w-8 h-8"
              />
            )}

            <span>{skill.name}</span>
          </div>

          <div className="w-full bg-gray-800/80 h-1 rounded">
            <div className="h-full bg-gray-300" style={{ width: `${skill.level * 20}%` }} />
          </div>
        </div>
      ))}
    </div>
  )

  const SkillCategory = ({
    title,
    icon,
    skills,
    slugs,
  }: {
    title: string
    icon: any
    skills: Skill[]
    slugs: string[]
  }) => {
    const [open, setOpen] = useState(false)
    const images = slugs.map((s) => `https://cdn.simpleicons.org/${s}/${s}`)

    return (
      <Collapsible open={open} onOpenChange={setOpen} className="mb-6 rounded-lg border border-gray-900 p-6">
        <CollapsibleTrigger className="w-full flex justify-between items-center cursor-pointer">
          <div className="flex items-center gap-2">{icon}<span className="font-bold">{title}</span></div>
          <ChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-6 pt-6">
          {/* icon cloud */}
          <div className="h-56 rounded-lg border border-gray-800 relative overflow-hidden">
            <IconCloud images={images} />
          </div>

          <SkillBlock skills={skills} />
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <section id="skills" className="py-20 bg-black text-white border-t border-gray-900">
      <div className="container mx-auto max-w-6xl">

        <SkillCategory
          title="Programming"
          icon={<Code className="text-blue-400" />}
          skills={Programming}
          slugs={["javascript", "typescript", "java", "python", "cplusplus"]}
        />

        <SkillCategory
          title="Frontend Development"
          icon={<Cpu className="text-blue-400" />}
          skills={frontendSkills}
          slugs={["react", "nextdotjs", "javascript", "typescript", "tailwindcss", "materialdesign"]}
        />

        <SkillCategory
          title="Backend Development"
          icon={<Database className="text-emerald-400" />}
          skills={backendSkills}
          slugs={["nodedotjs", "express", "postgresql", "mongodb", "prisma", "redis"]}
        />

        <SkillCategory
          title="Tools & DevOps"
          icon={<Terminal className="text-orange-400" />}
          skills={toolSkills}
          slugs={["docker", "git", "github", "githubactions", "aws", "vercel", "postman", "linux"]}
        />
      </div>
    </section>
  )
}
