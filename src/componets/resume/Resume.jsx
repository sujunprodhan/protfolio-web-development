'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfessionalSkill from './ProfessionalSkill';
import Achievement from './Achievement';
import Education from './Education';
import Experience from './Experience';
const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');
  return (
    <div className="py-30 px-5 sm:px-8 md:px-0">
      <div className="space-y-3">
        <h1 className="text-xl font-semibold text-[#FF014F] flex justify-center items-center">
          FULL STACK DEVELOPER
        </h1>
        <h2 className="text-5xl mb-10 text-gray-100 font-bold flex justify-center items-center">
          My Skills
        </h2>
      </div>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-md overflow-hidden">
          <li
            onClick={() => setActiveTab('education')}
            className={`w-full min-h-56px py-4 bg-gray-900 focus:bg-amber-300  text-base sm:text-lg text-white flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center rounded-none hover:scale-[1.02] hover:bg-gray-950/10 ${
              activeTab === 'education' ? 'text-white bg-gray-900/50 font-bold' : ''
            }`}
          >
            Education
          </li>
          <li
            onClick={() => setActiveTab('professional')}
            className={`w-full min-h-56px py-4 bg-gray-900 text-base sm:text-lg text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center rounded-none hover:scale-[1.02] hover:bg-gray-950/10 ${
              activeTab === 'professional' ? 'text-white bg-gray-900/50 font-bold' : ''
            }`}
          >
            Professional Skill
          </li>
          <li
            onClick={() => setActiveTab('experience')}
            className={`w-full min-h-56px py-4 bg-gray-900 text-base sm:text-lg text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center rounded-none hover:scale-[1.02] hover:bg-gray-950/10 ${
              activeTab === 'experience' ? 'text-white bg-gray-900/50 font-bold' : ''
            }`}
          >
            Experience
          </li>
        </ul>
        {/* Content based on active tab */}
        <div className="mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 2, y: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 1 }}
            >
              {activeTab === 'education' && <Education />}
              {activeTab === 'professional' && <ProfessionalSkill />}
              {activeTab === 'experience' && <Experience />}
              {activeTab === 'achievement' && <Achievement />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
export default Resume;
