export const SITE_TITLE = "Abdelghafour Echikr | Web Developer";
export const SITE_DESCRIPTION = "Welcome to my website!";

export enum IconEnum {
  linkedIn = "linkedin",
  github = "github",
  css = "css",
  javascript = "javascript",
  dz = "dzflag",
  hashnode = "hashnode",
  logo = "logo",
  mail = "mail",
  nextjs = "next-js",
  node = "nodejs",
  react = "react",
  sass = "sass",
  tailwind = "tailwindcss",
  twitter = "twitter",
  typescript = "typescript",
}

type footerLink = {
  href: string;
  sronlyText: string;
  iconName: string;
};

export const LINK_LIST: footerLink[] = [
  {
    href: "https://www.linkedin.com/in/abdelghafour-echikr",
    iconName: "linkedin",
    sronlyText: "Connect with me on Linkedin",
  },
  {
    href: "https://twitter.com/Abdelghafour1_",
    iconName: "twitter",
    sronlyText: "Follow me on Twitter",
  },
  {
    href: "https://github.com/Abdelghafour122",
    iconName: "github",
    sronlyText: "Go to my GitHub repo",
  },
  {
    href: "mailto:echikr.abdelghafour@hotmail.com",
    iconName: "mail",
    sronlyText: "Contact Me",
  },
  {
    href: "https://hashnode.com/@AbdelghafourE",
    iconName: "hashnode",
    sronlyText: "Visit my blog on hashnode",
  },
];

export const EDUCATION = [
  {
    title: "Masters of Software Engineering",
    year: "2022 - 2025",
  },
  {
    title: "Bachelors of Information Systems and Software Engineering",
    year: "2019 - 2022",
  },
];
