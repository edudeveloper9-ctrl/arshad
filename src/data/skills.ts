export interface SkillItem {
  name: string;
  level: number; // 0-100
  category: string;
  iconName?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "High-performance, responsive, accessible web interfaces",
    icon: "Layout",
    skills: [
      { name: "React", level: 95, category: "frontend", featured: true },
      { name: "Next.js", level: 92, category: "frontend", featured: true },
      { name: "TypeScript", level: 90, category: "frontend", featured: true },
      { name: "JavaScript (ES6+)", level: 95, category: "frontend" },
      { name: "Tailwind CSS", level: 96, category: "frontend", featured: true },
      { name: "HTML5 & CSS3", level: 98, category: "frontend" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    subtitle: "Robust server logic, microservices and secure APIs",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 92, category: "backend", featured: true },
      { name: "Express.js", level: 90, category: "backend", featured: true },
      { name: "REST APIs", level: 95, category: "backend" },
      { name: "Firebase Auth & Firestore", level: 88, category: "backend", featured: true }
    ]
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    subtitle: "Native-feeling apps for Android and iOS ecosystems",
    icon: "Smartphone",
    skills: [
      { name: "Flutter", level: 90, category: "mobile", featured: true },
      { name: "React Native", level: 88, category: "mobile", featured: true },
      { name: "Android SDK", level: 85, category: "mobile" }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    subtitle: "Scalable data architecture and optimized queries",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 90, category: "databases", featured: true },
      { name: "PostgreSQL", level: 86, category: "databases", featured: true },
      { name: "MySQL", level: 88, category: "databases" },
      { name: "Firebase Realtime DB", level: 89, category: "databases" }
    ]
  },
  {
    id: "design",
    title: "UI/UX & Product Design",
    subtitle: "Design systems, rapid wireframing and user research",
    icon: "Palette",
    skills: [
      { name: "Figma", level: 94, category: "design", featured: true },
      { name: "UI/UX Design", level: 92, category: "design", featured: true },
      { name: "Responsive Layouts", level: 96, category: "design" },
      { name: "Brand Identity", level: 85, category: "design" }
    ]
  },
  {
    id: "tools",
    title: "DevOps & Tooling",
    subtitle: "Workflow automation, version control and deployment",
    icon: "Terminal",
    skills: [
      { name: "Git & GitHub", level: 92, category: "tools", featured: true },
      { name: "Postman", level: 90, category: "tools" },
      { name: "Docker", level: 80, category: "tools" },
      { name: "Vercel / Cloud Run", level: 92, category: "tools", featured: true },
      { name: "VS Code", level: 95, category: "tools" }
    ]
  }
];

export const MARQUEE_SKILLS = [
  "React.js",
  "Next.js 14",
  "TypeScript",
  "Node.js",
  "Flutter",
  "React Native",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Express",
  "Figma",
  "REST APIs",
  "Docker",
  "Vercel",
  "Git & GitHub"
];
