import * as HeroIcon from "@heroicons/react/20/solid";
import { ComponentProps } from "react";

type IconProps = {
  name: keyof typeof HeroIcon;
} & ComponentProps<typeof HeroIcon.AcademicCapIcon>;

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = HeroIcon[name];
  return (
    <IconComponent {...props} className="w-24 h-24 mx-auto text-[#d3fae8]" />
  );
};
