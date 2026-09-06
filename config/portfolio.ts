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
  {
    id: "edu-1",
    title: "Sistem Informasi Akademik",
    description:
      "Perancangan ulang antarmuka portal akademik mahasiswa untuk mempermudah akses informasi perkuliahan dan penyusunan rencana studi.",
    category: "pendidikan",
    tags: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    thumbnail: "/portfolio/placeholder-edu.png",
    status: "In Progress",
  },
  // {
  //   id: "edu-2",
  //   title: "Platform Pembelajaran Digital",
  //   description:
  //     "Eksplorasi desain antarmuka ruang belajar digital interaktif dengan fokus pada kemudahan navigasi materi dan keterlibatan belajar.",
  //   category: "pendidikan",
  //   tags: ["Design Thinking", "UI Design", "Information Architecture"],
  //   thumbnail: "/portfolio/placeholder-edu.png",
  //   status: "Planning",
  // },
  {
    id: "ind-1",
    title: "Dashboard Analitik Bisnis",
    description:
      "Perancangan dashboard analitik data modern dengan visualisasi metrik bisnis yang terstruktur dan mudah dipahami oleh stakeholder.",
    category: "industri",
    tags: ["Dashboard Design", "Data Visualization", "Design System"],
    thumbnail: "/portfolio/placeholder-ind.png",
    status: "In Progress",
  },
  // {
  //   id: "ind-2",
  //   title: "Alur Transaksi E-Commerce",
  //   description:
  //     "Optimasi alur transaksi dan checkout pada platform perdagangan elektronik untuk menciptakan pengalaman belanja yang mulus dan terpercaya.",
  //   category: "industri",
  //   tags: ["Interaction Design", "User Flow", "Mobile First"],
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
