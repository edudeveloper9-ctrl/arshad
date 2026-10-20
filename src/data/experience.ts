export interface ExperienceItem {
  id: string;
  type: "work" | "education";
  role: string;
  organization: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "lead-dev",
    type: "work",
    role: "Senior Full-Stack & Mobile Developer",
    organization: "Independent Consultant & Digital Solutions",
    location: "Chittoor / Sadum & Remote",
    period: "2023 - Present",
    current: true,
    description: "Leading end-to-end architecture, development, and deployment of mission-critical web applications and native-feel mobile apps for global and regional clients.",
    achievements: [
      "Engineered and launched 20+ responsive web platforms and cross-platform Flutter/React Native mobile applications with 99.9% uptime.",
      "Spearheaded database migrations and API performance tuning, decreasing average query response latency by 45%.",
      "Mentored junior developers on TypeScript best practices, Git collaboration workflows, and Figma-to-code design system tokenization."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Flutter", "PostgreSQL", "Tailwind CSS", "Firebase"]
  },
  {
    id: "fullstack-eng",
    type: "work",
    role: "Full-Stack Web & App Developer",
    organization: "Apex Core Software Technologies",
    location: "Andhra Pradesh, India",
    period: "2021 - 2023",
    description: "Built scalable RESTful microservices, real-time messaging modules, and dynamic frontend portals for e-commerce, healthcare, and education sectors.",
    achievements: [
      "Designed and implemented high-volume e-commerce checkout flows processing thousands of secure transactions monthly.",
      "Integrated real-time WebSockets and push notification pipelines for immediate delivery dispatch and patient telemetry alerts.",
      "Refactored legacy codebases into modern modular component libraries, boosting feature delivery speed by 35%."
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "MySQL", "Socket.io", "Docker", "AWS / Vercel"]
  },
  {
    id: "junior-dev",
    type: "work",
    role: "Frontend Developer & UI Designer",
    organization: "InnovateLabs Interactive",
    location: "Andhra Pradesh, India",
    period: "2019 - 2021",
    description: "Turned high-fidelity Figma prototypes into pixel-perfect responsive web pages and built cross-browser accessible interfaces.",
    achievements: [
      "Crafted 25+ client landing pages, marketing funnels, and responsive portals with sub-second initial load speeds.",
      "Established comprehensive Figma design kits and responsive grid systems adopted across cross-functional teams.",
      "Conducted usability testing and accessibility audits to ensure full WCAG AA compliance across all client releases."
    ],
    technologies: ["HTML5", "CSS3 / SCSS", "JavaScript ES6+", "React", "Figma", "REST APIs", "Git"]
  },
  {
    id: "btech-degree",
    type: "education",
    role: "Bachelor of Technology in Computer Science & Engineering",
    organization: "JNTU Affiliated Engineering Institute",
    location: "Andhra Pradesh, India",
    period: "Graduated with Distinction",
    description: "Rigorous coursework in Data Structures & Algorithms, Object-Oriented Software Engineering, Database Systems, Computer Networks, and Cloud Architectures.",
    achievements: [
      "Lead Developer in Capstone project: Real-time Campus Attendance & Academic Telemetry Management System.",
      "Consistently achieved top marks in software engineering, database design, and algorithmic problem-solving labs.",
      "Organized university technical symposiums, hackathons, and web development workshops for peers."
    ],
    technologies: ["Data Structures", "Algorithms", "Software Architecture", "Relational Databases", "Network Protocols"]
  }
];
