"use client";

import { useRouter } from "next/navigation";

const AllProjectButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push(`/projects`)}
        className="flex border-2 bg-black text-white py-3 px-6 mt-8 hover:bg-white hover:text-black"
      >
        View All Projects
      </button>
    </div>
  );
};

export default AllProjectButton;
