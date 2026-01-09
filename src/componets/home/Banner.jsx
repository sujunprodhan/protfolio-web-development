'use client';
import Link from 'next/link';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { CiFacebook } from 'react-icons/ci';
import { FaJava, FaLinkedinIn, FaReact } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
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
    <section className="w-full min-h-screen py-10  ">
      <div className="  flex flex-cols-1 md:flex-cols-2 justify-between items-center">
        {/* Left Content */}
        <div className="">
          <h4 className="text-gray-100 text-lg md:text-xl font-medium">WELCOME TO MY WORLD</h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-100 font-bold">
            Hi, I'm <span className="text-[#FF014F]">Sujon Prodhan</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-3xl text-gray-100 font-semibold">
            a <span>{text}</span>
            <Cursor cursorColor="#FF014F" />
          </h2>
          <p className="text-gray-300 mt-3 md:mt-5 max-w-md">
            I use animation as a third dimension to simplify experiences and guide users through
            interactions. I don't just add motion to spruce things up, but to enhance usability
            meaningfully.
          </p>

          {/* Social & Skills */}
          <div className="flex flex-col w-full sm:flex-row sm:justify-between mt-6 gap-6 sm:gap-0">
            {/* Social Links */}
            <div className="space-y-2">
              <h3 className="text-gray-100 font-semibold mb-2">Find Me</h3>
              <div className="flex gap-3">
                {[
                  {
                    href: 'https://www.facebook.com/sujon.prodhan.146',
                    icon: <CiFacebook size={24} />,
                  },
                  {
                    href: 'https://www.linkedin.com/in/sujun-prodhan-web-development/',
                    icon: <FaLinkedinIn size={24} />,
                  },
                  {
                    href: 'https://github.com/sujunprodhan',
                    icon: <FaGithub size={24} />,
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3 }}
                    className="h-10 w-10 bg-gray-900/50 text-white rounded-md flex items-center justify-center shadow-lg hover:bg-opacity-40 transition-all duration-300"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Skill Icons */}
            <div className="space-y-2">
              <h3 className="text-gray-100 font-semibold mb-2">Best Skill On</h3>
              <div className="flex gap-3 flex-wrap">
                {[
                  <FaReact size={24} />,
                  <SiNextdotjs size={24} />,
                  <FaJava size={24} />,
                  <RiTailwindCssFill size={24} />,
                ].map((icon, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    className="h-10 w-10 bg-gray-900/50 text-white rounded-md flex items-center justify-center shadow-lg cursor-pointer hover:bg-opacity-40 transition-all duration-300"
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex justify-center items-center relative p-5"
        >
          <Image
            src="/sujon.webp"
            alt="sujon"
            width={500}
            height={500}
            priority
            className="object-cover z-10 w-full max-w-xs sm:max-w-sm md:max-w-md  rounded-br-[90px] rounded-bl-[120px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
