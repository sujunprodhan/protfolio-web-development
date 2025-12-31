import React from 'react';

const FeatureCard = ({ title, short, icon, arrow }) => {
  return (
    <section className=" w-full px-12 h-80 rounded-lg shadow-lg flex items-center bg-linear-to-r from-gray-950 to-[#202327] hover:bg-linear-to-b hover:from-black hover:to-[#202327] group">
      <div className="h-72 overflow-hidden">
        <div className="space-y-4 translate-y-20 h-72 group-hover:translate-y-0 transition-transform duration-600">
          <div className="text-2xl text-[#FF014F]">{icon}</div>
          <div className="text-white space-y-5 text-2xl font-bold">{title}</div>
          <div className="text-white ">{short}</div>
          <div className="text-2xl text-[#FF014F]">{arrow}</div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
