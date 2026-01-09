import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <Link href={'/'}>
        <h1 className="font-bold text-2xl text-white">
          Sujon <span className="text-[#FF0141]">Prodhan</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
