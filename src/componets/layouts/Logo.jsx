import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex justify-center items-center group">
      <Link href={'/'} className="flex items-center gap-2">
        {/* Monogram Icon */}
        <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#202327] to-[#121415] shadow-[4px_4px_10px_#111214,-4px_-4px_10px_#292c31] border border-gray-800 group-hover:border-[#FF014F]/50 transition-all duration-300 overflow-hidden">
          <span className="text-[#FF014F] font-black text-lg italic tracking-tighter relative z-10 group-hover:scale-110 transition-transform duration-300">
            SP
          </span>
          {/* subtle glow inside */}
          <div className="absolute inset-0 bg-[#FF014F]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Text */}
        <h1 className="font-extrabold text-2xl md:text-3xl tracking-tight text-gray-200 flex items-center transition-colors duration-300 group-hover:text-white">
          Sujon
          <span className="text-[#FF014F] ml-1 relative">
            Prodhan
            {/* Animated Underline */}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF014F] transition-all duration-300 group-hover:w-full"></span>
          </span>
          <span className="text-[#FF014F] text-4xl leading-[0] mb-3 ml-[2px] animate-pulse">.</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
