import Image from "next/image";
interface ProjectItemProps {
  name?: string;
  src: string;
  alt: string;
  layout?: string;
  link: string;
}
export const ProjectItem = ({
  name,
  src,
  alt,
  layout,
  link,
}: ProjectItemProps) => {
  return (
    <div data-aos="zoom-in">
      <div className="flex flex-col items-center transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
        <Image
          src={src}
          alt={alt}
          width={320}
          height={240}
          className="object-contain"
          onClick={() => window.open(link)}
        />
        <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">{name}</p>
      </div>
    </div>
  );
};
