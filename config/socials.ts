import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "Tim UI/UX PTI",
    icon: Icons.gitHub,
    link: "https://github.com/",
  },
  {
    name: "LinkedIn",
    username: "Tim UI/UX PTI",
    icon: Icons.linkedin,
    link: "https://linkedin.com/",
  },
  {
    name: "Gmail",
    username: "tim.uiux.pti",
    icon: Icons.gmail,
    link: "mailto:tim.uiux.pti@gmail.com",
  },
];
