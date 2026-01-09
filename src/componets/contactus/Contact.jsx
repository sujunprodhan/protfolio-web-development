'use client';
import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
    <section className="w-full min-h-screen py-20 text-white">
      <p className="text-[#BF0A4D] text-center text-lg font-semibold uppercase tracking-wider">
        CONTACT
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact With Me</h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="w-full md:w-[35%] card-3d p-6 rounded-xl shadow-lg flex flex-col items-start space-y-4"
        >
          <Image
            src="/contact-1.webp"
            alt="Handshake"
            width={400}
            height={200}
            className="rounded-lg mb-4 w-full object-cover"
          />
          <h2 className="text-2xl md:text-3xl font-bold">Sujun Prodhan</h2>
          <p className="text-white/60">Full Stack Developer</p>
          <p className="text-sm text-white/50">
            Professional Full Stack Developer specializing in scalable web applications, modern
            frameworks, secure APIs, and collaborative problem solving.
          </p>
          <p className="mt-2">Phone: +880-1746017448</p>
          <p>Email: prodhan931@gmail.com</p>
          <p className="mt-4 uppercase text-sm">Find Me On</p>
          <div className="flex space-x-4 mt-2">
            <Link href="https://www.facebook.com/sujon.prodhan.146">
              <motion.div
                whileHover={{ y: -3 }}
                className="h-10 w-10 card-3d text-white rounded-md flex items-center justify-center cursor-pointer"
              >
                <CiFacebook size={24} className="hover:text-[#FF014F] transition-all" />
              </motion.div>
            </Link>
            <Link href="https://www.linkedin.com/in/sujun-prodhan-web-development/">
              <motion.div
                whileHover={{ y: -3 }}
                className="h-10 w-10 card-3d text-white rounded-md flex items-center justify-center cursor-pointer"
              >
                <FaLinkedinIn size={24} className="hover:text-[#FF014F] transition-all" />
              </motion.div>
            </Link>
            <Link href="https://github.com/sujunprodhan">
              <motion.div
                whileHover={{ y: -3 }}
                className="h-10 w-10 card-3d text-white rounded-md flex items-center justify-center cursor-pointer"
              >
                <FaGithub size={24} className="hover:text-[#FF014F] transition-all" />
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          whileHover={{ y: -3 }}
          className="w-full md:w-[63%] card-3d p-6 rounded-xl shadow-md"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border-b border-gray-400/50 card-3d rounded text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF014F]"
                  {...register('name', { required: true })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
              </div>
              <div className="flex-1">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border-b border-gray-400/50 card-3d rounded text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF014F]"
                  {...register('phone')}
                />
              </div>
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border-b border-gray-400/50 card-3d rounded text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF014F]"
              {...register('email', { required: true })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border-b border-gray-400/50 card-3d rounded text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF014F]"
              {...register('subject', { required: true })}
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">Subject is required</p>}

            <textarea
              placeholder="Message"
              className="w-full p-3 border-b border-gray-400/50 card-3d rounded text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF014F] h-60 resize-none"
              {...register('message', { required: true })}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full p-3 bg-[#FF014F] text-white rounded-lg shadow-md transition-all duration-300 hover:bg-[#e60042]"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
