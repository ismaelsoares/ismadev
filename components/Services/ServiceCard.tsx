import * as HeroIcon from "@heroicons/react/20/solid";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Colors = "red" | "violet" | "blue";

type ServiceCardProps = {
  icon: keyof typeof HeroIcon;
  title: string;
  skills: string;
  color: Colors;
} & ComponentProps<typeof HeroIcon.AcademicCapIcon>;

export const ServiceCard = ({
  icon,
  title,
  skills,
  color,
  ...props
}: ServiceCardProps) => {
  const bgColorClass = `bg-${color}-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-10`;
  const IconComponent = HeroIcon[icon];
  return (
    <div>
      <div data-aos="zoom-in" data-aos-delay="300">
        <div className={bgColorClass}>
          <IconComponent
            {...props}
            className="w-24 h-24 mx-auto text-[#d3fae8]"
          />
          <div className="w-52 h-40 mx-auto">
            <h1 className="text-xl md:text-4xl mt-6 mb-6">{title}</h1>
            <p className="text-base text-gray-200 font-normal">{skills}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
