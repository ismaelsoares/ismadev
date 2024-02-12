import { Bars3Icon } from "@heroicons/react/20/solid"
import { Socials } from "./Socials";
import Image from "next/image";
import { Link } from 'react-scroll'
interface Props {
   openNav: () => void;
}

const handleSetActive = (to: any) => console.log(to);
export const Nav = ({ openNav }: Props) => {
   return (
      <nav className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
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
            <Link
               activeClass="active"
               to="hero"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
               onSetActive={handleSetActive}
               className="nav-link"
            >
               HOME
            </Link>
            <Link
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
               onSetActive={handleSetActive}
               className="nav-link"
            >
               ABOUT
            </Link>
            <Link
               activeClass="active"
               to="services"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
               onSetActive={handleSetActive}
               className="nav-link"
            >
               SERVICES
            </Link>
            <Link
               activeClass="active"
               to="projects"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
               onSetActive={handleSetActive}
               className="nav-link"
            >
               PROJECTS
            </Link>
            <Link
               activeClass="active"
               to="blog"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
               onSetActive={handleSetActive}
               className="nav-link"
            >
               BLOG
            </Link>
            <Link
               activeClass="active"
               to="footer"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
               onSetActive={handleSetActive}
               className="nav-link"
            >
               CONTACT
            </Link>
            <div onClick={openNav}>
               <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
            </div>
         </div>
      </nav >
   )
}