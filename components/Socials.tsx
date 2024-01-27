//links
import Link from "next/link";

// icons
import {
   RiLinkedinLine,
   RiInstagramLine,
   RiFacebookBoxLine,
   RiTwitterLine,
   RiGithubLine,
   RiWhatsappLine,
} from 'react-icons/ri';

export const Socials = () => {
   return (
      <div className="flex items-center text-lg gap-x-5">
         <Link href={''} className="transition-all duration-300 hover:text-accent">
            <RiLinkedinLine />
         </Link>
         <Link href={''} className="transition-all duration-300 hover:text-accent">
            <RiFacebookBoxLine />
         </Link>
         <Link href={''} className="transition-all duration-300 hover:text-accent">
            <RiInstagramLine />
         </Link>
         <Link href={''} className="transition-all duration-300 hover:text-accent">
            <RiTwitterLine />
         </Link>
         <Link href={''} className="transition-all duration-300 hover:text-accent">
            <RiGithubLine />
         </Link>
         <Link href={''} className="transition-all duration-300 hover:text-accent">
            <RiWhatsappLine />
         </Link>
      </div>
   )
};

