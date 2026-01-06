import React from 'react';
import ResumeCard from './ResumeCard';

const ProfessionalSkill = () => {
  return (
    <div>
      <div className="flex gap-7">
        {/* 1st Section */}
        <div>
          <div className="py-12">
            <p className="text-[#FF014F]">1998-2010</p>
            <h2 className="text-4xl text-gray-100 font-bold">Professional Skill</h2>
          </div>
          <div className=" w-full border-l-5 border-l-black/50 text-white flex flex-col gap-10 ">
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
            <h2 className="text-4xl text-gray-100 font-bold">Job Experience</h2>
          </div>
          <div className=" w-full border-l-5 border-l-black/50 text-white flex flex-col gap-10 ">
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
  );
};

export default ProfessionalSkill;
