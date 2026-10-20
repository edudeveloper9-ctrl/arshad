export interface PhoneContact {
  display: string;
  tel: string;
  waNumber: string;
  waLink: string;
  label?: string;
  isPrimary?: boolean;
}

export interface EmailContact {
  email: string;
  isPrimary?: boolean;
  label?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  shortName: string;
  initials: string;
  role: string;
  rolesRotator: string[];
  experienceYears: number;
  experienceBadge: string;
  location: {
    city: string;
    district: string;
    state: string;
    country: string;
    full: string;
  };
  phones: PhoneContact[];
  emails: EmailContact[];
  socials: SocialLink[];
  resumeUrl: string;
  profilePhoto: string;
  tagline: string;
  aboutCopy: string;
  languages: string[];
  currentlyLearning: string[];
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
}

export const PROFILE: ProfileData = {
  name: "MUDIVEDU ARSHADD",
  shortName: "Arshadd",
  initials: "MA",
  role: "Full-Stack Developer, Web & App Developer, UI/UX Designer",
  rolesRotator: [
    "Full-Stack Developer",
    "Mobile App Developer",
    "Website Designer",
    "Problem Solver"
  ],
  experienceYears: 5,
  experienceBadge: "5+ Years Experience",
  location: {
    city: "Sadum",
    district: "Chittoor District",
    state: "Andhra Pradesh",
    country: "India",
    full: "Sadum, Chittoor District, Andhra Pradesh, India"
  },
  phones: [
    {
      display: "+91 93464 85073",
      tel: "+919346485073",
      waNumber: "919346485073",
      waLink: "https://wa.me/919346485073?text=Hi%20Arshadd,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
      label: "Primary Phone & WhatsApp",
      isPrimary: true
    },
    {
      display: "+91 94904 95925",
      tel: "+919490495925",
      waNumber: "919490495925",
      waLink: "https://wa.me/919490495925?text=Hi%20Arshadd,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.",
      label: "Secondary Direct & WhatsApp"
    },
    {
      display: "+91 63007 72023",
      tel: "+916300772023",
      waNumber: "916300772023",
      waLink: "https://wa.me/916300772023?text=Hi%20Arshadd,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.",
      label: "Client Inquiries & WhatsApp"
    }
  ],
  emails: [
    {
      email: "appdevoloper80@gmail.com",
      isPrimary: true,
      label: "Primary Business Inquiries"
    },
    {
      email: "sadakunisa@gmail.com",
      label: "Direct Email"
    },
    {
      email: "makramulanismakramulanis@gmail.com",
      label: "Alternate Contact"
    }
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/mudivedu-arshadd",
      icon: "Github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mudivedu-arshadd",
      icon: "Linkedin"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/arshadd_dev",
      icon: "Instagram"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/arshadd_dev",
      icon: "Twitter"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@arshadd_tech",
      icon: "Youtube"
    }
  ],
  resumeUrl: "/resume.pdf",
  profilePhoto: "/profile.jpg",
  tagline: "I design and build fast, beautiful websites and mobile apps from pixel-perfect interfaces to powerful backends. 5 years of turning ideas into products people love.",
  aboutCopy: "I'm Mudivedu Arshadd, a full-stack developer and designer from Sadum, Chittoor District, Andhra Pradesh, India. With 5 years of hands-on experience, I've designed and developed many websites and mobile apps for clients and businesses, from idea and UI design to development, deployment and support. I love working across the whole stack: crafting smooth, responsive interfaces on the frontend and building secure, scalable APIs and databases on the backend. I care about clean code, great user experience and delivering on time. I'm always learning new technologies and always ready for the next challenge. My goal is simple: build digital products that look amazing and work flawlessly.",
  languages: ["English", "Telugu", "Hindi"],
  currentlyLearning: [
    "Next.js 15 Server Actions",
    "Generative AI & LLM Orchestration",
    "Flutter Impeller Engine",
    "Cloud Native Microservices",
    "Three.js Spatial Graphics"
  ],
  stats: [
    {
      value: "5+",
      label: "Years Experience",
      description: "Continuous hands-on software & product engineering"
    },
    {
      value: "45+",
      label: "Websites Built",
      description: "Modern production web apps, landing pages & portals"
    },
    {
      value: "30+",
      label: "Apps Delivered",
      description: "Cross-platform mobile apps for Android & iOS"
    },
    {
      value: "100%",
      label: "Client Focus",
      description: "On-time delivery with pixel-perfect attention to detail"
    }
  ]
};
