import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaCode } from 'react-icons/fa6';
import { FaCloud, FaDatabase, FaMobileAlt, FaServer } from 'react-icons/fa';
import { FaLaptopCode, FaLongArrowAltRight } from 'react-icons/fa';

const FeatureSection = () => {
  return (
    <section className="w-full py-20 border-b border-b-gray-400 mt-25 ">
      <div>
        <h4 className="text-xl text-[#FF014F] font-semibold uppercase  tracking-wide">Features</h4>
        <h2 className="text-5xl font-bold text-white">What I Do</h2>
      </div>
      <div className="grid grid-cols-3 w-full gap-5 mt-10">
        <div>
          <FeatureCard
            title="Frontend Development"
            short="Build responsive and modern user interfaces using React, Next.js, and Tailwind CSS.
          "
            icon={<FaLaptopCode />}
            arrow={<FaLongArrowAltRight />}
          />
        </div>
        <div>
          <FeatureCard
            title="Backend Development"
            short="Design and implement RESTful APIs, server logic, and authentication with Node.js & Express.
          "
            icon={<FaServer />}
            arrow={<FaLongArrowAltRight />}
          />
        </div>
        <div>
          <FeatureCard
            title="Database Management"
            short="Efficiently manage MongoDB and SQL databases for scalable web applications.
          "
            icon={<FaDatabase />}
            arrow={<FaLongArrowAltRight />}
          />
        </div>
        <div>
          <FeatureCard
            title="Full Stack Integration'"
            short="Combine frontend and backend seamlessly to create full-featured web applications.
          "
            icon={<FaCode />}
            arrow={<FaLongArrowAltRight />}
          />
        </div>
        <div>
          <FeatureCard
            title="Cloud Deployment"
            short="Deploy web apps on cloud platforms like Vercel, Netlify, and AWS with CI/CD pipelines.
          "
            icon={<FaCloud />}
            arrow={<FaLongArrowAltRight />}
          />
        </div>

        <div>
          <FeatureCard
            title="Mobile Responsiveness"
            short="Ensure apps look perfect on any device with responsive design best practices.
          "
            icon={<FaMobileAlt />}
            arrow={<FaLongArrowAltRight />}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
