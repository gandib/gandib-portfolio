"use client";

import { useRouter } from "next/navigation";

const AllProjectButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push(`/projects`)}
        className="flex border-2 text-default-900  py-3 px-6 mt-8 hover:bg-gradient-to-r hover:from-[#9f7672] hover:to-[#e3ce65]  hover:text-white"
      >
        View All Projects
      </button>
    </div>
  );
};

export default AllProjectButton;
