import Image from "next/image";
import { Particle } from "./Particle";
import { TextEffect } from "./TextEffect";
import { Socials } from "./Socials";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const openCV = () =>
  window.open(
    "https://drive.google.com/file/d/1Wa-wjaJ4hiLaN10SbifqciBnjMOW-85s/view?usp=sharing"
  );

export const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-4/5 grid-cols-1 mx-auto grid lg:grid-cols-2 gap-12 h-full items-center">
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            OLÁ, EU SOU <span className="text-yellow-400">ISMAEL!</span>
          </h1>
          <TextEffect />
          <Socials />
          <p className="mt-[1.5rem] text-lg text-[#ffffff92]">
            Trabalho como desenvolvedor web apaixonado por criar experiências
            incríveis na web. Tenho experiência em desenvolvimento front-end e
            back-end, utilizando tecnologias como HTML, CSS, JavaScript, React,
            Node.js, e bancos de dados como MySQL e MongoDB. Estou sempre
            buscando aprender novas tecnologias e melhorar minhas habilidades
            para criar aplicações web de alta qualidade. Estou animado para
            enfrentar novos desafios e contribuir para projetos inovadores no
            mundo da web!
          </p>
          <motion.div
            className="mt-[2rem] flex-col space-y-6 sm:space-y-0 
                  sm:flex sm:flex-row items-center sm:space-x-6"
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <button
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-lime-green text-black flex items-center space-x-2"
              onClick={openCV}
            >
              <p>Download Cv</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-lime-green" />
              <p className="text-[20px] font-semibold text-white">
                Watch The Video
              </p>
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-[600px] h-[600px] hidden bg-lime-green 
               relative lg:flex items-center rounded-full"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, ease: "easeInOut" }}
          exit="hidden"
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
  );
};
