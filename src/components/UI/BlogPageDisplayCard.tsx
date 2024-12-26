"use client";
import { Card, Image, Pagination } from "@nextui-org/react";
import { IMeta } from "./ProjectDispalyCard";
import { IBlog, queryParams } from "@/src/types";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllBlogs } from "@/src/services/BlogService";

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grow relative">
        {blogData &&
          blogData?.result?.length > 0 &&
          blogData?.result?.map((blog: IBlog) => (
            <Card key={blog._id} className="mt-12">
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
                  <p className="text-lg  font-bold text-primary">{blog.tag}</p>
                  <h4 className="font-semibold text-2xl">{blog.title}</h4>
                  <p className="text-gray-500 py-2">
                    {format(parseISO(blog.createdAt), "dd MMM, yyyy")}
                  </p>
                  <div className="mt-6 text-lg">
                    <div
                      className="instructions"
                      dangerouslySetInnerHTML={{
                        __html:
                          blog.description.slice(0, 150) +
                          `${blog.description.length > 150 ? "..." : ""}`,
                      }}
                    />
                  </div>
                  <button
                    onClick={() => router.push(`/blogs/details/${blog._id}`)}
                    className=" mt-8 text-primary-500 hover:text-green-500"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </Card>
          ))}
      </div>
      {blogData?.result?.length > 0 ? (
        <Pagination
          total={totalPage}
          page={currentPage}
          showControls
          onChange={(page) => setCurrentPage(page)}
          className="flex justify-center my-2"
        />
      ) : (
        "No blogs to show!"
      )}
    </div>
  );
};

export default BlogPageDisplayCard;
