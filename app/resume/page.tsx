"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data

interface DataProps {}

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis labore ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ismael Soares",
    },
    {
      fieldName: "Phone",
      fieldValue: "+55 11 973732134",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "ismael_sd1991@hotmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazilian",
    },
    {
      fieldName: "Email",
      fieldValue: "ismaelsoaresdoria@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Portuguese, English",
    },
  ],
};

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
