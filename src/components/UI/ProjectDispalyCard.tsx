"use client";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";

const ProjectDispalyCard = () => {
  return (
    <Card className="mt-12">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="">
          <Image
            alt="Card background"
            className="object-cover rounded-xl md:h-[350px]"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={500}
          />
        </div>
        <div className="md:pt-8 pt-2 p-4">
          <p className="text-lg uppercase font-bold text-yellow-400">
            Daily Mix
          </p>
          <h4 className="font-semibold text-2xl">
            Frontend Radio beyond this is very nice project i can show
            everywhere
          </h4>
          <p className="mt-6 text-gray-500">
            Frontend Radio beyond this is very nice project i can show
            everywhere
          </p>
          <button className="flex border-2 border-black py-3 px-6 mt-8 hover:bg-black hover:text-white">
            View Project <ArrowUpRight className="ml-2" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectDispalyCard;
