import { Sparkle } from "lucide-react";
import BlogDisplayCard from "./BlogDisplayCard";

const Blog = () => {
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <BlogDisplayCard />
      </div>
      {/* <div className="flex justify-center">
        <button className="flex border-2 bg-black text-white py-3 px-6 mt-8 hover:bg-white hover:text-black">
          View All Blogs
        </button>
      </div> */}
    </div>
  );
};

export default Blog;
