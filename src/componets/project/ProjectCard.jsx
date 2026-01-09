'use client';

import { FaGithub, FaGlobe } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({ title, discretion, image }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="relative w-full px-10 py-8 space-y-5 rounded-2xl
         card-3d
        shadow-[0_20px_40px_rgba(0,0,0,0.35)]
        hover:border-white/25 hover:shadow-[0_30px_60px_rgba(0,0,0,0.45)]
        transition-all duration-300
      "
    >
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden rounded-xl">
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: '-40%' }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {image}
        </motion.div>
      </div>

      {/* TITLE + ICONS */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-[#FF014F] tracking-tight">{title}</h3>
        <div className="flex gap-2">
          <Link href="/">
            <span className="w-8 h-8 rounded-full bg-gray-900 backdrop-blur-md flex items-center justify-center text-white hover:text-[#FF014F] transition">
              <FaGithub />
            </span>
          </Link>
          <Link href="/">
            <span className="w-8 h-8 rounded-full bg-gray-900 backdrop-blur-md flex items-center justify-center text-white hover:text-[#FF014F] transition">
              <FaGlobe />
            </span>
          </Link>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm text-white/80 leading-relaxed">{discretion}</p>

      {/* SOFT HOVER GLOW */}
      <div className="absolute inset-0 rounded-2xl hover:opacity-100 transition pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
