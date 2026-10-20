export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  deliverables: string[];
  popular?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Custom Website Development",
    shortDesc: "High-performance, modern websites built with React, Next.js, and TypeScript.",
    fullDesc: "From custom corporate web portals to high-converting marketing landing pages, I engineer blazing-fast, SEO-optimized, responsive websites tailored to your exact business objectives.",
    icon: "Globe",
    deliverables: [
      "Next.js / React Modern SPA or SSR Architecture",
      "Tailwind CSS Responsive & Mobile-First Styling",
      "Full SEO, OpenGraph & Structured Data Optimization",
      "Sub-second load times & 95+ Lighthouse Scores"
    ],
    popular: true
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development (Android / iOS)",
    shortDesc: "Cross-platform and native mobile apps that run smoothly on every smartphone.",
    fullDesc: "Build sleek, engaging mobile experiences using Flutter or React Native. From clean offline-first architecture to push notifications, live GPS tracking, and Google Play / App Store publishing.",
    icon: "Smartphone",
    deliverables: [
      "Cross-Platform Flutter or React Native Codebase",
      "Offline Storage, Sync & Push Notifications",
      "Camera, Geolocation & Native Device API Bridges",
      "Google Play Store & App Store Deployment Guidance"
    ],
    popular: true
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Website Design",
    shortDesc: "Intuitive, memorable, and user-centric interfaces crafted in Figma.",
    fullDesc: "Great code starts with great design. I craft comprehensive Figma design systems, wireframes, user journey maps, and high-fidelity interactive prototypes that users love navigating.",
    icon: "Palette",
    deliverables: [
      "Figma Component Libraries & Design Tokens",
      "User Journey Mapping & Wireframe Prototypes",
      "Mobile & Desktop Responsive Breakpoints",
      "Accessible Typography & Contrast Standards (WCAG AA)"
    ]
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    shortDesc: "Scalable REST APIs, databases, authentication, and cloud microservices.",
    fullDesc: "Power your applications with secure, battle-tested backends. Specializing in Node.js, Express, PostgreSQL, MongoDB, Redis caching, and Firebase authentication engines.",
    icon: "Server",
    deliverables: [
      "RESTful API & GraphQL Endpoint Architecture",
      "Database Schema Design (PostgreSQL / MongoDB)",
      "Role-Based Access Control & JWT / OAuth Security",
      "Third-party integrations (Payments, WhatsApp, CRMs)"
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    shortDesc: "Turn visitors into repeat customers with high-converting online storefronts.",
    fullDesc: "End-to-end e-commerce development featuring frictionless product catalogs, dynamic discount codes, inventory alerts, and instant payment gateways including Razorpay, Stripe, and UPI.",
    icon: "ShoppingBag",
    deliverables: [
      "Product Catalog, Variants & Category Filtering",
      "Instant Cart State & Multi-currency Checkout",
      "Stripe / Razorpay / UPI Payment Gateways",
      "Admin Order Management & Automated Invoicing"
    ]
  },
  {
    id: "maintenance-support",
    title: "Website Maintenance, Hosting & Support",
    shortDesc: "Ongoing maintenance, security hardening, cloud hosting, and feature upgrades.",
    fullDesc: "Keep your digital presence running at peak performance. Regular security patches, automated backups, speed tuning, SSL certificates, and fast on-call technical support.",
    icon: "ShieldCheck",
    deliverables: [
      "24/7 Uptime Monitoring & Rapid Incident Response",
      "Security Audits, Package Updates & Vulnerability Fixes",
      "Performance Benchmarking & Database Indexing",
      "Continuous Deployment Setup on Vercel, VPS, or Cloud"
    ]
  }
];
