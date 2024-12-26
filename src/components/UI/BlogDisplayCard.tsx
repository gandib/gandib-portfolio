"use client";
import { Card, Image } from "@nextui-org/react";
import { IMeta } from "./ProjectDispalyCard";
import { IBlog } from "@/src/types";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/navigation";

const BlogDisplayCard = ({
  blogs,
}: {
  blogs: { meta: IMeta; result: IBlog[] };
}) => {
  const router = useRouter();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grow relative">
      {blogs &&
        blogs?.result?.length > 0 &&
        blogs?.result?.slice(0, 3).map((blog: IBlog) => (
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
  );
};

export default BlogDisplayCard;
