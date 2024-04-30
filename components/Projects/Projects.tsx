import Image from "next/image";
import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]"
    >
      <h1 className="heading pb-6">
        Pro<span className="text-yellow-400">jects</span>
        <div className="w-4/5 pt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProjectItem
            name="Attendee List"
            src="/images/pass-in-web.png"
            alt="pass-in-web"
            layout="fill"
            link="https://pass-in-web.vercel.app/"
          />
          <ProjectItem
            name="Table money"
            src="/images/dt-money.png"
            alt="table-money"
            layout="fill"
            link="https://dt-money-git.vercel.app/"
          />
          <ProjectItem
            name="Rick and Morty list API"
            src="/images/rick-and-morty.png"
            alt="rick-and-morty"
            layout="fill"
            link="https://rick-and-morty-tsx.vercel.app/"
          />
          <ProjectItem
            name="Expert Notes"
            src="/images/expert-notes.png"
            alt="expert-notes"
            layout="fill"
            link="https://expert-notes-inky.vercel.app/"
          />
          <ProjectItem
            name="React Form with Zod"
            src="/images/react-form-zod.png"
            alt="react-form-zod"
            layout="fill"
            link="https://react-form-zod.vercel.app/"
          />
          <ProjectItem
            name="Dashboard"
            src="/images/openshop-dashboard.png"
            alt="openshop-dashboard"
            layout="fill"
            link="https://openshop-dashboard.vercel.app/"
          />
        </div>
      </h1>
    </div>
  );
};
