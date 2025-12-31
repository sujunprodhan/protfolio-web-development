import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaCode } from 'react-icons/fa6';
import { FaLongArrowAltRight } from 'react-icons/fa';

const FeatureSection = () => {
  return (
    <section className="w-full py-20 border-b border-b-gray-400 mt-25 ">
      <div>
        <h4 className="text-xl text-[#FF014F] font-semibold uppercase  tracking-wide">Features</h4>
        <h2 className="text-5xl font-bold">What I Do</h2>
      </div>
      <div className="grid grid-cols-3 w-full gap-5 mt-10">
        <div>
          <FeatureCard
            title="Business Strategy"
            short="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, perferendis.
          "
            icon={<RxHamburgerMenu />}
            arrow={<FaLongArrowAltRight />}
          />
        </div>
        <div>
          <FeatureCard
            title="Business Strategy"
            short="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, perferendis.
          "
            icon={<RxHamburgerMenu />}
            arrow={<FaLongArrowAltRight />}
          />
        </div>
        <div>
          <FeatureCard
            title="Business Strategy"
            short="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, perferendis.
          "
            icon={<RxHamburgerMenu />}
            arrow={<FaLongArrowAltRight />}
          />
        </div>
        <div>
          <FeatureCard
            title="Business Strategy"
            short="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, perferendis.
          "
            icon={<RxHamburgerMenu />}
            arrow={<FaLongArrowAltRight />}
          />
        </div>
        <div>
          <FeatureCard
            title="Business Strategy"
            short="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, perferendis.
          "
            icon={<RxHamburgerMenu />}
            arrow={<FaLongArrowAltRight />}
          />
        </div>
        <div>
          <FeatureCard
            title="Business Strategy"
            short="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, perferendis.
          "
            icon={<RxHamburgerMenu />}
            arrow={<FaLongArrowAltRight />}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
