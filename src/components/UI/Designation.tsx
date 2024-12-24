"use client";
import { Button } from "@nextui-org/react";
import gandib from "@/src/assets/gandib.png";
import Image from "next/image";

const Designation = () => {
  return (
    <div className="grid lg:grid-cols-2 border-b-1">
      <div className="mt-16">
        <h1 className="text-yellow-400 text-xl font-bold p-2 bg-yellow-100 inline">
          Hi! I'm Gandib Dhari Roy
        </h1>
        <h2 className="my-12 text-xl xs:text-3xl sm:text-4xl font-bold">
          Full Stack Web Developer
        </h2>
        <p className="text-gray-700 text-lg">
          I am a passionate Full Stack Web Developer with expertise in both
          front-end and back-end technologies like REACT, NEXTJS, and MongoDB
          and MySQL.
        </p>
        <div className="my-12">
          <Button className="bg-primary-400 text-white xs:text-xl xs:p-8">
            View CV
          </Button>
          <Button className="bg-white ml-6 xs:text-xl text-gray-600 font-bold xs:p-8">
            Download CV
          </Button>
        </div>
      </div>
      <div className="mt-1">
        <Image src={gandib} alt="Gandib Dhari Roy" />
      </div>
    </div>
  );
};

export default Designation;
