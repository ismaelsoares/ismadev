"use client";
import { TypeAnimation } from "react-type-animation";

interface TitleProps {
  title: Array<string | number>;
  color: string;
}
export const TextEffect = ({ title, color }: TitleProps) => {
  return (
    <p>
      <TypeAnimation
        sequence={title}
        speed={20}
        repeat={Infinity}
        className={`h1 mb-6 ${color}`}
      />
    </p>
  );
};
