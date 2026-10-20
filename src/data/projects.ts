export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Websites" | "Mobile Apps" | "Full-Stack" | "UI/UX Design";
  categories: ("All" | "Websites" | "Mobile Apps" | "Full-Stack" | "UI/UX Design")[];
  image: string;
  featured?: boolean;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  keyFeatures: string[];
  challenge: string;
  solution: string;
  liveUrl: string;
  githubUrl: string;
  playStoreUrl?: string;
  stats?: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: "aura-luxe-ecommerce",
    title: "Aura Luxe - Premium E-Commerce Suite",
    tagline: "High-conversion luxury jewelry & lifestyle store with instant checkout",
    category: "Full-Stack",
    categories: ["All", "Websites", "Full-Stack", "UI/UX Design"],
    image: "/src/assets/images/project_ecommerce_1792479376565.jpg",
    featured: true,
    shortDescription: "A headless e-commerce flagship application engineered for luxury retail, featuring instant search, custom cart state machines, and Stripe 3D-Secure checkouts.",
    fullDescription: "Aura Luxe combines refined luxury brand aesthetics with sub-100ms page transitions. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS on the frontend, with a Node.js/Express and MongoDB backend for real-time inventory management and webhooks.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe API", "Node.js"],
    keyFeatures: [
      "Sub-second catalog search with debounced fuzzy matching",
      "Optimistic UI shopping bag with synchronized local persistence",
      "Dynamic multi-currency and regional tax calculation",
      "Stripe payment element integration with Apple Pay / Google Pay support",
      "Responsive admin control panel for real-time order dispatch"
    ],
    challenge: "Handling high-volume concurrent cart updates during flash sales without inventory over-allocation or degraded client response times.",
    solution: "Implemented Redis-backed atomic reservation locks paired with optimistic frontend UI updates, cutting cart abandonment by 28%.",
    liveUrl: "https://demo.arshadd.dev/aura-luxe",
    githubUrl: "https://github.com/mudivedu-arshadd/aura-luxe-storefront",
    stats: [
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Checkout Conversion", value: "+28%" },
      { label: "Catalog Response", value: "85ms" }
    ]
  },
  {
    id: "gourmet-dash-app",
    title: "GourmetDash - Smart Food Delivery App",
    tagline: "Cross-platform mobile delivery client with live driver telemetry",
    category: "Mobile Apps",
    categories: ["All", "Mobile Apps", "Full-Stack"],
    image: "/src/assets/images/project_food_delivery_1792479376928.jpg",
    featured: false,
    shortDescription: "A cross-platform Flutter mobile application providing real-time GPS courier tracking, interactive dish customization, and order status timelines.",
    fullDescription: "GourmetDash serves both foodies and busy professionals. It integrates interactive map routes, driver dispatch algorithms, and instant push notifications via Firebase Cloud Messaging.",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps API", "Node.js", "Express"],
    keyFeatures: [
      "Real-time turn-by-turn courier GPS tracking on interactive map",
      "Custom culinary modifier builder (toppings, spice level, notes)",
      "Instant push alerts for order preparation stages",
      "Digital wallet support with UPI and razor-fast checkout",
      "Driver communication via direct in-app WhatsApp call bridge"
    ],
    challenge: "Maintaining steady 60 FPS mobile rendering during live map rendering and WebSocket status stream transitions.",
    solution: "Employed Flutter's Impeller rendering pipeline with isolated background stream compute isolates for battery-efficient location tracking.",
    liveUrl: "https://demo.arshadd.dev/gourmet-dash",
    githubUrl: "https://github.com/mudivedu-arshadd/gourmet-dash-flutter",
    playStoreUrl: "https://play.google.com/store/apps/details?id=dev.arshadd.gourmetdash",
    stats: [
      { label: "Active Installs", value: "10K+" },
      { label: "Play Store Rating", value: "4.9 ★" },
      { label: "FPS Stability", value: "60 FPS" }
    ]
  },
  {
    id: "medcloud-hospital-mgmt",
    title: "MedCloud - Hospital Command Center",
    tagline: "Clinical telemetry & hospital resource orchestration dashboard",
    category: "Full-Stack",
    categories: ["All", "Websites", "Full-Stack"],
    image: "/src/assets/images/project_hospital_mgmt_1792479377622.jpg",
    featured: false,
    shortDescription: "Comprehensive clinical management SaaS suite connecting ICU patient telemetry, doctor consultation rosters, and ward occupancy analytics.",
    fullDescription: "MedCloud was built for healthcare clinics and multi-specialty hospitals needing real-time visibility into bed capacities, automated lab report alerts, and electronic health record (EHR) compliance.",
    tags: ["React 19", "TypeScript", "PostgreSQL", "Node.js", "Tailwind CSS", "Socket.io"],
    keyFeatures: [
      "Live ICU patient vitals monitoring with threshold anomaly alerts",
      "Dynamic ward occupancy bed mapping (ICU, General, Telehealth)",
      "Doctor appointment scheduling engine with automated WhatsApp reminders",
      "Role-Based Access Control (Admins, Doctors, Nurses, Receptionists)",
      "Encrypted PDF export for discharge summaries and invoices"
    ],
    challenge: "Handling complex multi-role authorization hierarchies while guaranteeing patient data privacy and sub-100ms dashboard refreshes.",
    solution: "Architected clean PostgreSQL relational schemas with row-level security and JWT session validation, certified for strict health data governance.",
    liveUrl: "https://demo.arshadd.dev/medcloud",
    githubUrl: "https://github.com/mudivedu-arshadd/medcloud-hospital-suite",
    stats: [
      { label: "Beds Monitored", value: "500+" },
      { label: "Report Latency", value: "<150ms" },
      { label: "Uptime", value: "99.98%" }
    ]
  },
  {
    id: "cryptox-messenger",
    title: "CryptoX - Real-Time Encrypted Messenger",
    tagline: "End-to-end encrypted messaging app with audio waves & file sharing",
    category: "Mobile Apps",
    categories: ["All", "Mobile Apps", "Full-Stack"],
    image: "/src/assets/images/project_chat_app_1792479377230.jpg",
    featured: false,
    shortDescription: "Secure mobile chat platform with peer-to-peer audio messaging, ephemeral chats, and instant typing indicators designed with dark glassmorphism.",
    fullDescription: "Built with React Native and WebSockets, CryptoX provides military-grade encrypted messaging, waveform audio voice notes, and media sharing with offline message queues.",
    tags: ["React Native", "WebSockets", "Node.js", "Redis", "WebRTC", "Tailwind"],
    keyFeatures: [
      "Client-side message encryption with zero server plaintext storage",
      "Interactive audio waveform recorder and speed-adjustable player",
      "Offline sync queue that dispatches instantly upon network restore",
      "Typing status, read receipts, and online presence heartbeat",
      "Low bandwidth audio call fallback"
    ],
    challenge: "Seamlessly delivering messages across erratic 3G/4G connections without duplicate deliveries or lost packets.",
    solution: "Designed an idempotent client-server acknowledgment queue with local SQLite cache synchronization.",
    liveUrl: "https://demo.arshadd.dev/cryptox",
    githubUrl: "https://github.com/mudivedu-arshadd/cryptox-messenger",
    playStoreUrl: "https://play.google.com/store/apps/details?id=dev.arshadd.cryptox",
    stats: [
      { label: "Messages Handled", value: "2M+" },
      { label: "Delivery Latency", value: "45ms" },
      { label: "Memory Footprint", value: "<40MB" }
    ]
  },
  {
    id: "novasphere-business-portal",
    title: "NovaSphere - Enterprise Corporate Portal",
    tagline: "Scalable corporate web experience with lead generation automation",
    category: "Websites",
    categories: ["All", "Websites", "UI/UX Design"],
    image: "/src/assets/images/project_ecommerce_1792479376565.jpg",
    featured: false,
    shortDescription: "Multi-regional corporate website with CMS integration, client case study showcase, and integrated CRM lead capture pipelines.",
    fullDescription: "Engineered for an international IT consulting firm, NovaSphere features interactive services pricing calculators, automated appointment booking, and dynamic multi-language localization.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "REST API"],
    keyFeatures: [
      "Interactive enterprise service configurator and quote generator",
      "Headless CMS integration for frictionless marketing updates",
      "Global CDN caching with 100% Google Lighthouse accessibility score",
      "Automated lead sync to HubSpot CRM via webhooks"
    ],
    challenge: "Delivering rich animations and high visual fidelity without sacrificing Core Web Vitals.",
    solution: "Implemented strict code-splitting, CSS hardware acceleration, and next/image responsive AVIF pipelines, reaching 99 mobile performance.",
    liveUrl: "https://demo.arshadd.dev/novasphere",
    githubUrl: "https://github.com/mudivedu-arshadd/novasphere-corp",
    stats: [
      { label: "Organic Inbound", value: "+145%" },
      { label: "Bounce Rate", value: "21%" }
    ]
  },
  {
    id: "verve-creative-booking",
    title: "Verve - Creative Studio & Booking Engine",
    tagline: "Editorial portfolio, appointment calendar & digital client onboarding",
    category: "UI/UX Design",
    categories: ["All", "Websites", "UI/UX Design"],
    image: "/src/assets/images/project_chat_app_1792479377230.jpg",
    featured: false,
    shortDescription: "A bespoke creative agency showcase with interactive 3D card tilt effects, automated consultation scheduling, and client invoice downloads.",
    fullDescription: "Verve is a creative production studio portfolio showcasing case studies, video reels, and client testimonial sliders with a glassmorphism design system.",
    tags: ["Figma", "UI/UX Design", "React", "Tailwind CSS", "Lucide Icons"],
    keyFeatures: [
      "Dynamic case study masonry grid with instant filtering",
      "Interactive 3D card tilt with ambient cursor lighting",
      "Integrated client consultation appointment booking",
      "Dark and light theme toggle with smooth CSS variable transition"
    ],
    challenge: "Creating a standout visual experience that felt fresh, fluid and memorable on mobile screens.",
    solution: "Developed custom lightweight glass shaders and GPU-accelerated motion choreography.",
    liveUrl: "https://demo.arshadd.dev/verve-studio",
    githubUrl: "https://github.com/mudivedu-arshadd/verve-creative-suite",
    stats: [
      { label: "Client Inquiries", value: "3x Growth" },
      { label: "Avg Session", value: "3m 40s" }
    ]
  }
];
