"use client";
import { Card, Image } from "@nextui-org/react";
import { IMeta } from "./ProjectDispalyCard";
import { IBlog } from "@/src/types";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/navigation";
import * as motion from "framer-motion/client";

const BlogDisplayCard = ({
  blogs,
}: {
  blogs: { meta: IMeta; result: IBlog[] };
}) => {
  const router = useRouter();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 grow relative mt-12">
      {blogs &&
        blogs?.result?.length > 0 &&
        blogs?.result?.slice(0, 3).map((blog: IBlog) => (
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
  );
};

export default BlogDisplayCard;
