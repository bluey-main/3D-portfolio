import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  flutter,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  ticketa,
  justodo,
  jamazan,
  federalCenter,
  federalClub,
  inventiva,
  winifred,
  pluralCap,
  ucap,
  linkedin,
  twitter,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "technologies",
    title: "Technologies",
  },
  
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },

  {
    title: "Flutter",
    icon: mobile,
  },

  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "NextJs",
    icon: nextjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },

  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },

  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Wordpress Developer",
    company_name: "Inventiva Technologies",
    icon: inventiva,
    iconBg: "#ffffff",
    date: "February 2023 - July 2023",
    points: [
      "Developing and maintaining websites using Wordpress and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality websites.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Flutter Developer (Intern)",
    company_name: "Inventiva",
    icon: inventiva,
    iconBg: "#FFFFFF",
    date: "February 2023 - June 2023",
    points: [
      "Learning Flutter Mobile App Development",
      "Building and maintaining basic personal Flutter apps for Android.",
    ],
  },
  {
    title: "Wordpress Developer (Freelance)",
    company_name: "Winifred Unusual",
    icon: winifred,
    iconBg: "#edc361",
    date: "August 2023 - August 2023",
    points: [
       "Developed and maintained the website for winifred unusual a Nigerian movie prouces using Wordpress and other related technologies."
    ],
  },
  {
    title: "Web Developer (Freelance)",
    company_name: "Plural Capital Ltd.",
    icon: pluralCap,
    iconBg: "#FFFFFF",
    date: "August 2023 - August 2023",
    points: [
       "Developed and maintained the company website for plural Capital Limited a Microcredit firm,."
    ],
  },
  // {
  //   title: "Web Developer (Intern)",
  //   company_name: "United Capital Plc",
  //   icon: ucap,
  //   iconBg: "#FFFFFF",
  //   date: "",
  //   points: [
  //      "Collaborated with other developers on in house projects."
  //   ],
  // },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ticketa",
    description:
      "Web-based platform That allows users book bus tickets for listed destination .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "paystack",
        color: "blue-text-gradient",
      },
    ],
    image: ticketa,
    source_code_link: "https://github.com/bluey-main/ticketer",
    website: "https://ticketer-b82h.vercel.app/"
  },
  {
    name: "Just Todo",
    description:
      "A Task Manangement Web application that enables users to schedule tasks and categorize them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: justodo,
    source_code_link: "https://github.com/bluey-main/justTodo",
    website: "https://just-todo-two.vercel.app/"
  },
  {
    name: "Jamazan",
    description:
      "An E-Commerce store, for buying and selling products, this Web Application was a collaboration with some other Developers",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jamazan,
    source_code_link: "https://github.com/",
    website: "https://jamazan-dev.vercel.app/"
  },

  
  {
    name: "Federal Civil Service Center",
    description:
      "A Website for The Federal Civil service center, displaying their services and describing them as a whole",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: federalCenter,
    source_code_link: "https://github.com/bluey-main/fcsceventcenter",
    website:"https://fcsceventcenter.vercel.app/"
  },

  {
    name: "Federal Civil Service Club",
    description:
      "A Website for The Federal Civil service club yaba, displaying their services rendered and creating an online presence",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: federalClub,
    source_code_link: "https://github.com/bluey-main/fcsc",
    website:"https://fcsc-beta.vercel.app/"
  },

];

const social = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/victor-ekeocha-ibe/"
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://www.linkedin.com/in/victor-ekeocha-ibe/"
  },
  {
    name: "Github",
    icon: github,
    link: "https://github.com/bluey-main/"
  },
]

export { services, technologies, experiences, testimonials, projects, social };
