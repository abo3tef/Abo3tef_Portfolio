import { Icons } from "@/components/icons";
import {
  Binary,
  Braces,
  Boxes,
  GitBranch,
  Kanban,
  Layers3,
  ShieldCheck,
  Code2,
  HomeIcon,
  NotebookIcon,
  Workflow,
} from "lucide-react";
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
} from "@icons-pack/react-simple-icons";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Abdallah Atef",
  initials: "AA",
  url: "#",
  location: "Giza, Egypt",
  locationLink: "https://www.google.com/maps/place/giza",
  avatarUrl: "/me.png",
  description:
    "Full Stack Developer who enjoys turning ideas into things that actually work.I build, experiment, break, learn, and build again.",
  summary:
    "I started programming **four years ago** out of curiosity — partly because I loved games and wanted to understand how things were built, and partly because I wanted to **create something of my own**.I started with **C++**, then found my way into web development, where I spent a lot of time building landing pages and experimenting with **frontend technologies**.When I started freelancing, I realized that building real products meant understanding more than just the interface. That pushed me into **backend development**, starting with **Node.js, Express, and NestJS**, and eventually leading me to **.NET**.Today, I’m a **Full Stack Developer** still driven by the same thing that started it all: **building things and seeing how far I can take them.**",
  skillGroups: [
    {
      name: "Languages",
      icon: Code2,
      skills: [
        { name: "C#", icon: Csharp },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "SQL", icon: SiMysql },
        { name: "C++", icon: SiCplusplus },
      ],
    },
    {
      name: "Backend",
      icon: Workflow,
      skills: [
        { name: "ASP.NET Core", icon: SiDotnet },
        { name: "Entity Framework Core", icon: SiDotnet },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "REST APIs", icon: Code2 },
        { name: "WebSockets (Socket.io)", icon: SiSocketdotio },
      ],
    },
    {
      name: "Frontend",
      icon: Code2,
      skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      name: "Databases",
      icon: SiPostgresql,
      skills: [
        { name: "SQL Server", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
      ],
    },
    {
      name: "Tools",
      icon: SiGit,
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Docker", icon: SiDocker },
        { name: "Postman", icon: SiPostman },
        { name: "Vercel", icon: SiVercel },
        { name: "Netlify", icon: SiNetlify },
        { name: "Firebase", icon: SiFirebase },
        { name: "Figma", icon: SiFigma },
        { name: "Trello", icon: SiTrello },
        { name: "VS Code", icon: Code2 },
        { name: "Linux", icon: SiLinux },
      ],
    },
    {
      name: "Concepts",
      icon: Boxes,
      skills: [
        { name: "OOP", icon: Layers3 },
        { name: "SOLID Principles", icon: ShieldCheck },
        { name: "Clean Architecture", icon: Boxes },
        { name: "Design Patterns", icon: GitBranch },
        { name: "Data Structures & Algorithms", icon: Binary },
        { name: "Agile", icon: Kanban },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "bdallhalbnt.com",
    tel: "+201157713042",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abo3tef",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdullah-atef-/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ela3goz_",
        icon: Icons.x,

        navbar: true,
      },
      Mustaql: {
        name: "Mustaql",
        url: "https://mostaql.com/u/ela3goz",
        icon: Icons.mostaql,
        navbar: true,
      },
      Nafzly: {
        name: "Nafzly",
        url: "https://nafezly.com/u/Abdullahatef1",
        icon: Icons.nafzly,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:bdallhalbnt.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      href: "https://depi.gov.eg/",
      badges: [],
      location: "Egypt",
      title: "Full Stack .NET Trainee",
      logoUrl: "/work/buildspace.jpg",
      start: "July 2026",
      end: "Present",
      description:
        "Participating in an intensive Full Stack .NET training program focused on enterprise application development. Building full-stack applications using ASP.NET Core, C#, SQL Server, Entity Framework Core, React, and REST APIs. Applying Clean Architecture, SOLID principles, and modern software engineering practices. Collaborating in Agile teams using Git and GitHub while developing real-world projects.",
    },
    {
      company: "Mostaql",
      badges: [],
      href: "https://mostaql.com/u/ela3goz",
      location: "Remote",
      title: "Freelance Frontend Developer",
      logoUrl: "/work/mostaql.png",
      start: "January 2023",
      end: "Present",
      description:
        "Developed 4 responsive web applications and business landing pages using React, Next.js, TypeScript, and Tailwind CSS. Collaborated directly with multiple clients to gather requirements and deliver production-ready solutions. Built 50+ reusable UI components to improve maintainability and development efficiency. Improved application performance and user experience through code optimization, image optimization, and lazy loading techniques.",
    },
    {
      company: "Thebes Academy",
      href: "https://thebes.edu.eg/",
      badges: [],
      location: "Egypt",
      title: "Frontend Development Intern",
      logoUrl: "/Tiba.png",
      start: "July 2025",
      end: "August 2025",
      description:
        "Participated in practical frontend development training. Built responsive interfaces and collaborated on team projects. Worked with Git, GitHub, and modern web development workflows.",
    },
  ],
  education: [
    {
      school: "Tiba Academy",
      href: "https://thebes.edu.eg/",
      degree: "Bachelor of Computer Science",
      logoUrl: "/Tiba.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "FreshHeat",
      href: "https://fresh-heat.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Full-stack restaurant platform with 8+ responsive pages and five core modules: authentication, profile management, ordering, payment processing, and email notifications. Designed relational database models with SQL and optimized data retrieval workflows. Used Git for version control and Trello for Agile project management.",
      technologies: [
        "ASP.NET Core",
        "C#",
        "SQL Server",
        "Entity Framework Core",
        "React",
        "REST APIs",
        "Git",
        "Trello",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abo3tef/FreshHeat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/work/fresh.png",
      video: "",
    },
    {
      title: "Supplier.sa",
      href: "https://supplier-sand.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Production-ready business marketplace platform with 8+ responsive pages. Integrated Google Maps API, ClickPay, N8N AI automation, and real-time notifications. Collaborated directly with stakeholders, delivered regular updates, and optimized SEO, performance, and user experience using Next.js best practices.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Google Maps API",
        "ClickPay",
        "N8N",
        "Real-time Notifications",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abo3tef/Supplier",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/work/supplaer.png",
      video: "",
    },
    {
      title: "Shoryan Frontend",
      href: "https://shoryan.vercel.app/ar",
      dates: "Next.js 16",
      active: true,
      description:
        "Bilingual blood donation platform frontend built with Next.js App Router. Includes public localized pages and an API-backed admin dashboard with panels for blood requests, donors, hospitals, notifications, and analytics. Features cookie-based admin sessions, server actions, interactive dashboard mutations, and mock fallback support.",
      technologies: [
        "Next.js",
        "React 19",
        "Typescript",
        "TailwindCSS",
        "Recharts",
        "Server Actions",
        "Internationalization",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abo3tef/Shoryan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/work/blood.png",
      video: "",
    },
  ],
} as const;
