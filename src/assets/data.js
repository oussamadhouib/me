import React from "react";
import { FaReact , FaNodeJs , FaJs , FaDatabase } from "react-icons/fa";
import smala from "../images/smala.png";
import cyber from "../images/cyber.jpeg";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Oussema Dhouib",
  title: "Fullstack Js Developer",
  social: {
    github: "https://github.com/oussamadhouib",
    linkedin: "https://www.linkedin.com/in/oussema-dhouib/",
    email: "oussamadhouib9697@gmail.com",
  },
  about: {
    title: "About Me",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper porta pharetra. Nunc porta dui eu mattis laoreet. Quisque lobortis orci sagittis, luctus ligula nec, sagittis leo. Ut convallis eu mi dignissim facilisis. Donec egestas vitae sapien quis bibendum. Sed rhoncus aliquet felis, ac cursus dui varius sit amet. Etiam eu nisi ligula. Sed sagittis massa a metus pulvinar, eu vestibulum nulla molestie. Nullam luctus sit amet felis quis ullamcorper. ",
  },
  skills: [
    {
      skillName: "Js",
      skillIcon: <FaJs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "NodeJs",
      skillIcon: <FaNodeJs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Databses",
      skillIcon: <FaDatabase className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  experiences: [
    {
      title: "Fullstack Js Developer",
      company : [smala],
      description: "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: [
        "Javascript",
        "ReactJs",
        "NodeJs",
        "Typescript"
      ],
      date : "Sep 2021 - Present",
    },
    {
      title: "Fullstack Js Developer",
      company : [cyber],
      description: "⚡ My portfolio built with NextJS and TailwindCSS.",
      tags: [
        "website",
        "portfolio",
        "nextjs",
        "tailwindcss"
      ],
      date : "Nov 2020 - Sep 2021",
    }
  ],
  projects: [
    {
      title: "React tailwind portfolio",
      description: "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: [
        "template",
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "/"
    },
    {
      title: "My personal website",
      description: "⚡ My portfolio built with ReactJs and TailwindCSS.",
      tags: [
        "website",
        "portfolio",
        "nextjs",
        "tailwindcss"
      ],
      link: "/"
    }
  ]
};
export default data;
