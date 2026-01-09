import React from 'react';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <div>
      <div className="flex gap-7">
        {/* 1st Section */}
        <div>
          <div className="py-12">
            <p className="text-[#FF014F]">1998-2010</p>
            <h2 className="text-4xl text-gray-100 font-bold">Education </h2>
          </div>
          <div className=" w-full border-l-5 border-l-black/50 text-white flex flex-col gap-10 ">
            <div className="flex flex-col gap-5">
              <div>
                <ResumeCard
                  title="Master of Computer Applications - MCA"
                  short="Govt. Azizul Haque College (2012-2016)"
                  result="2.93/4"
                  dis="Higher education Coding Club / Programming Society – Participated in hackathons, coding competitions, and peer coding sessions."
                />
              </div>
              <div>
                <ResumeCard
                  title="Higher Secondary Education"
                  short="Polasbary Govt College (2009 - 2011)"
                  result="3.56/4"
                  dis="Focused on advanced science subjects and computer fundamentals, preparing for undergraduate computer science studies."
                />
              </div>
              <div>
                <ResumeCard
                  title="Secondary School Education"
                  short="Dholbhanga High School & College"
                  result="4.29/5"
                  dis="Completed foundational courses in science and mathematics, building a strong base for higher studies."
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
          <div className=" w-full  border-l-5 border-l-black/50 text-white flex flex-col gap-10 ">
            <div className="flex flex-col gap-5">
              <div>
                <ResumeCard
                  title="BrightTech Solutions"
                  short="Feb 2022 - Mar 2024"
                  result="Full time"
                  dis="Developed responsive websites, implemented modern frontend and backend frameworks, and optimized performance for client projects."
                />
              </div>
              <div>
                <ResumeCard
                  title="NexaSoft LLC"
                  short="Full Stack Developer"
                  result="Remote"
                  dis="Built scalable web applications, integrated APIs, ensured cross-browser compatibility, and collaborated closely with design teams."
                />
              </div>
              <div>
                <ResumeCard
                  title="CloudNova Inc."
                  short="Apr 2024 - Present"
                  result="Remote"
                  dis="Leading web development projects, mentoring junior developers, and delivering high-quality, secure, and user-friendly applications."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
