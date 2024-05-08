import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <div className="pt-20 pb-12 bg-[#09101a]">
      <div className="grid w-4/5 mx-auto grid-cols-1 lg:grid-cols-7 gap-8 items-center">
        <div className="col-span-3">
          <p className="text-white mb-2">My Skills</p>
          <p className="text-4xl text-white">
            Aqui estão minhas principais{" "}
            <span className="text-yellow-400">Skills</span> & Projetos
          </p>
          <p className="text-white my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vel,
            harum voluptatibus, sint ullam sunt asperiores necessitatibus
            temporibus ut enim delectus corrupti eligendi vitae doloremque magni
            blanditiis nostrum quo suscipit!
          </p>
          <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500">
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center">
            <div>
              <SkillCard
                title="React"
                image="/images/react.svg"
                percent="90%"
              />
            </div>
            <div>
              <SkillCard title="CSS" image="/images/css.svg" percent="90%" />
            </div>
            <div>
              <SkillCard
                title="JavaScript"
                image="/images/js.svg"
                percent="77%"
              />
            </div>
            <div>
              <SkillCard
                title="TypeScript"
                image="/images/ts.svg"
                percent="67%"
              />
            </div>
            <div>
              <SkillCard title="HTML" image="/images/html.svg" percent="67%" />
            </div>
            <div>
              <SkillCard
                title="Node JS"
                image="/images/node.svg"
                percent="67%"
              />
            </div>
            <div>
              <SkillCard
                title="Next.js"
                image="/images/next.svg"
                percent="67%"
              />
            </div>
            <div>
              <SkillCard
                title="Tailwind"
                image="/images/tailwind.svg"
                percent="67%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
