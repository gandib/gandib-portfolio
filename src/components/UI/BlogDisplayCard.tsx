"use client";
import { Card, Image } from "@nextui-org/react";
// import Image from "next/image";

const BlogDisplayCard = () => {
  return (
    <Card className="mt-12">
      <div className="">
        <div className="">
          <Image
            alt="Card background"
            className="object-cover rounded-xl md:h-[350px]"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={500}
          />
        </div>
        <div className="md:pt-8 pt-2 p-4">
          <p className="text-lg uppercase font-bold text-primary">Daily Mix</p>
          <h4 className="font-semibold text-2xl">
            Frontend Radio beyond this is very nice project
          </h4>
          <p className="text-gray-500 py-2">Jan 01, 2024</p>
          <p className="mt-6 ">
            Frontend Radio beyond this is very nice project i can show
            everywhere Frontend Radio beyond this is very nice project i can
            show everywhere
          </p>
          <button className=" mt-8 text-primary-500 hover:text-green-500">
            Read more
          </button>
        </div>
      </div>
    </Card>
  );
};

export default BlogDisplayCard;
