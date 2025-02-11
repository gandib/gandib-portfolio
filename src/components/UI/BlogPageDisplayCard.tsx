"use client";
import { Card, Image, Pagination } from "@nextui-org/react";
import { IMeta } from "./ProjectDispalyCard";
import { IBlog, queryParams } from "@/src/types";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllBlogs } from "@/src/services/BlogService";
import * as motion from "framer-motion/client";

const BlogPageDisplayCard = ({
  blogs,
}: {
  blogs: { meta: IMeta; result: IBlog[] };
}) => {
  const [blogData, setBlogData] = useState(blogs);
  const [currentPage, setCurrentPage] = useState(blogData?.meta?.page);
  const [limit, setLimit] = useState(10);
  const [totalPage, setTotalPage] = useState(blogData?.meta?.totalPage);
  const router = useRouter();

  useEffect(() => {
    const query: queryParams[] = [];
    if (limit) {
      query.push({ name: "limit", value: limit });
    }
    if (currentPage) {
      query.push({ name: "page", value: currentPage });
    }

    const fetchData = async () => {
      try {
        const { data: allBlogs } = await getAllBlogs([
          ...query,
          { name: "sort", value: "-createdAt" },
        ]);
        setBlogData(allBlogs);
        setTotalPage(blogData?.meta?.totalPage);
      } catch (error) {
        console.error("Failed to fetch related products:", error);
      }
    };

    if (query.length > 0) {
      fetchData();
    }
  }, [currentPage, totalPage]);

  return (
    <div>
      <h1 className="text-xl sm:text-2xl mt-6 font-semibold flex justify-start">
        Blogs
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 grow relative mt-12">
        {blogData &&
          blogData?.result?.length > 0 &&
          blogData?.result?.map((blog: IBlog) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.2,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              key={blog._id}
            >
              <Card className="">
                <div className="">
                  <div className="">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl md:h-[350px]"
                      src={blog.image[0]}
                      width={500}
                    />
                  </div>
                  <div className="md:pt-8 pt-2 p-4">
                    <p className="text-lg  font-bold text-[#ce8d86]">
                      {blog.tag}
                    </p>
                    <h4 className="font-semibold text-2xl">{blog.title}</h4>
                    <p className="text-gray-500 py-2">
                      {format(parseISO(blog.createdAt), "dd MMM, yyyy")}
                    </p>
                    <div className="mt-6 text-lg">
                      <div
                        className="instructions"
                        dangerouslySetInnerHTML={{
                          __html:
                            blog.description.slice(0, 145) +
                            `${blog.description.length > 145 ? "..." : ""}`,
                        }}
                      />
                    </div>
                    <button
                      onClick={() => router.push(`/blogs/details/${blog._id}`)}
                      className=" mt-8 text-yellow-500 hover:text-yellow-400"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
      </div>
      {blogData?.result?.length > 0 ? (
        <Pagination
          total={totalPage}
          page={currentPage}
          showControls
          color="warning"
          onChange={(page) => setCurrentPage(page)}
          className="flex justify-center mb-4 mt-6"
        />
      ) : (
        "No blogs to show!"
      )}
    </div>
  );
};

export default BlogPageDisplayCard;
