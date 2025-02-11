"use client";
import { Button } from "@nextui-org/react";
import gandib from "@/src/assets/gandib.png";
import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";

const Designation = () => {
  const fileId = "1mdN3b_HEGITf0wHHygkpCBMbMfQ1UCKe";
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Gandib_Dhari_Roy_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid lg:grid-cols-2 border-b-1">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        className="mt-16"
      >
        <h1 className="text-yellow-400 text-xl font-bold p-2 bg-yellow-100 inline">
          Hi! I'm Gandib Dhari Roy
        </h1>
        <h2 className="my-12 xs:text-3xl sm:text-4xl text-gray-500 text-xl font-extrabold ">
          Full Stack Web Developer
        </h2>
        <p className="text-gray-500 text-lg">
          I am a passionate Full Stack Web Developer with expertise in both
          front-end and back-end technologies like REACT, NEXTJS as well as
          MongoDB and MySQL.
        </p>
        <div className="my-12">
          <Link
            href={`https://drive.google.com/file/d/${fileId}/view`}
            target="_blank"
          >
            <Button className="bg-gradient-to-r from-[#ce8d86] to-[#e9d15f] text-white xs:text-xl xs:p-8">
              View CV
            </Button>
          </Link>
          <Button
            onPress={handleDownloadCV}
            className="bg-white ml-6 xs:text-xl text-gray-600 font-bold xs:p-8"
          >
            Download CV
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        className="mt-1"
      >
        <Image src={gandib} alt="Gandib Dhari Roy" />
      </motion.div>
    </div>
  );
};

export default Designation;
