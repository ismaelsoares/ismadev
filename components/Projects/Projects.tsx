import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div id="projects" className="pt-20 pb-20 bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Recent Works</p>
        <p className="heading__primary">
          My Best <span className="text-yellow-300">Projects</span>
        </p>
      </div>
      <ProjectCard
        title="React form zod"
        link="https://react-form-zod.vercel.app/"
        image="/images/react-form-zod.png"
        tech1="React"
        tech2="Tailwind"
        tech3="TypeScript"
        tech4="Zod"
      />
      <ProjectCard
        title="Attendee List"
        link="https://pass-in-web.vercel.app/"
        image="/images/pass-in-web.png"
        tech1="React"
        tech2="Tailwind"
        tech3="Zod"
        tech4="TypeScript"
      />
      <ProjectCard
        title="Table Money"
        link="https://dt-money-git.vercel.app/"
        image="/images/dt-money.png"
        tech1="React"
        tech2="Tailwind"
        tech3="Zod"
        tech4="TypeScript"
      />
      <ProjectCard
        title="Expert Notes"
        link="https://expert-notes-inky.vercel.app/"
        image="/images/expert-notes.png"
        tech1="React"
        tech2="Tailwind"
        tech3="Zod"
        tech4="TypeScript"
      />
      <ProjectCard
        title="Dashboard"
        link="https://openshop-dashboard.vercel.app/"
        image="/images/openshop-dashboard.png"
        tech1="React"
        tech2="Tailwind"
        tech3="Zod"
        tech4="TypeScript"
      />
    </div>
  );
};
