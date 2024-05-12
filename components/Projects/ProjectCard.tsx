import Image from "next/image";

interface ProjectCardProps {
  link: string;
  image: string;
  title: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
}

export const ProjectCard = ({
  link,
  image,
  title,
  tech1,
  tech2,
  tech3,
  tech4,
}: ProjectCardProps) => {
  return (
    <div className="grid w-4/5 mx-auto pt-20 grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="p-4 rounded-xl relative cursor-pointer hover:rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
        <Image
          src={`${image}`}
          alt={title}
          width={500}
          height={500}
          className="object-contain rounded-xl mx-auto shadow-md"
          onClick={() => window.open(link)}
        />
      </div>
      <div>
        <p className="text-2xl dark:text-white">{title}</p>
        <p className="dark:text-white opacity-65 text-base mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto
          cupiditate velit maiores dolorem id! Numquam, minus sequi dolore nisi
          consequuntur eum quisquam laboriosam recusandae facere, nobis quam
          quae quia. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Assumenda, distinctio.
        </p>
        <div className="mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-8">
          <p className="px-6 py-3 bg-blue-700 text-white rounded-lg text-center">
            {tech1}
          </p>
          <p className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg text-center">
            {tech2}
          </p>
          <p className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg text-center">
            {tech3}
          </p>
          <p className="px-6 py-3 bg-blue-500 text-white rounded-lg text-center">
            {tech4}
          </p>
        </div>
      </div>
    </div>
  );
};
