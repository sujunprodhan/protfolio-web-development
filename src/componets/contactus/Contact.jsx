'use client';
import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { CiFacebook } from 'react-icons/ci';
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="w-full py-20 text-white">
      <p className="text-[#BF0A4D] trx text-center">CONTACT</p>
      <h1 className="text-5xl font-bold text-center mb-10">Contact With Me</h1>
      <div className="max-w-6xl  mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-[35%] bg-[#22262A] p-6 rounded-lg shadow-lg mb-8 md:mb-0">
          <Image
            src="/contact-1.webp"
            alt="Handshake"
            width={400}
            height={200}
            className="rounded-lg mb-4 flex"
          />
          <h2 className="text-3xl font-bold text-white">Sujun Prodhan</h2>
          <p className="text-lg text-white/50">Full Stack Developer</p>
          <p className="text-sm mt-2">
            Professional Full Stack Developer specializing in scalable web applications, modern
            frameworks, architecture, secure APIs, performance optimization, and collaborative
            problem solving.
          </p>
          <p className="mt-4">Phone: +880-1746017448</p>
          <p>Email: prodhan931@gmail.com</p>
          <p className="mt-4 uppercase text-sm">Find Me In</p>
          <div className="flex space-x-4 mt-2">
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
        <div className="w-full md:w-[63%] bg-[#1F2125] p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4  h-155">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border-b border-b-gray-400/50  shadow-md bg-[#191B1E] rounded text-white"
                  {...register('name', { required: true })}
                />
                {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
              </div>
              <div className="w-full md:w-1/2">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border-b border-b-gray-400/50  shadow-md bg-[#191B1E] rounded text-white"
                  {...register('phone')}
                />
              </div>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border-b border-b-gray-400/50  shadow-md bg-[#191B1E] rounded text-white"
              {...register('email', { required: true })}
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border-b border-b-gray-400/50  shadow-md bg-[#191B1E] rounded text-white"
              {...register('subject', { required: true })}
            />
            {errors.subject && <p className="text-red-500 text-sm">Subject is required</p>}
            <textarea
              placeholder="Message"
              className="w-full p-3  h-60 border-b border-b-gray-400/50 shadow-md bg-[#191B1E] rounded text-white"
              {...register('message', { required: true })}
            />
            {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
            <button type="submit" className="w-full p-3 shadow-md bg-[#191B1E] rounded text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
