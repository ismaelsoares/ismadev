//next image
import Image from "next/image";

//next link
import Link from "next/link";

//icons 
import { HiArrowRight } from "react-icons/hi2";

export const ProjectsBtn = () => {
    return (
        <div className="mx-auto xl:mx-0">
            <Link
                href={'/work'}
                className="relative w-[185px] h-[185px] flex justify-center items-center
        bg-circleStar bg-cover bg-center bg-no-repeat group"
            >
                <Image
                    src={'/rounded-text.png'}
                    width={141}
                    height={148}
                    alt=""
                    className="w-full h-full animate-spin-slow max-w-[141px] max-h-[148px]"
                />
                <HiArrowRight className="absolute transition-all duration-300 text-4x1 group-hover:translate-x-2 " />
            </Link>
        </div>)
};
