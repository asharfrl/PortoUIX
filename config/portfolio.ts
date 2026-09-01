import { ValidPortfolioCategory, ValidCaseStudyStatus } from "./constants";

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: ValidPortfolioCategory;
  tags: string[];
  thumbnail: string;
  status: ValidCaseStudyStatus;
}

export const caseStudies: CaseStudy[] = [
  // === ASPEK PENDIDIKAN ===
  {
    id: "edu-1",
    // title: "Redesain Sistem Informasi Akademik Kampus",
    // description:
    //   "Merancang ulang antarmuka SIAKAD agar lebih intuitif, aksesibel, dan efisien untuk mahasiswa dan dosen. Fokus pada penyederhanaan alur pengisian KRS dan akses informasi akademik.",
    // category: "pendidikan",
    title: "",
    description:
      "",
    category: "pendidikan",
    tags: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    thumbnail: "/portfolio/placeholder-edu.png",
    status: "In Progress",
  },
  // {
  //   id: "edu-2",
  //   title: "Aplikasi EdTech Interaktif untuk Pembelajaran Daring",
  //   description:
  //     "Mendesain pengalaman belajar daring yang engaging dengan fitur quiz interaktif, progress tracking, dan collaborative notes untuk meningkatkan retensi belajar mahasiswa.",
  //   category: "pendidikan",
  //   tags: ["Design Thinking", "UI Design", "Gamification", "Accessibility"],
  //   thumbnail: "/portfolio/placeholder-edu.png",
  //   status: "Planning",
  // },
  // {
  //   id: "edu-3",
  //   title: "Platform E-Learning Aksesibel untuk Difabel",
  //   description:
  //     "Merancang platform belajar online yang inklusif dengan dukungan screen reader, high contrast mode, dan navigasi keyboard-friendly sesuai standar WCAG 2.1.",
  //   category: "pendidikan",
  //   tags: [
  //     "Accessibility",
  //     "Inclusive Design",
  //     "WCAG 2.1",
  //     "User Interview",
  //   ],
  //   thumbnail: "/portfolio/placeholder-edu.png",
  //   status: "Planning",
  // },
  // {
  //   id: "edu-4",
  //   title: "Redesain Portal Perpustakaan Digital",
  //   description:
  //     "Menyederhanakan proses pencarian dan peminjaman buku digital dengan pendekatan information architecture yang terstruktur dan search UX yang optimal.",
  //   category: "pendidikan",
  //   tags: [
  //     "Information Architecture",
  //     "Search UX",
  //     "Card Sorting",
  //     "Heuristic Evaluation",
  //   ],
  //   thumbnail: "/portfolio/placeholder-edu.png",
  //   status: "Planning",
  // },

  // === ASPEK INDUSTRI ===
  {
    id: "ind-1",
    // title: "Dashboard SaaS B2B Analytics",
    // description:
    //   "Merancang dashboard analitik untuk platform SaaS B2B dengan visualisasi data yang jelas, filtering yang powerful, dan pengalaman onboarding yang smooth untuk pengguna bisnis.",
    // category: "industri",
    title: "",
    description:
      "",
    category: "industri",
    tags: [
      "Dashboard Design",
      "Data Visualization",
      "SaaS",
      "Design System",
    ],
    thumbnail: "/portfolio/placeholder-ind.png",
    status: "In Progress",
  },
  // {
  //   id: "ind-2",
  //   title: "E-commerce Checkout Flow Optimization",
  //   description:
  //     "Mengoptimalkan alur checkout e-commerce untuk mengurangi cart abandonment rate. Meliputi redesain form pembayaran, progress indicator, dan trust signals.",
  //   category: "industri",
  //   tags: [
  //     "Conversion Optimization",
  //     "A/B Testing",
  //     "Checkout UX",
  //     "E-commerce",
  //   ],
  //   thumbnail: "/portfolio/placeholder-ind.png",
  //   status: "Planning",
  // },
  // {
  //   id: "ind-3",
  //   title: "FinTech Mobile Banking UX Redesign",
  //   description:
  //     "Redesain pengalaman mobile banking untuk generasi milenial dan Gen Z dengan fokus pada kemudahan transfer, visualisasi pengeluaran, dan fitur budgeting yang intuitif.",
  //   category: "industri",
  //   tags: ["Mobile UX", "FinTech", "Persona Development", "Journey Mapping"],
  //   thumbnail: "/portfolio/placeholder-ind.png",
  //   status: "Planning",
  // },
  // {
  //   id: "ind-4",
  //   title: "Healthcare Appointment Booking System",
  //   description:
  //     "Mendesain sistem booking janji temu dokter online yang memprioritaskan kecepatan, kejelasan informasi, dan pengalaman yang menenangkan bagi pasien.",
  //   category: "industri",
  //   tags: ["Healthcare UX", "Service Design", "Empathy Mapping", "Prototype"],
  //   thumbnail: "/portfolio/placeholder-ind.png",
  //   status: "Planning",
  // },
];

export const educationCaseStudies = caseStudies.filter(
  (cs) => cs.category === "pendidikan"
);

export const industryCaseStudies = caseStudies.filter(
  (cs) => cs.category === "industri"
);
