import { Code, Cpu, Database, Terminal } from "lucide-react";
import antd from "@/assets/antd.svg";
import shadcn from "@/assets/shadcn.png";
import expo from "@/assets/expo.png";

export const SkillsSection = () => {
  const list = [
    { icon: "react" },
    { icon: null, img: expo },
    { icon: "nextjs" },
    { icon: "typescript" },
    { icon: "javascript" },
    { icon: "materialui" },
    { icon: "bootstrap" },
    { icon: "sass" },
    { icon: "figma" },
    { icon: "redux" },
    { icon: "markdown" },
    { icon: "tailwindcss" },
    { icon: null, img: shadcn },
    { icon: null, img: antd },
    { icon: "nodejs" },
    { icon: "express" },
    { icon: "mongodb" },
    { icon: "postgresql" },
    { icon: "prisma" },
    { icon: "redis" },
    { icon: "rabbitmq" },
    { icon: "firebase" },
    { icon: "supabase" },
    { icon: "vscode" },
    { icon: "git" },
    { icon: "github" },
    { icon: "githubactions" },
    { icon: "aws" },
    { icon: "vercel" },
    { icon: "netlify" },
    { icon: "docker" },
    { icon: "postman" },
    { icon: "bash" },
    { icon: "linux" },
    { icon: "debian" },
  ];

  return (
    <section
      id="skills"
      className=" py-24 bg-black text-white border-t border-gray-900"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-lg font-mono text-gray-500 mb-12 tracking-wider uppercase opacity-80">
          // Arsenal
        </h2>
        <div className=" mx-auto items-center px-6 max-w-3xl">
          <div className="flex flex-wrap gap-4">
            {list.map((item, i) =>
              item.img ? (
                <img
                  key={i}
                  src={item.img}
                  className="w-12 h-12 opacity-80 hover:opacity-100"
                />
              ) : (
                <img
                  key={i}
                  src={`https://skillicons.dev/icons?i=${item.icon}`}
                  className="w-12 h-12 opacity-80 hover:opacity-100"
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
