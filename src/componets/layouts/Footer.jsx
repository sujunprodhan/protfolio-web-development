'use client';
import Link from 'next/link';
import { CiFacebook } from 'react-icons/ci';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Logo from './Logo';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer
      className="bg-white/5 backdrop-blur-xl
  border border-white/10
  shadow-[0_25px_60px_rgba(0,0,0,0.7)]
  transition-all duration-500; text-white py-12 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo />
            </div>
            <p className="text-gray-400 text-sm">
              Building clean & modern web applications with React, Next.js & TailwindCSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#FF014F] font-semibold text-sm tracking-wider uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 flex flex-col text-gray-300">
              <Link href="#home" className="hover:text-[#FF014F] transition-colors duration-300">
                Home
              </Link>
              <Link href="#about" className="hover:text-[#FF014F] transition-colors duration-300">
                About
              </Link>
              <Link href="#skills" className="hover:text-[#FF014F] transition-colors duration-300">
                Professional Skill
              </Link>
              <Link
                href="#projects"
                className="hover:text-[#FF014F] transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                href="#"
                className="button"
              >
                Projects
              </Link>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#FF014F] font-semibold text-sm tracking-wider uppercase mb-6">
              Resources
            </h3>
            <ul className="space-y-3 flex flex-col text-gray-300">
              <Link
                href="/authentication"
                className="hover:text-[#FF014F] transition-colors duration-300"
              >
                Authentication
              </Link>
              <Link href="/terms" className="hover:text-[#FF014F] transition-colors duration-300">
                Terms of Service
              </Link>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h3 className="text-[#FF014F] font-semibold text-sm tracking-wider uppercase mb-6">
              Connect With Me
            </h3>
            <div className="flex gap-3">
              {[
                { icon: CiFacebook, link: 'https://facebook.com/sujon.prodhan.146' },
                {
                  icon: FaLinkedinIn,
                  link: 'https://linkedin.com/in/sujun-prodhan-web-development/',
                },
                { icon: FaGithub, link: 'https://github.com/sujunprodhan' },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="h-10 w-10 bg-gray-900/50 text-white flex items-center justify-center rounded-md shadow-lg cursor-pointer transition-all duration-300"
                >
                  <item.icon size={24} className="hover:text-[#FF014F]" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Sujun Prodhan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
