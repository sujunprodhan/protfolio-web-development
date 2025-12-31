import Link from 'next/link';
import React from 'react';
import { MdNearbyError } from 'react-icons/md';

const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-3">
      <MdNearbyError size={70} className="text-primary" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-red-600 text-5xl">Page Not Found</h1>
        <p className="text-gray-500">Please try again!</p>
      </div>
      <Link href={'/'} className="btn btn-primary">
        Go to home
      </Link>
    </div>
  );
};

export default Error404;
