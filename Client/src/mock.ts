// Mock data for Neekunj's Portfolio
export const mockData = {
  personal: {
    name: "Neekunj",
    title: "Web Developer",
    headline: "Hi, I'm Neekunj, a Web Developer.",
    subheadline:
      "I build modern web experiences with performance and aesthetics in mind.",
    about:
      "I'm a passionate web developer with a love for creating beautiful, functional, and user-friendly applications. My journey in tech started with curiosity about how websites work, and it has evolved into a deep appreciation for clean code, modern frameworks, and exceptional user experiences. I enjoy solving complex problems and bringing creative ideas to life through code.",
    image:
      "https://images.unsplash.com/photo-1678856879593-5fad52ed4abe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBzaWxob3VldHRlfGVufDB8fHx8MTc1Mzg0NjQ5M3ww&ixlib=rb-4.1.0&q=85",
    resumeUrl: "#",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    email: "neekunj@example.com",
  },
  skills: {
    frontend: [
      { name: "HTML", icon: "Code" },
      { name: "CSS", icon: "Palette" },
      { name: "JavaScript", icon: "Zap" },
      { name: "React", icon: "Component" },
      { name: "Tailwind CSS", icon: "Wind" },
    ],
    backend: [
      { name: "Node.js", icon: "Server" },
      { name: "Express", icon: "Route" },
      { name: "MongoDB", icon: "Database" },
      { name: "Python", icon: "Code2" },
      { name: "FastAPI", icon: "Rocket" },
    ],
    tools: [
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
      { name: "Figma", icon: "Figma" },
      { name: "Postman", icon: "Send" },
      { name: "VS Code", icon: "Code" },
    ],
  },
  experience: [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "TechCorp Solutions",
      duration: "2023 - Present",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Agency Pro",
      duration: "2022 - 2023",
      description:
        "Created responsive web interfaces using modern frameworks. Focused on user experience and performance optimization.",
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "StartupHub",
      duration: "2021 - 2022",
      description:
        "Built landing pages and web applications. Gained experience with modern development workflows and best practices.",
    },
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      duration: "2018 - 2022",
      specialization: "Software Engineering",
    },
    {
      id: 2,
      degree: "Web Development Bootcamp",
      school: "CodeAcademy Pro",
      duration: "2021",
      specialization: "Full Stack Development",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Analytics Dashboard",
      description:
        "A comprehensive analytics dashboard built with React and D3.js featuring real-time data visualization, interactive charts, and responsive design. Includes user authentication, data filtering, and export capabilities.",
      image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/neekunj/analytics-dashboard",
      demoUrl: "https://analytics-dashboard-demo.vercel.app",
      timeline: "Dec 2023",
      status: "Completed",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with shopping cart, payment integration, inventory management, and admin dashboard. Features include product search, reviews, order tracking, and email notifications.",
      image:
        "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzUzODQ2ODM0fDA&ixlib=rb-4.1.0&q=85",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "TypeScript"],
      githubUrl: "https://github.com/neekunj/ecommerce-platform",
      demoUrl: "https://ecommerce-platform-demo.vercel.app",
      timeline: "Oct 2023",
      status: "Completed",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Collaborative task management application with drag-and-drop functionality, real-time updates, team collaboration features, and progress tracking. Built with modern web technologies.",
      image:
        "https://images.unsplash.com/photo-1554098415-788601c80aef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzUzODQ2ODM0fDA&ixlib=rb-4.1.0&q=85",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Node.js", "Express"],
      githubUrl: "https://github.com/neekunj/task-manager",
      demoUrl: "https://task-manager-demo.netlify.app",
      timeline: "Aug 2023",
      status: "Completed",
    },
    {
      id: 4,
      title: "Photo Gallery App",
      description:
        "Responsive photo gallery application with image optimization, search functionality, and social sharing features. Includes user profiles, photo albums, and cloud storage integration.",
      image:
        "https://images.unsplash.com/photo-1656264142377-22ae3fefdbc3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHx3ZWIlMjBpbnRlcmZhY2V8ZW58MHx8fHwxNzUzODQ2ODQyfDA&ixlib=rb-4.1.0&q=85",
      technologies: [
        "React Native",
        "AWS S3",
        "GraphQL",
        "Apollo",
        "Styled Components",
      ],
      githubUrl: "https://github.com/neekunj/photo-gallery",
      demoUrl: "https://photo-gallery-demo.surge.sh",
      timeline: "Jun 2023",
      status: "Completed",
    },
  ],
};
