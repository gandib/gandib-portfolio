"use client";

import { useRouter } from "next/navigation";

const AllBlogButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push(`/blogs`)}
        className="flex border-2 bg-black text-white py-3 px-6 mt-8 hover:bg-white hover:text-black"
      >
        View All Blogs
      </button>
    </div>
  );
};

export default AllBlogButton;
