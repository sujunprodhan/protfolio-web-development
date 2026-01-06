import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      {/* <Link href={'/'}>
        <Image alt="logo" src={'/public/assets/logo.png'} width={50} height={50} />
      </Link> */}
      <h1 className="text-2xl font-bold text-white">
        Sujun <span className='text-primary'>Prodhan</span>
      </h1>
    </div>
  );
};

export default Logo;