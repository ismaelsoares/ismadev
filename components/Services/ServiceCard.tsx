type Colors = "red" | "violet" | "blue";

interface ServiceCardProps {
  Icon: React.ElementType;
  title: string;
  skills: string;
  color: Colors;
}
const colorVariants = {
  red: "bg-red-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-10",
  violet:
    "bg-violet-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-10",
  blue: "bg-blue-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-10",
};

export const ServiceCard = ({
  Icon,
  title,
  skills,
  color,
}: ServiceCardProps) => {
  const bgColorClass = `bg-${color}-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-10`;
  return (
    <div>
      <div data-aos="zoom-in" data-aos-delay="300">
        <div className={bgColorClass}>
          {Icon && <Icon className="w-24 h-24 mx-auto text-lime-green" />}
          <div className="w-52 h-40 mx-auto">
            <h1 className="text-xl md:text-4xl mt-6 mb-6">{title}</h1>
            <p className="text-base text-gray-200 font-normal">{skills}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
