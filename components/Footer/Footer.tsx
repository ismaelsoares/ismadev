import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import { Contact } from "./Contact";

export const Footer = () => {
  return (
    <div id="footer" className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <Contact
          contact="Endereço"
          content="Loren ipsum dolor sit"
          Icon={MapIcon}
        />
        <Contact
          contact="Telefone"
          content="+5599112233"
          Icon={DevicePhoneMobileIcon}
        />
        <Contact
          contact="Send Us Email"
          content="ismaelsoaresdoria@gmail.com"
          Icon={EnvelopeIcon}
        />
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20">
          ismadev web 2024 | All Rights Reserved
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-[16px] text-white opacity-20">Terms & Condition</p>
          <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
          <p className="text-[16px] text-white opacity-20">Sitemap</p>
        </div>
      </div>
    </div>
  );
};
