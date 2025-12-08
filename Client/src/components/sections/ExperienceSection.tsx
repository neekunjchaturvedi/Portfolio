interface ExperienceItem {
  id: string | number;
  role: string;
  duration: string;
  company: string;
  description: string;
}

interface ExperienceSectionProps {
  data: ExperienceItem[];
}

const ExperienceSection = ({ data }: ExperienceSectionProps) => {
  return (
    <section
      id="experience"
      className="py-16 px-4 md:px-0 bg-black text-white border-t border-gray-900"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-lg font-mono text-gray-500 mb-12 tracking-wider uppercase opacity-80">
          // Professional History
        </h2>

        <div className="space-y-16 ">
          {data.map((job) => (
            <div
              key={job.id}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start "
            >
              <div className="text-sm font-mono text-gray-500 pt-1 group-hover:text-gray-300 transition-colors">
                {job.duration}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors duration-300">
                  {job.role}
                </h3>
                <div className="text-gray-400 mb-4 font-medium">
                  {job.company}
                </div>
                <p className="text-gray-500 leading-relaxed text-base group-hover:text-gray-400 transition-colors duration-300">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
