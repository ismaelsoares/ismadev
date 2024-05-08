import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="pt-20 pb-20 bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Recent Works</p>
        <p className="heading__primary">
          My Best <span className="text-yellow-300">Projects</span>
        </p>
      </div>
      <ProjectCard
        image="/images/react-form-zod.png"
        link="https://react-form-zod.vercel.app/"
        title="React form zod"
        tech1="React"
        tech2="Tailwind"
        tech3="TypeScript"
        tech4="Zod"
      />
    </div>
  );
};
