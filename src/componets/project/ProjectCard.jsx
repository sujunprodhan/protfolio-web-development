import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaGlobe } from 'react-icons/fa6';

const ProjectCard = ({ title, discretion, image }) => {
  return (
    <div className="w-full px-12 h-auto py-10 space-y-5 rounded-lg shadow-2xl flex flex-col bg-linear-to-r from-gray-500 to-[#202327] group hover:bg-linear-to-b hover:from-gray-900 transition-colors duration-1000">
      <div className="w-full h-60 object-cover group-hover:scale-105 duration-300">{image}</div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-[#FF014F]">{title}</h1>
        <div className="flex items-center gap-2">
          <Link href={'/'}>
            <span className="text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-white hover:-translate-y-1 transition-all hover:text-[#FF014F] cursor-pointer duration-300">
              <FaGithub />
            </span>
          </Link>
          <Link href={'/'}>
            <span className="text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-white hover:-translate-y-1 transition-all hover:text-[#FF014F] cursor-pointer duration-300">
              <FaGlobe />
            </span>
          </Link>
        </div>
      </div>
      <div className="flex text-white">
        <p>{discretion}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
