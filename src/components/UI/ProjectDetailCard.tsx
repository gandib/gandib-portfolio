"use client";

import { Card as NextUiCard, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { IProject } from "@/src/types";
import Link from "next/link";

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

const ProjectDetailCard = ({ project }: { project: IProject }) => {
  return (
    <div>
      {project ? (
        <NextUiCard
          key={project._id}
          isFooterBlurred
          className=" hover:shadow-2xl pb-4"
        >
          <CardHeader className=" ">
            {project?.image && (
              <Image
                width={1500}
                height={500}
                src={project?.image[0]}
                alt="Product image"
              />
            )}
          </CardHeader>

          <CardBody>
            <div className=" w-full">
              <h4 className="mt-1 rounded  p-1 text-lg sm:text-xl md:text-xl font-bold text-[#ce8d86]">
                {project.tag}
              </h4>
              <div className="flex">
                {project?.clientLiveLink && (
                  <p className="mt-1 rounded  p-1 text-lg  md:text-lg font-semibold ">
                    <Link
                      href={project?.clientLiveLink}
                      target="_blank"
                      className="text-green-500"
                    >
                      Client
                    </Link>
                  </p>
                )}
                {project?.serverLiveLink && (
                  <p className="mt-1 rounded  p-1 text-lg  md:text-lg font-semibold ">
                    <Link
                      href={project?.serverLiveLink}
                      target="_blank"
                      className="text-green-500"
                    >
                      | Server
                    </Link>
                  </p>
                )}
                {project?.gitClientLink && (
                  <p className="mt-1 rounded  p-1 text-lg  md:text-lg font-semibold ">
                    <Link
                      href={project?.gitClientLink}
                      target="_blank"
                      className="text-green-500"
                    >
                      | GitHub Client
                    </Link>
                  </p>
                )}
                {project?.gitServerLink && (
                  <p className="mt-1 rounded  p-1 text-lg  md:text-lg font-semibold ">
                    <Link
                      href={project?.gitServerLink}
                      target="_blank"
                      className="text-green-500"
                    >
                      | GitHub Server
                    </Link>
                  </p>
                )}
              </div>
              <h4 className="mt-1 rounded  p-1 text-xl  md:text-xl font-semibold ">
                {project?.title}
              </h4>
            </div>
            <div className="my-1 rounded  p-1 lg:text-lg font-medium flex ">
              <h1>{project.description}</h1>
            </div>
          </CardBody>
        </NextUiCard>
      ) : (
        "No projects to show!"
      )}
    </div>
  );
};

export default ProjectDetailCard;
