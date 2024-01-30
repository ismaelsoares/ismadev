import { Bars3Icon } from "@heroicons/react/20/solid"
import { Socials } from "./Socials";
import Image from "next/image";

interface Props {
   openNav: () => void;
}

export const Nav = ({ openNav }: Props) => {
   return (
      <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
         <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            {/* <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
               WEB
               <span className="text-yellow-300">DEV</span>
            </h1> */}
            <Image
               className="flex-[0.1] cursor-pointer mt-1"
               src='/images/logo.svg'
               alt="logo"
               width={250}
               height={250}
            />
            {/* <Socials /> */}
            <div className="nav-link">HOME</div>
            <div className="nav-link">SERVICES</div>
            <div className="nav-link">ABOUT</div>
            <div className="nav-link">PROJECTS</div>
            <div className="nav-link">BLOG</div>
            <div className="nav-link">CONTACT</div>
            <div onClick={openNav}>
               <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
            </div>
         </div>
      </div>
   )
}