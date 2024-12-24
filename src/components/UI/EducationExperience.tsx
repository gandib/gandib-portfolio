import { Divider } from "@nextui-org/react";

const EducationExperience = () => {
  return (
    <div className="my-16">
      <h1 className="text-2xl xs:text-3xl font-bold flex justify-center mb-12">
        Education
      </h1>
      <div className="grid md:grid-cols-11 gap-4">
        {/* Left Section */}
        <div className="md:col-span-5 flex flex-col items-end">
          <h1 className="text-xl font-bold my-2 flex">Bachelor of Arts</h1>
          <h2 className="text-gray-500 text-lg">
            Honours in English (4-year course)
          </h2>
          <h2 className="mt-2 sm:text-xl font-bold">
            National University, Bangladesh
          </h2>
        </div>

        {/* Divider */}
        <div className="md:col-span-1 flex justify-center">
          <Divider orientation="vertical" className="h-full" />
        </div>

        {/* Right Section */}
        <div className="md:col-span-5 flex flex-col items-start">
          <h1 className="text-xl font-bold my-2">
            Higher Secondary Certificate (XII)
          </h1>
          <h2 className="text-gray-500 text-lg">Department of Humanities</h2>
          <h2 className="mt-2 sm:text-xl font-bold">
            Board of Intermediate and Secondary Education, Sylhet, Bangladesh
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-11 gap-4">
        {/* Left Section */}
        <div className="md:col-span-5 flex flex-col items-end mt-8 sm:mt-12">
          <h1 className="text-xl font-bold my-2">Website development course</h1>
          <h2 className="text-gray-500 text-lg text-right">
            I have completed an online Website Development course from
            Programming Hero, Bangladesh. The course consisted of two levels:
            Level 1 (December 2021 – June 2022) and Level 2 (April 2024 –
            December 2024).
          </h2>
        </div>

        {/* Divider */}
        <div className="md:col-span-1 flex justify-center">
          <Divider orientation="vertical" className="h-full" />
        </div>

        {/* Right Section */}
        <div className="md:col-span-5 flex flex-col items-start sm:mt-12">
          <h1 className="text-xl font-bold my-2">PTE Academic score</h1>
          <h2 className="text-gray-500 text-lg">
            I took a PTE Academic test on 01 February 2024. My PTE Academic
            Overall score is 50, and 49 in Listening, 57 in Reading, 51 in
            Speaking and 51 in Writing.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
