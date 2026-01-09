import React from 'react';
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <div>
      <div className="py-12">
        <p className="text-[#FF014F]">2022 - Present</p>
        <h2 className="text-4xl text-gray-100 font-bold">Job Experience</h2>
      </div>

      <div className="w-full border-l-5 border-l-black/50 text-white flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <ResumeCard
            title="Full Stack Developer"
            short="BrightTech Solutions (Feb 2022 - Mar 2024)"
            result="Full Time"
            dis="Developed full-stack web applications using React, Node.js, Express, and MongoDB. Improved performance and user experience."
          />

          <ResumeCard
            title="MERN Stack Developer"
            short="NexaSoft LLC"
            result="Remote"
            dis="Built REST APIs, handled authentication, and integrated frontend with backend services."
          />

          <ResumeCard
            title="Senior Full Stack Developer"
            short="CloudNova Inc. (Apr 2024 - Present)"
            result="Remote"
            dis="Leading development team, mentoring juniors, and delivering scalable, secure web applications."
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
