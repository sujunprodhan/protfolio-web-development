import React from 'react';
import ResumeCard from './ResumeCard';

const Resume = () => {
  return (
    <div>
      <div className="space-y-3">
        <h1 className="text-xl font-semibold text-[#FF014F] flex justify-center items-center">
          FULL STARK DEVELOPER
        </h1>
        <h2 className="text-5xl font-bold flex justify-center items-center">My Resume</h2>
      </div>
      <div>
        <ul className="grid grid-cols-4">
          <li className="w-full h-15 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border rounded-none hover:scale-102 overflow-hidden hover:bg-gray-950">
            Education
          </li>
          <li className="w-full h-15 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border rounded-none hover:scale-102 overflow-hidden hover:bg-gray-950">
            Professional Skill
          </li>
          <li className="w-full h-15 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border rounded-none hover:scale-102 overflow-hidden hover:bg-gray-950">
            Experience
          </li>
          <li className="w-full h-15 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border rounded-none hover:scale-102 overflow-hidden hover:bg-gray-950">
            Achievement
          </li>
        </ul>
        {/* Qualification */}
        <div className="flex gap-7">
          {/* 1st Section */}
          <div>
            <div className="py-12">
              <p className="text-[#FF014F]">1998-2010</p>
              <h2 className="text-4xl font-bold">Eduction Quality</h2>
            </div>
            <div className=" w-full border border-l-2 border-l-black text-white flex flex-col gap-10 ">
              <div className="flex flex-col gap-5">
                <div>
                  <ResumeCard
                    title="BSc in Computer Science"
                    short="SuperKing College (2001 - 2005)"
                    result="3.53"
                    dis="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                  />
                </div>
                <div>
                  <ResumeCard
                    title="AS - Science & Information"
                    short="SuperKing College (2001 - 2005)"
                    result="3.53"
                    dis="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                  />
                </div>
                <div>
                  <ResumeCard
                    title="Secondary School Education"
                    short="SuperKing College (2001 - 2005)"
                    result="3.53"
                    dis="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 2nd Section */}
          <div>
            <div className="py-12">
              <p className="text-[#FF014F]">2024-2026</p>
              <h2 className="text-4xl font-bold">Job Experience</h2>
            </div>
            <div className=" w-full border border-l-2 border-l-black text-white flex flex-col gap-10 ">
              <div className="flex flex-col gap-5">
                <div>
                  <ResumeCard
                    title="BSc in Computer Science"
                    short="SuperKing College (2001 - 2005)"
                    result="3.53"
                    dis="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                  />
                </div>
                <div>
                  <ResumeCard
                    title="AS - Science & Information"
                    short="SuperKing College (2001 - 2005)"
                    result="3.53"
                    dis="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                  />
                </div>
                <div>
                  <ResumeCard
                    title="Secondary School Education"
                    short="SuperKing College (2001 - 2005)"
                    result="3.53"
                    dis="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
