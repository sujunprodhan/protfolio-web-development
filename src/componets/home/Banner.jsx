'use client';
import Link from 'next/link';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { CiFacebook } from 'react-icons/ci';
import { FaJava, FaLinkedinIn, FaReact } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiJavascript } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner = () => {
  const [text] = useTypewriter({
    words: ['Professional Coder', 'MERN Stack', 'Full Stack Developer'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section className="w-full min-h-screen py-20 flex items-center justify-center overflow-hidden">
      <div className="w-full px-5 sm:px-8 md:px-0 flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-8">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col justify-center space-y-6 z-10"
        >
          <span className="text-[#FF014F] text-sm md:text-sm font-semibold tracking-[3px] uppercase drop-shadow-md">
            Welcome to my world
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
            Hi, I'm <span className="text-[#FF014F]">Sujon Prodhan</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-200 font-bold min-h-[40px] md:min-h-[48px]">
            a <span className="text-white">{text}</span>
            <Cursor cursorColor="#FF014F" />
          </h2>
          <p className="text-gray-400 mt-2 text-base md:text-lg max-w-xl leading-relaxed">
            I use animation as a third dimension to simplify experiences and guide users through
            interactions. I don't just add motion to spruce things up, but to enhance usability
            meaningfully.
          </p>

          {/* Social & Skills */}
          <div className="flex flex-col xl:flex-row justify-between mt-10 gap-8 xl:gap-0">
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-gray-400 text-sm font-semibold tracking-wider uppercase">Find Me</h3>
              <div className="flex gap-4">
                {[
                  {
                    href: 'https://www.facebook.com/sujon.prodhan.146',
                    icon: <CiFacebook size={22} />,
                  },
                  {
                    href: 'https://www.linkedin.com/in/sujun-prodhan-web-development/',
                    icon: <FaLinkedinIn size={20} />,
                  },
                  {
                    href: 'https://github.com/sujunprodhan',
                    icon: <FaGithub size={20} />,
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5, color: '#FF014F' }}
                    className="h-14 w-14 bg-[#202327] shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] text-gray-300 rounded-lg flex items-center justify-center hover:bg-[#1e2024] transition-all duration-300"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Skill Icons */}
            <div className="space-y-4">
              <h3 className="text-gray-400 text-sm font-semibold tracking-wider uppercase">Best Skill On</h3>
              <div className="flex gap-4 flex-wrap">
                {[
                  <FaReact size={22} />,
                  <SiNextdotjs size={20} />,
                  <FaJava size={20} />,
                  <RiTailwindCssFill size={22} />,
                ].map((icon, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, color: '#FF014F' }}
                    className="h-14 w-14 bg-[#202327] shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] text-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#1e2024] transition-all duration-300"
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 min-h-[400px]">
          {/* Pulsing Glowing Circle Background */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] bg-[#FF014F] rounded-full blur-[80px] z-0"
          ></motion.div>

          {/* Solid Pulse Outline Ring */}
          <motion.div
             animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] border border-[#FF014F]/40 rounded-full z-0"
          ></motion.div>

          {/* Floating Icons */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[5%] md:left-[10%] z-20 bg-[#202327] p-3 rounded-full shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] text-[#61DAFB]"
          >
            <FaReact size={35} />
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] right-[5%] md:right-[10%] z-20 bg-[#202327] p-3 rounded-full shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] text-white"
          >
            <SiNextdotjs size={35} />
          </motion.div>

          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] left-[5%] md:left-[15%] z-20 bg-[#202327] p-3 rounded-full shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] text-[#F7DF1E]"
          >
            <SiJavascript size={35} />
          </motion.div>

          <motion.div
            animate={{ y: [15, -15, 15] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] right-[5%] md:right-[15%] z-20 bg-[#202327] p-3 rounded-full shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] text-[#47A248]"
          >
            <SiMongodb size={35} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            {/* The Image */}
            <div className="relative">
              <Image
                src="/sujon.webp"
                alt="sujon"
                width={500}
                height={500}
                priority
                className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md hover:scale-[1.02] transition-transform duration-500 ease-out drop-shadow-2xl"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                }}
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
