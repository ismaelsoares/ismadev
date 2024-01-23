//next image
import Image from "next/image";

//components
import { Avatar } from '../components/Avatar';
import { ParticlesContainer } from '../components/ParticlesContainer';
import { ProjectsBtn } from '../components/ProjectsBtn';

//framer motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../variants'

const Home = () => {
    return (
        <div className="h-full bg-primary/60">
            {/* text      */}
            <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10" >
                <div className="container flex flex-col justify-center h-full mx-auto text-center xl:pt-40 xl:text-left">
                    {/* title */}
                    <motion.h1
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="h1">Transforming Ideas <br /> Into {' '}
                        <span className="text-accent">Digital Reality</span>
                    </motion.h1>
                    {/* subtitle */}
                    <motion.p
                        variants={fadeIn('down', 0.3)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
                        maiores quia sit, accusamus natus id adipisci ut placeat magni dolorum
                        asperiores aliquid ducimus quis hic, dolorem aliquam. Iste, sint eius.
                    </motion.p>
                    {/* btn */}
                    <div className="relative flex justify-center xl:hidden">
                        <ProjectsBtn />
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="hidden xl:flex"
                    >
                        <ProjectsBtn />
                    </motion.div>
                </div>
            </div>
            {/* image */}
            <div>image</div>
        </div>
    )
};

export default Home;
