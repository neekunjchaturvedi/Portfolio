// Updated mock data for Neekunj's Portfolio
export const mockData = {
  personal: {
    name: "Neekunj Chaturvedi",
    title: "Full Stack Developer",
    headline: "Hi, I'm Neekunj Chaturvedi, a Full Stack Dev.",
    subheadline:
      "I build scalable, high-performance web applications with clean architecture and modern technologies.",
    about:
      "Full Stack Developer specializing in the MERN stack, scalable architectures, and efficient state management. Experienced in building performant, maintainable applications with robust API integrations and clean, modular code.",

    image:
      "https://images.unsplash.com/photo-1678856879593-5fad52ed4abe?crop=entropy&cs=srgb&fm=jpg&q=85",
    resumeUrl: "https://neekunjchaturvedi.netlify.app/",
    githubUrl: "https://github.com/neekunjchaturvedi",
    linkedinUrl: "https://linkedin.com/in/neekunj-chaturvedi-293223257",
    email: "neekunjchaturvedi3@gmail.com",
  },
  skills: {
    frontend: [
      { name: "HTML", icon: "Code", level: 5 },
      { name: "CSS", icon: "Palette", level: 5 },
      { name: "JavaScript", icon: "Zap", level: 5 },
      { name: "TypeScript", icon: "Type", level: 4 },
      { name: "React", icon: "Component", level: 5 },
      { name: "NextJS", icon: "Layers", level: 4 },
      { name: "Redux", icon: "RefreshCw", level: 4 },
      { name: "Tailwind", icon: "Wind", level: 5 },
      { name: "Bootstrap", icon: "Layout", level: 4 },
      { name: "MaterialUI", icon: "Layers", level: 4 },
      { name: "ShadCN", icon: "Box", level: 4 },
      { name: "AntDesign", icon: "Grid", level: 3 },
      { name: "Figma", icon: "Figma", level: 4 },
    ],
    backend: [
      { name: "Nodejs", icon: "Server", level: 5 },
      { name: "Express", icon: "Route", level: 5 },
      { name: "Python", icon: "Code2", level: 3 },
      { name: "Java", icon: "Coffee", level: 3 },
      { name: "MongoDB", icon: "Database", level: 4 },
      { name: "PostgreSQL", icon: "Database", level: 4 },
      { name: "MySQL", icon: "Database", level: 3 },
      { name: "Supabase", icon: "Cloud", level: 4 },
    ],
    tools: [
      { name: "Git", icon: "GitBranch", level: 5 },
      { name: "GitHub", icon: "Github", level: 5 },
      { name: "GitHubActions", icon: "Github", level: 3 },
      { name: "NPM", icon: "Package", level: 4 },
      { name: "Postman", icon: "Send", level: 4 },
      { name: "Docker", icon: "Send", level: 3 },
      { name: "AWS", icon: "Cloud", level: 3 },
      { name: "Vercel", icon: "Triangle", level: 4 },
      { name: "Netlify", icon: "Globe", level: 4 },
      { name: "Heroku", icon: "Server", level: 3 },
      { name: "Linux", icon: "Terminal", level: 3 },
    ],
  },
  experience: [
    {
      id: 1,
      role: "Full-Stack Developer - Intern",
      company: "Outceedo (Remote)",
      duration: "July 2025 - Present",
      description:
        "Worked with microservices architecture, developed APIs, integrated RESTful APIs across systems, and managed the frontend repository as the top contributor. Implemented Redux, used ShadCN for UI, and set up Slack notifications in CI/CD pipelines.",
    },
    {
      id: 2,
      role: "Frontend and Integration Engineer - Intern",
      company: "Moovicart (Remote)",
      duration: "April 2025 - June 2025",
      description:
        "Built a scalable frontend architecture using React.js, integrated RESTful APIs with robust error handling, implemented WebRTC for video calls, and improved API efficiency by 35% using Redux for state management.",
    },
    {
      id: 3,
      role: "Full-Stack Developer - Intern",
      company: "WallStorie",
      duration: "Dec 2024 - March 2025",
      description:
        "Part of the core development team. Developed real-time order management, admin panel, and scalable frontend using React with Redux. Redesigned backend with Node.js and Express, reducing API response time by 35%.",
    },
  ],
  education: [
    {
      id: 1,
      degree: "B.Tech - Computer Science and Information Technology",
      school: "Institute of Aeronautical Engineering, Hyderabad, India",
      duration: "Nov 2022 - July 2026",
      specialization: "Software Engineering",
    },
    {
      id: 2,
      degree: "Intermediate - MPC (Maths, Physics, Chemistry)",
      school: "Sri Chaitanya Junior College, Hyderabad, India",
      duration: "Jun 2020 - July 2022",
      specialization: "Science",
    },
  ],
  projects: [
    {
      id: 1,
      title: "D-Hosting",
      description:
        "Decentralized Web Hosting Platform with an inbuilt Search Engine using IPFS and Solidity smart contracts.",
      image: "https://images.unsplash.com/photo-106344.jpeg",
      technologies: [
        "IPFS",
        "TypeScript",
        "NextJS",
        "Solidity",
        "NeonDB",
        "Ethereum",
      ],
      githubUrl: "https://github.com/neekunjchaturvedi/D-Hosting",
      demoUrl: "",
      timeline: "Jan 2025",
      status: "Completed",
    },
    {
      id: 2,
      title: "TopCode",
      description:
        "Code editor with multi-language support for compiling and running code.",
      image: "https://images.unsplash.com/photo-106344.jpeg",
      technologies: ["React.js", "API Integration"],
      githubUrl: "https://github.com/neekunjchaturvedi/Topcode",
      demoUrl: "https://top-code.netlify.app/",
      timeline: "Oct 2024",
      status: "Completed",
    },
    {
      id: 3,
      title: "TopCode",
      description:
        "Code editor with multi-language support for compiling and running code.",
      image: "https://images.unsplash.com/photo-106344.jpeg",
      technologies: ["React.js", "API Integration"],
      githubUrl: "https://github.com/neekunjchaturvedi/Topcode",
      demoUrl: "https://top-code.netlify.app/",
      timeline: "Oct 2024",
      status: "Completed",
    },
  ],
  achievements: [
    {
      id: 1,
      title: "3rd Place - DataNyx 2024",
      description: "Telangana’s First Datathon",
    },
    {
      id: 2,
      title: "1st Place - HackForge 2025",
      description: "Best Innovation Recognition among 200 teams",
    },
  ],
  certifications: [{ id: 1, title: "GitHub Foundations", date: "Feb 2024" }],
};
