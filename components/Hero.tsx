import Image from "next/image"
import { Particle } from "./Particle"
import { TextEffect } from "./TextEffect"

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from "@/variants";

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
            </motion.div>
            <motion.div
               className="w-[600px] h-[600px] hidden bg-[#55e6a5] 
               relative lg:flex items-center rounded-full"
               variants={fadeIn('up', 0.5)}
               initial='hidden'
               animate='show'
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