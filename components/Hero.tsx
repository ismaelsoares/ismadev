import { Particle } from "./Particle"

export const Hero = () => {
    return (
        <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
            <Particle />
            <div className=" w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                    OLÁ, EU SOU <span className="text-yellow-400">ISMAEL!</span>
                </h1>
            </div>
        </div>
    )
}