import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
}

export const ServiceCard = ({ image, title }: ServiceCardProps) => {
  return (
    <div className="shadow-md hover:scale-110 transition-all duration-500 bg-black p-8 rounded-lg">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="mt-8 mb-8 mx-auto"
      />
      <div className="text-center">
        <p className="text-white font-semibold text-[26px]">{title}</p>
        <p className="mt-2 text-white text-xl text-opacity-60">
          Promote your blog posts, case udie, and product ouncems nts with the
          branded videos.
        </p>
        <button className="px-5 py-2 bg-blue-600 mt-8 text-white rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
};
