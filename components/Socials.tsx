// links
import Link from "next/link";

import {
  RiLinkedinLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiTwitterLine,
  RiGithubLine,
  RiWhatsappLine,
} from "react-icons/ri";

export const Socials = () => {
  return (
    <div className="flex items-center text-lg gap-x-6 dark:text-white mt-4">
      <Link
        href="https://www.linkedin.com/in/ismaeldoria/"
        target="_blank"
        className=""
      >
        <RiLinkedinLine className="w-[2rem] h-[2rem]" />
      </Link>
      <Link
        href="https://github.com/ismaelsoares"
        target="_blank"
        className="transition-all duration-300 hover:text-accent"
      >
        <RiGithubLine className="w-[2rem] h-[2rem]" />
      </Link>
      <Link
        href="https://www.facebook.com/ismaelsoaresdoria"
        target="_blank"
        className="transition-all duration-300 hover:text-accent"
      >
        <RiFacebookBoxLine className="w-[2rem] h-[2rem]" />
      </Link>
      <Link
        href="https://www.instagram.com/ismael_soares/"
        target="_blank"
        className="transition-all duration-300 hover:text-accent"
      >
        <RiInstagramLine className="w-[2rem] h-[2rem]" />
      </Link>
    </div>
  );
};
