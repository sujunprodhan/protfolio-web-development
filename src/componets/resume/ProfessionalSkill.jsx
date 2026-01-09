import React from 'react';
import ResumeCard from './ResumeCard';

const ProfessionalSkill = () => {
  return (
    <div>
      <div className="py-12 text-center">
        <p className="text-[#FF014F]">2009-2016</p>
        <h2 className="text-4xl text-gray-100 font-bold">Professional Skill</h2>
      </div>
      <div className="grid grid-cols-2 w-full gap-7">
        {/* 1st Section */}

        <div>
          <div className=" w-full border-l-5 border-l-black/50 text-white flex flex-col gap-10 ">
            <div className="flex flex-col gap-5">
              <div>
                <ResumeCard
                  title="Frontend Development"
                  short="React.js, Next.js, JavaScript (ES6+), Tailwind CSS"
                  result={'Expert'}
                />
              </div>
              <div>
                <ResumeCard
                  title="Backend Development"
                  short="Node.js, Express.js, REST API Development"
                  result={'Expert'}
                />
              </div>
              <div>
                <ResumeCard
                  title="Database Management"
                  short="MongoDB, MySQL, PostgreSQL"
                  result={'Intermediate'}
                />
              </div>
            </div>
          </div>
        </div>
        {/* 2nd Section */}
        <div>
          <div className=" w-full border-l-5 border-l-black/50 text-white flex flex-col gap-10 ">
            <div className="flex flex-col gap-5">
              <div>
                <ResumeCard
                  title="Authentication & Security"
                  short="JWT, Firebase Auth, Password Hashing"
                  result={'Expert'}
                />
              </div>
              <div>
                <ResumeCard
                  title="Tools & Version Control"
                  short="Git, GitHub, VS Code, Postman"
                  result={'Expert'}
                />
              </div>
              <div>
                <ResumeCard
                  title="Deployment & Hosting"
                  short="Vercel, Netlify, Render, Firebase"
                  result={'Expert'}
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
