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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
//about data
interface FieldProps {
  fieldName: string;
  fieldValue: string;
}
interface DataProps {
  title: string;
  description: string;
  info: FieldProps[];
}
interface ItemProps {
  company?: string;
  institution?: string;
  degree?: string;
  position?: string;
  duration: string;
}
interface ExperienceEduProps {
  icon: string;
  title: string;
  description: string;
  item: ItemProps[];
}

const about: DataProps = {
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

interface SkillItemProps {
  icon: React.ReactNode;
  name: string;
}
interface SkillProps {
  title: string;
  description: string;
  skillList: SkillItemProps[];
}

const experience: ExperienceEduProps = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatem",
  item: [
    {
      company: "Web Design Studio",
      position: "Freelance Web Developer",
      duration: "Summer 2021",
    },
    {
      company: "SITMA Labs",
      position: "Front End Developer",
      duration: "2015 - 2016",
    },
    {
      company: "SITMA Labs",
      position: "Front End Developer",
      duration: "2015 - 2016",
    },
    {
      company: "SITMA Labs",
      position: "Front End Developer",
      duration: "2015 - 2016",
    },
  ],
};
const education: ExperienceEduProps = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatem",
  item: [
    {
      institution: "UniFACEMA",
      degree: "Análise e Desenvolvimento de Sistemas",
      duration: "2012-2014",
    },
    {
      institution: "Udemy",
      degree: "Desenvolvimento FullStack com React, TypeScript e NodeJS",
      duration: "2020-2022",
    },
    {
      institution: "RocketSeat",
      degree: "Desenvolvimento FullStack",
      duration: "2023 - 2024",
    },
    {
      institution: "RocketSeat",
      degree: "Certified Web Developer",
      duration: "2023",
    },
  ],
};

const skills: SkillProps = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates tempore",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className=" flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]"></ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/* about me */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
