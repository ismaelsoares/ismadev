import { XMarkIcon } from "@heroicons/react/20/solid"
import { Link } from 'react-scroll'
interface Props {
   nav: boolean;
   closeNav: () => void;
}
export const MobileNav = ({ nav, closeNav }: Props) => {

   const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]"
   const handleSetActive = (to: any) => console.log(to);

   return (
      <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0
            right-0 bottom-0 z-[1000000] bg-[#09101a]`}>
         <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
            {/* <div className="nav-link-mobile">HOME</div>
            <div className="nav-link-mobile">SERVICES</div>
            <div className="nav-link-mobile">ABOUT</div>
            <div className="nav-link-mobile">PROJECT</div>
            <div className="nav-link-mobile">BLOG</div>
            <div className="nav-link-mobile">CONTACT</div> */}
            <Link
               activeClass="active"
               to="home"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               onSetActive={handleSetActive}
               className="nav-link-mobile"
               onClick={closeNav}
            >
               HOME
            </Link>
            <Link
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               onSetActive={handleSetActive}
               className="nav-link-mobile"
            >
               ABOUT
            </Link>
            <Link
               activeClass="active"
               to="services"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               onSetActive={handleSetActive}
               className="nav-link-mobile"
               onClick={closeNav}
            >
               SERVICES
            </Link>
            <Link
               activeClass="active"
               to="projects"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               onSetActive={handleSetActive}
               className="nav-link-mobile"
               onClick={closeNav}
            >
               PROJECTS
            </Link>
            <Link
               activeClass="active"
               to="blog"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               onSetActive={handleSetActive}
               className="nav-link-mobile"
               onClick={closeNav}
            >
               BLOG
            </Link>
            <Link
               activeClass="active"
               to="footer"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               onSetActive={handleSetActive}
               className="nav-link-mobile"
               onClick={closeNav}
            >
               CONTACT
            </Link>
         </div>
         <div onClick={closeNav}
            className="absolute z=[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem]
            text-yellow-400">
            <XMarkIcon />
         </div>
      </div>
   )
}