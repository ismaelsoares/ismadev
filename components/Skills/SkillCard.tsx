import Image from "next/image";

interface SkillCardProps {
  image: string;
  title: string;
  percent: string;
}

export const SkillCard = ({ image, title, percent }: SkillCardProps) => {
  return (
    <div className="p-4 hover:bg-slate-500 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="h-16 mx-auto"
      />
      <p className="text-lg mt-4 text-white font-[600]">{title}</p>
      <div className="bg-black mt-4 rounded-lg p-2 text-white opacity-40">
        {percent}
      </div>
    </div>
  );
};
