import {
  CodeBracketIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  return (
    <div
      id="services"
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]"
    >
      <p className="heading">
        My <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <ServiceCard
          Icon={CodeBracketIcon}
          title="Frontend"
          skills="HTML5 | CSS3 | React | Javascript | TypeScript | TailwindCSS"
          color="red"
        />
        <ServiceCard
          Icon={RocketLaunchIcon}
          title="Fullstack"
          skills=""
          color="violet"
        />
        <ServiceCard
          Icon={CommandLineIcon}
          title="Backend"
          skills="NodeJS | Express | Fastify | PostGreSQL | MySQL | MongoDB"
          color="blue"
        />
      </div>
    </div>
  );
};
