import Image from "next/image";
import { getAllSkills } from "@/src/services/SkillService";
import { ISkill } from "@/src/types";

const Skills = async () => {
  const { data: allSkills } = await getAllSkills([]);

  return (
    <div className="my-16">
      <h1 className="text-2xl xs:text-3xl font-bold flex justify-center mb-12">
        Skills
      </h1>

      {/* Skills Container */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 px-4 sm:px-8">
        {allSkills?.result?.map((skill: ISkill) => (
          <div
            key={skill._id}
            className="flex flex-col items-center justify-center p-4  rounded-lg shadow-md hover:bg-primary-300 transition duration-300"
          >
            <Image
              src={skill.logo}
              alt={`${skill.name} logo`}
              width={48}
              height={48}
              className="mb-2"
            />
            {/* <span className="text-lg font-semibold text-yellow-600">
              {skill.name}
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
