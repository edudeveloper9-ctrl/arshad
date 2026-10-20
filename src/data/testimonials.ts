export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  rating: number;
  projectType: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "K. Rajesh Naidu",
    role: "Founder & Managing Director",
    company: "Apex Retail Solutions",
    location: "Tirupati, Andhra Pradesh",
    quote: "Arshadd delivered our custom e-commerce web platform ahead of schedule. The speed, mobile responsiveness, and clean checkout flow increased our customer orders noticeably from week one. Outstanding technical skills and clear communication throughout.",
    rating: 5,
    projectType: "Full-Stack E-Commerce Web App"
  },
  {
    id: "test-2",
    name: "Dr. Sandhya V.",
    role: "Clinical Director",
    company: "Sanjeevani Multi-Specialty Clinic",
    location: "Chittoor, Andhra Pradesh",
    quote: "Building our clinic appointment and patient record system required high security and simplicity for elderly staff. Arshadd handled the entire design and backend flawlessly. He is dependable, receptive to feedback, and extremely talented.",
    rating: 5,
    projectType: "Healthcare SaaS & Portal"
  },
  {
    id: "test-3",
    name: "Vikram Malhotra",
    role: "Chief Technology Officer",
    company: "LogixSync Logistics",
    location: "Bengaluru, Karnataka",
    quote: "We hired Arshadd to develop a Flutter mobile app for courier dispatch. His understanding of real-time GPS streams, offline sync, and battery optimization was top-tier. He thinks like a product engineer, not just a coder.",
    rating: 5,
    projectType: "Flutter Mobile Application"
  },
  {
    id: "test-4",
    name: "Pooja Reddy",
    role: "Creative Director",
    company: "Studio Aura Brands",
    location: "Hyderabad, Telangana",
    quote: "Arshadd transformed our Figma designs into a blazing-fast, animated Next.js website with zero compromises on aesthetics. His glassmorphism and micro-interactions give our agency a truly world-class digital storefront.",
    rating: 5,
    projectType: "UI/UX & Next.js Website"
  }
];
