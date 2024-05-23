"use client";

import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
interface Socials {
  icon: React.ReactNode;
  path: string;
}

interface StyleComponentProps {
  containerStyles: string;
  iconStyles: string;
}

const socials: Socials[] = [
  { icon: <FaGithub />, path: "https://github.com/ismaelsoares" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/ismaeldoria/" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];
export const Social = ({
  containerStyles,
  iconStyles,
}: StyleComponentProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
