import { Sparkle } from "lucide-react";
import ProjectDispalyCard from "./ProjectDispalyCard";
import { getAllProjects } from "@/src/services/ProjectService";
import AllProjectButton from "./AllProjectButton";

const Project = async () => {
  const { data: allProjects } = await getAllProjects([
    { name: "limit", value: 10 },
    { name: "sort", value: "-createdAt" },
  ]);
  return (
    <div className="mb-16">
      <div className="flex justify-center">
        <div className="text-xl font-bold bg-yellow-500 text-white py-2 px-6 rounded-full inline">
          <p className="flex items-center">
            {" "}
            <Sparkle className="mr-2" /> Selected work
          </p>
        </div>
      </div>
      <h1 className="text-xl sm:text-2xl mt-6 font-semibold flex justify-center">
        Showcasing My Remarkable Projects
      </h1>
      <ProjectDispalyCard projects={allProjects} />
      <div className="flex justify-center">
        <AllProjectButton />
      </div>
    </div>
  );
};

export default Project;
