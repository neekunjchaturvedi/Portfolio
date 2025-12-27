export const mockData = {
  personal: {
    name: "Neekunj Chaturvedi",
    title: "Full Stack Developer",
    headline: "Hi, I'm Neekunj Chaturvedi, a Software Engineer.",
    subheadline:
      "I build scalable, high-performance Softwares with clean architecture and modern technologies that actually scale.",
    about:
      "Software Engineer who builds scalable softwares from 0 —> 1 combining strong system design, modular architecture, and efficient state management. Experienced in developing production-ready systems with robust backend dev, clean abstractions, and a focus on performance, reliability, and long-term maintainability.",

    image:
      "https://images.unsplash.com/photo-1678856879593-5fad52ed4abe?crop=entropy&cs=srgb&fm=jpg&q=85",
    resumeUrl: "https://neekunjchaturvedi.netlify.app/",
    githubUrl: "https://github.com/neekunjchaturvedi",
    linkedinUrl: "https://linkedin.com/in/neekunj-chaturvedi",
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
      role: "Full-Stack Software Engineer",
      company: "Outceedo (Remote)",
      duration: "July 2025 - Present",

      description:
        "Engineered end-to-end development of a microservices-based platform under Senior Engineer, designing and scaling independent services using secure API architectures. Implemented message queues and RPC-based service communication to support complex integrations and real-time workflows. Served as the lead maintainer and top contributor to the frontend repository, establishing scalable UI patterns using React, Redux, and ShadCN. Architected and managed AWS infrastructure to support scaling and performance. Built real-time notification systems, internal admin panels, and support tooling.",
    },
    {
      id: 2,
      role: "Frontend and Integration Engineer",
      company: "Moovicart (Remote)",
      duration: "April 2025 - June 2025",

      description:
        "Redesigned their frontend architecture to support modular architecture, high cohesion and low coupling with centralized state management via Redux. Implemented secure payment gateway integrations, handling edge cases, failures, and transaction workflows with robust error handling. Built and integrated WebRTC-based real-time video communication features. Improved overall API efficiency and frontend performance through optimized data flow and caching strategies.",
    },
    {
      id: 3,
      role: "Full-Stack Developer",
      company: "WallStorie",
      duration: "Dec 2024 - March 2025",

      description:
        "Part of the core development team. Developed real-time order management, admin panel, and scalable frontend using React with Redux. Redesigned backend with Node.js and Express, reducing API response time by 35%.",
    },
    {
      id: 3,
      role: "Freelance",
      company: "",
      duration: "Dec 2024 - Present",

      description:
        "Delivered Web designs for Freedom with AI, NotForCollege and delivered full-stack Website for ABMK Car Rentals (Dubai) with complete frontend and backend. ",
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
    // {
    //   id: 2,
    //   degree: "Intermediate - MPC (Maths, Physics, Chemistry)",
    //   school: "Sri Chaitanya Junior College, Hyderabad, India",
    //   duration: "Jun 2020 - July 2022",
    //   specialization: "Science",
    // },
  ],
  projects: [
    {
      id: 1,
      title: "Renard",
      description:
        "Renard is a Dev productivity software which brings all your scattered LLM interations and context at one place and generates insights.",
      technologies: [
        "Browser-Extension",
        "CLI-Tool",
        "Typescript",
        "Express",
        "RabbitMQ",
        "grpc",
      ],
      githubUrl: "",
      demoUrl: "https://renard.live",
      timeline: "Dec 2025 - Present",
      status: "Building",
    },

    {
      id: 1,
      title: "SpectraQ",
      description:
        "HFT platform which streamlines crypto trading with State Channels for processing the trades off-chain and finally after termination pushing it on-chain. Also features Community platform built using robust sockets scaling with redis pub-sub.",
      technologies: [
        "Microservices",
        "TypeScript",
        "Express",
        "Redis",
        "RabbitMQ",
        "Supabase",
        "prisma",
        "Redux",
      ],
      githubUrl: "",
      demoUrl: "https://spectraq.org",
      timeline: "Oct 2025 - Present",
      status: "Building",
    },
    {
      id: 3,
      title: "Abuse",
      description:
        "A terminal integrated tool that roasts you when you mess up on the terminal. Hit 250+ downloads on npm within 3 days.",
      technologies: ["NodeJs", "Npm", "CommanderJS", "ChalkJS"],
      githubUrl: "https://github.com/neekunjchaturvedi/Abuse",
      demoUrl: "https://www.npmjs.com/package/abuse-plus",
      timeline: "Nov 2025",
      status: "Completed",
    },

    {
      id: 4,
      title: "SenseiX",
      description:
        "Dynamic Personalized Learning engine, Generates learning content in your preferred Genre, FlashCards, descriptions, Detailed Explainaions all gamified.",
      technologies: [
        "React Native",
        "Google GenAI SDK",
        "Typescipt",
        "Express",
      ],
      githubUrl: "https://github.com/neekunjchaturvedi/senseiX",
      demoUrl: "",
      timeline: "Dec 2025",
      status: "Completed",
    },
    {
      id: 5,
      title: "D-Hosting",
      description:
        "Decentralized Web Hosting Platform with an inbuilt Search Engine using IPFS and Solidity smart contracts.",
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
      id: 6,
      title: "TopCode",
      description:
        "Code editor with multi-language support for compiling and running code.",
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
