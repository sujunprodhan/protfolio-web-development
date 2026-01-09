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

const Banner = () => {
  const [text] = useTypewriter({
    words: ['Professional Coder', 'MERN Starck ', 'Full Starck Developer'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div>
      <section className=" flex items-center px-5">
        <div className=" min-h-screen w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 space-y-5 items-center mt-20">
          {/* Left Content */}
          <div>
            <h4 className="mb-2 text-gray-100">WELCOME TO MY WORLD</h4>
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-5xl text-gray-100 font-bold mb-4">
                Hi, Im <span className="text-[#FF014F]">Sujon Prodhan</span>
              </h1>

              <div>
                <h2 className="text-3xl md:text-3xl text-gray-100 font-semibold">
                  a <span className=" text-gray-100 font-semibold">{text}</span>
                  <Cursor cursorColor="#FF014F" />
                </h2>
              </div>
              <p className="text-gray-100 mt-5">
                I use animation as a third dimension by which to simplify experiences and kuiding
                thro each and every interaction. Im not adding motion just to spruce things up, but
                doing it in ways that.
              </p>
            </div>

            <div>
              <div className="flex justify-between mt-10">
                <div>
                  <h2 className="text-xl text-gray-100 mb-3">Find Me</h2>
                  <div>
                    <div className="flex gap-3 items-center">
                      <Link href={'https://www.facebook.com/sujon.prodhan.146'}>
                        <span className=" h-10 w-10 bg-gray-900/50 bg-opacity-25 text-gray-400 text-xl inline-flex items-center justify-center rounded-md shadow-xl hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                          <CiFacebook size={24} className="hover:text-[#FF014F] text-white" />
                        </span>
                      </Link>
                      <Link href={'https://www.linkedin.com/in/sujun-prodhan-web-development/'}>
                        <span className=" h-10 w-10 bg-gray-900/50 bg-opacity-25 text-gray-400 text-xl inline-flex items-center justify-center rounded-md shadow-xl hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                          <FaLinkedinIn size={24} className="hover:text-[#FF014F] text-white" />
                        </span>
                      </Link>
                      <Link href={'https://github.com/sujunprodhan'}>
                        <span className="h-10 w-10 bg-gray-900/50 bg-opacity-25 text-gray-400 text-xl inline-flex items-center justify-center rounded-md shadow-xl hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                          <FaGithub size={24} className="hover:text-[#FF014F] text-white" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Skill Section */}
                <div>
                  <h2 className="text-xl text-gray-100 mb-3">Best Skill On</h2>
                  {/* Skill Icon section */}
                  <div className="flex gap-3">
                    {/* React Icon */}
                    <span className=" h-10 w-10 bg-gray-900/50 bg-opacity-25 text-gray-400 text-xl inline-flex items-center justify-center rounded-md shadow-xl hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                      <FaReact size={24} className="hover:text-[#FF014F] text-white" />
                    </span>
                    {/* Next.js Icon */}
                    <span className=" h-10 w-10 bg-gray-900/50 bg-opacity-25 text-gray-400 text-xl inline-flex items-center justify-center rounded-md shadow-xl hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                      <SiNextdotjs size={24} className="hover:text-[#FF014F] text-white" />
                    </span>
                    {/* JavaScript Icon */}
                    <span className=" h-10 w-10 bg-gray-900/50 bg-opacity-25 text-gray-400 text-xl inline-flex items-center justify-center rounded-md shadow-xl hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                      <FaJava size={24} className="hover:text-[#FF014F] text-white" />
                    </span>

                    {/* Tailwind Icon */}
                    <span className=" h-10 w-10 bg-gray-900/50 bg-opacity-25 text-gray-400 text-xl inline-flex items-center justify-center rounded-md shadow-xl hover:bg-opacity-40 hover:translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
                      <RiTailwindCssFill size={24} className="hover:text-[#FF014F] text-white" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <section>
            <div className="flex justify-center p-5 items-center relative ">
              <Image
                src="/Sujun_Prodhan_Web_Developer.png"
                alt="Sujun Prodhan - Frontend Developer"
                width={500}
                height={500}
                priority
                className="object-cover z-10"
              />
              <div className="absolute bottom-0 w-100 h-125 bg-linear-to-r from-[#le2024] to-[#le2024] flex justify-center items-center rounded-md shadow-2xl"></div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Banner;
