import { Heading } from "../Helper/Heading";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  return (
    <div id="services" className="pt-20 pb-12 dark:bg-[#09101a]">
      <Heading
        headingPrimary="What can I do for clients?"
        headingSub="Creative Services"
      />
      <div className="w-4/5 mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 items-center">
        <div>
          <ServiceCard image="/images/icon1.png" title="Web Developer" />
        </div>
        <div>
          <ServiceCard image="/images/icon2.png" title="React Developer" />
        </div>
        <div>
          <ServiceCard image="/images/icon3.png" title="Next.js Developer" />
        </div>
        <div>
          <ServiceCard image="/images/icon4.png" title="Node Developer" />
        </div>
        <div>
          <ServiceCard image="/images/icon5.png" title="Frontend Developer" />
        </div>
        <div>
          <ServiceCard image="/images/icon2.png" title="Backend Developer" />
        </div>
      </div>
    </div>
  );
};
