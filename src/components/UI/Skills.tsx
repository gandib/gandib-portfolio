import css from "@/src/assets/icons/css.png";
import html from "@/src/assets/icons/HTML.png";
import js from "@/src/assets/icons/JavaScript.png";
import express from "@/src/assets/icons/express.png";
import node from "@/src/assets/icons/node.png";
import prisma from "@/src/assets/icons/prisma.png";
import react from "@/src/assets/icons/react.png";
import mysql from "@/src/assets/icons/MySql.png";
import sql from "@/src/assets/icons/sql.png";
import postgresql from "@/src/assets/icons/postgresql.png";
import firebase from "@/src/assets/icons/firebase.png";
import github from "@/src/assets/icons/github.svg";
import mongo from "@/src/assets/icons/mongo.png";
import npm from "@/src/assets/icons/npm.svg";
import redux from "@/src/assets/icons/redux.png";
import tailwind from "@/src/assets/icons/tailwind.png";
import typescript from "@/src/assets/icons/typescript.png";
import nextjs from "@/src/assets/icons/nextjs.jpg";
import Image from "next/image";

const Skills = () => {
  const skills = [
    { name: "CSS", logo: css },
    { name: "React", logo: react },
    { name: "Next.js", logo: nextjs },
    { name: "MySQL", logo: mysql },
    { name: "MongoDB", logo: mongo },
    { name: "JavaScript", logo: js },
    { name: "TypeScript", logo: typescript },
    { name: "Node.js", logo: node },
    { name: "Express", logo: express },
    { name: "Tailwind CSS", logo: tailwind },
    { name: "Git", logo: github },
    { name: "HTML", logo: html },
    { name: "Prisma", logo: prisma },
    { name: "SQL", logo: sql },
    { name: "PostgreSQL", logo: postgresql },
    { name: "Firebase", logo: firebase },
    { name: "NPM", logo: npm },
    { name: "Redux", logo: redux },
  ];

  return (
    <div className="my-16">
      <h1 className="text-2xl xs:text-3xl font-bold flex justify-center mb-12">
        Skills
      </h1>

      {/* Skills Container */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 px-4 sm:px-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4  rounded-lg shadow-md hover:bg-primary-300 transition duration-300"
          >
            <Image
              src={skill.logo}
              alt={`${skill.name} logo`}
              width={48}
              height={48}
              className="mb-2"
            />
            {/* <span className="text-lg font-semibold text-yellow-600">
              {skill.name}
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
