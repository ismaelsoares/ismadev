import Image from "next/image"
import { Particle } from "./Particle"
import { TextEffect } from "./TextEffect"

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from "@/variants";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

export const Hero = () => {
   return (
      <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
         <Particle />
         <div className=" w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
            <motion.div
               variants={fadeIn('down', 0.4)}
               initial='hidden'
               animate='show'
               exit='hidden'
            >
               <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                  OLÁ, EU SOU <span className="text-yellow-400">ISMAEL!</span>
               </h1>
               <TextEffect />
               <p className="mt-[2rem] text-[20px] text-[#ffffff92]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                  ut. Necessitatibus, laboriosam itaque sit laudantium odit commodi!
                  Libero, ad sed consectetur ducimus, nam asperiores quis eligendi sit ipsam eveniet et!
               </p>
               <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                  <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem]
                   text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                     <p>Download Cv</p>
                     <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                  </button>
               </div>
            </motion.div>
            <motion.div
               className="w-[600px] h-[600px] hidden bg-[#55e6a5] 
               relative lg:flex items-center rounded-full"
               variants={fadeIn('up', 0.5)}
               initial='hidden'
               animate='show'
               transition={{ duration: 1, ease: 'easeInOut' }}
               exit='hidden'
            >
               <Image
                  src="/images/avatar01.png"
                  alt="user"
                  layout="fill"
                  className="object-cover rounded-full"
               />
            </motion.div>
         </div>
      </div>
   )
}