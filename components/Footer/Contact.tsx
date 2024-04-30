import { DevicePhoneMobileIcon } from "@heroicons/react/16/solid";
import React from "react";

interface ContactProps {
  contact: string;
  content: string;
  Icon?: React.ElementType;
}
export const Contact = ({ contact, content, Icon }: ContactProps) => {
  return (
    <div className="flex items-center space-x-8">
      <div className="md-w-[5.5rem] md:h-[5.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] p-5">
        {Icon && <Icon className="md:w-10 md:h-10 w-10 h-10 text-black" />}
      </div>
      <div>
        <h1 className="text-xl mb-[0.2rem] font-semibold text-white ">
          {contact}
        </h1>
        <p className="text-sm w-[90%] text-white opacity-60">{content}</p>
      </div>
    </div>
  );
};
