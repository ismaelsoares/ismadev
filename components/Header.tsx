//next Image
import Image from "next/image";

//next Link
import Link from "next/link";

//components
import { Socials } from "./Socials";

export const Header = () => {
   return (
      <header className="absolute z-30 flex items-center w-full px-16 xl:px-0 xl:h-[90px]">
         <div className="container mx-auto">
            <div className="flex flex-col items-center justify-between py-8 lg:flex-row gap-y-6">
               {/* logo */}
               <Link href={'/'}>
                  <Image
                     src={'/ismadev.png'}
                     width={220}
                     height={48}
                     alt=""
                     priority={true}
                  />
               </Link>
               {/* socials */}
               <Socials />
            </div>
         </div>
      </header>
   )
};