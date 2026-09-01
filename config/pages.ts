import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Portofolio UI/UX Design   Aspek Pendidikan & Industri.",
    metadata: {
      title: "Home",
      description:
        "Portofolio UI/UX Design oleh mahasiswa PTI Universitas Negeri Malang.",
    },
  },
  team: {
    title: "Profil Tim",
    description: "Kenali anggota tim kami dan peran masing-masing.",
    metadata: {
      title: "Profil Tim",
      description:
        "Profil anggota tim UI/UX Design   Pendidikan Teknik Informatika, Universitas Negeri Malang.",
    },
  },
  portfolioIndustri: {
    title: "Portofolio Industri",
    description:
      "Case study UI/UX di bidang industri   solusi desain untuk kebutuhan bisnis dan teknologi.",
    metadata: {
      title: "Portofolio Industri",
      description:
        "Case study UI/UX Design di bidang industri oleh tim PTI Universitas Negeri Malang.",
    },
  },
  portfolioPendidikan: {
    title: "Portofolio Pendidikan",
    description:
      "Case study UI/UX di bidang pendidikan   merancang pengalaman belajar yang lebih baik.",
    metadata: {
      title: "Portofolio Pendidikan",
      description:
        "Case study UI/UX Design di bidang pendidikan oleh tim PTI Universitas Negeri Malang.",
    },
  },
  contact: {
    title: "Kontak",
    description: "Hubungi tim kami untuk kolaborasi atau pertanyaan.",
    metadata: {
      title: "Kontak",
      description: "Hubungi tim UI/UX Design PTI Universitas Negeri Malang.",
    },
  },
};
