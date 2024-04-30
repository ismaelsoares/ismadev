import { DevicePhoneMobileIcon } from "@heroicons/react/16/solid";
import React from "react";

interface ContactProps {
  contact: string;
  content: string;
  Icon?: React.ElementType;
}
export const Contact = ({ contact, content, Icon }: ContactProps) => {
  return (
    <div className="flex items-center space-x-6">
      <div className="md-w-[5.5rem] md:h-[5.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
        {Icon && (
          <Icon className="md:w-[3rem] md:h-[3rem] w-[3.5rem] h-[3.5rem] text-black" />
        )}
      </div>
      <div>
        <h1 className="text-2xl mb-[0.2rem] font-semibold text-white ">
          {contact}
        </h1>
        <p className="text-lg w-[90%] text-white opacity-60">{content}</p>
      </div>
    </div>
  );
};
