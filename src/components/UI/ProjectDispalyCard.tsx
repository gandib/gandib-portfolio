"use client";
import { IProject } from "@/src/types";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as motion from "framer-motion/client";

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

const ProjectDispalyCard = ({
  projects,
}: {
  projects: { meta: IMeta; result: IProject[] };
}) => {
  const router = useRouter();
  return (
    <div>
      {projects &&
        projects?.result?.length > 0 &&
        projects?.result?.slice(0, 3).map((project: IProject) => (
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
            key={project._id}
          >
            <Card className="mt-12">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl md:h-[350px]"
                    src={project.image[0]}
                    width={500}
                  />
                </div>
                <div className="md:pt-8 pt-2 p-4">
                  <p className="text-lg font-bold text-yellow-400">
                    {project.tag}
                  </p>
                  <h4 className="font-semibold text-2xl">{project.title}</h4>
                  <p className="mt-6 text-gray-500">
                    {project.description.slice(0, 150) +
                      `${project.description.length > 150 ? "..." : ""}`}
                  </p>
                  <div className="flex">
                    <Link
                      href={project.clientLiveLink}
                      target="_blank"
                      className="flex border-2 border-primary-500 text-white bg-primary-500 py-3 px-3 lg:px-6 mt-8 hover:bg-black hover:text-white mr-4 xs:text-sm"
                    >
                      Live View <ArrowUpRight className="ml-2" />
                    </Link>
                    <button
                      onClick={() =>
                        router.push(`/projects/details/${project._id}`)
                      }
                      className="flex border-2 border-black py-3 px-3 lg:px-6 mt-8 hover:bg-black hover:text-white xs:text-sm"
                    >
                      Project Detail <ArrowUpRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
    </div>
  );
};

export default ProjectDispalyCard;
