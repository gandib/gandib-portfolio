import { Sparkle } from "lucide-react";
import BlogDisplayCard from "./BlogDisplayCard";
import { getAllBlogs } from "@/src/services/BlogService";
import AllBlogButton from "./AllBlogButton";

const Blog = async () => {
  const { data: allBlogs } = await getAllBlogs([
    { name: "limit", value: 10 },
    { name: "sort", value: "-createdAt" },
  ]);
  return (
    <div className="mb-16">
      <div className="flex justify-start">
        <div className="text-xl font-bold bg-primary-500 text-white py-2 px-6 rounded-full inline">
          <p className="flex items-center">
            {" "}
            <Sparkle className="mr-2" /> My Blogs
          </p>
        </div>
      </div>
      <h1 className="text-xl sm:text-2xl mt-6 font-semibold flex justify-start">
        Some latest blog
      </h1>
      <div>
        <BlogDisplayCard blogs={allBlogs} />
      </div>
      <div className="flex justify-center">
        <AllBlogButton />
      </div>
    </div>
  );
};

export default Blog;
