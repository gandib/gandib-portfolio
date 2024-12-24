import { Sparkle } from "lucide-react";
import ProjectDispalyCard from "./ProjectDispalyCard";

const Project = () => {
  return (
    <div className="mb-16">
      <div className="flex justify-center">
        <div className="text-xl font-bold bg-primary-500 text-white py-2 px-6 rounded-full inline">
          <p className="flex items-center">
            {" "}
            <Sparkle className="mr-2" /> Selected work
          </p>
        </div>
      </div>
      <h1 className="text-xl sm:text-2xl mt-6 font-semibold flex justify-center">
        Showcasing My Remarkable Projects
      </h1>
      <ProjectDispalyCard />
      <div className="flex justify-center">
        <button className="flex border-2 bg-black text-white py-3 px-6 mt-8 hover:bg-white hover:text-black">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default Project;
