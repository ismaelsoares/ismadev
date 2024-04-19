import * as HeroIcon from "@heroicons/react/20/solid";
import { ComponentProps } from "react";

type ServiceCardProps = {
  name: keyof typeof HeroIcon;
  title: string;
  skills: string;
} & ComponentProps<typeof HeroIcon.AcademicCapIcon>;
export const ServiceCard = ({
  name,
  title,
  skills,
  ...props
}: ServiceCardProps) => {
  const IconComponent = HeroIcon[name];
  return (
    <div>
      <div data-aos="zoom-in" data-aos-delay="300">
        <div
          className="bg-violet-700 hover:scale-110 transform transition-all 
               duration-300 uppercase font-semibold text-center p-10"
        >
          <IconComponent
            {...props}
            className="w-24 h-24 mx-auto text-[#d3fae8]"
          />
          <h1 className="text-xl md:text-3xl mt-6 mb-6">{title}</h1>
          <p className="text-base text-gray-200 font-normal">{skills}</p>
        </div>
      </div>
    </div>
  );
};
