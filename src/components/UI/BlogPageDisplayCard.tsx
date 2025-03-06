"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Pagination,
} from "@nextui-org/react";
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

  const parseHTML = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const bodyText = doc.body.textContent || "";
    return bodyText.slice(0, 145) + (bodyText.length > 145 ? "..." : "");
  };

  return (
    <div>
      <h1 className="text-xl sm:text-2xl mt-6 font-semibold flex justify-start">
        Blogs
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4  grow relative mt-12">
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
              <Card
                isFooterBlurred
                className="rounded-t-none shadow-xl p-2 border-1 border-t-0 rounded-md "
              >
                <CardHeader className="h-[200px] p-0 w-full flex justify-center relative">
                  {blog?.image && (
                    <Image
                      width={500}
                      height={200}
                      src={blog?.image[0]}
                      alt="Product image"
                      className="h-full"
                    />
                  )}
                </CardHeader>

                <CardBody className="w-full">
                  <div className="md:pt-0 pt-2 p-1">
                    <p className="text-sm  font-bold text-[#ce8d86]">
                      {blog.tag}
                    </p>
                    <h4 className="font-semibold text-lg">
                      {blog.title.slice(0, 45) +
                        `${blog.title.length > 45 ? "..." : ""}`}
                    </h4>
                    <p className="text-gray-500 py-0 text-xs">
                      {format(parseISO(blog.createdAt), "dd MMM, yyyy")}
                    </p>
                    <div className="mt-2 text-base text-justify">
                      <div
                        className="instructions"
                        dangerouslySetInnerHTML={{
                          __html: parseHTML(blog.description),
                        }}
                      />
                    </div>
                    <button
                      onClick={() => router.push(`/blogs/details/${blog._id}`)}
                      className=" mt-2 text-yellow-500 hover:text-yellow-400"
                    >
                      Read more
                    </button>
                  </div>
                </CardBody>
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
