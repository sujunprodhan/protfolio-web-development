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
    <div className="py-30">
      <div className="space-y-3">
        <h1 className="text-xl font-semibold text-[#FF014F] flex justify-center items-center">
          FULL STACK DEVELOPER
        </h1>
        <h2 className="text-5xl mb-10 text-gray-100 font-bold flex justify-center items-center">
          My Skills
        </h2>
      </div>
      <div>
        <ul className="grid grid-cols-3 rounded-md">
         
          <li
            onClick={() => setActiveTab('education')}
            className={`w-full h-15 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center  rounded-none hover:scale-102 overflow-hidden hover:bg-gray-950 ${
              activeTab === 'education' ? 'bg-opacity-40 scale-102 bg-gray-950' : ''
            }`}
          >
            Education
          </li>
          <li
            onClick={() => setActiveTab('professional')}
            className={`w-full h-15 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center  rounded-none hover:scale-102 overflow-hidden hover:bg-gray-950 ${
              activeTab === 'professional' ? 'bg-opacity-40 scale-102 bg-gray-950' : ''
            }`}
          >
            Professional Skill
          </li>
          <li
            onClick={() => setActiveTab('experience')}
            className={`w-full h-15 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center rounded-none hover:scale-102 overflow-hidden hover:bg-gray-950 ${
              activeTab === 'experience' ? 'bg-opacity-40 scale-102 bg-gray-950' : ''
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
