"use client";
import { getAllProjects } from "@/src/services/ProjectService";
import { IProject, queryParams } from "@/src/types";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Pagination,
} from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

const ProjectPageDispalyCard = ({
  projects,
}: {
  projects: { meta: IMeta; result: IProject[] };
}) => {
  const [projectData, setProjectData] = useState(projects);
  const [currentPage, setCurrentPage] = useState(projectData?.meta?.page);
  const [limit, setLimit] = useState(10);
  const [totalPage, setTotalPage] = useState(projectData?.meta?.totalPage);
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
        const { data: allProjects } = await getAllProjects([
          ...query,
          { name: "sort", value: "-createdAt" },
        ]);
        setProjectData(allProjects);
        setTotalPage(projectData?.meta?.totalPage);
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
      <div>
        {projects &&
          projects?.result?.length > 0 &&
          projects?.result?.map((project: IProject) => (
            <Card key={project._id} className="mt-12">
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
          ))}
      </div>
      {projectData?.result?.length > 0 ? (
        <Pagination
          total={totalPage}
          page={currentPage}
          showControls
          onChange={(page) => setCurrentPage(page)}
          className="flex justify-center my-2"
        />
      ) : (
        "No projects to show!"
      )}
    </div>
  );
};

export default ProjectPageDispalyCard;