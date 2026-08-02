import React from 'react';

const ResumeCard = ({ title, short, dis, university, result }) => {
  return (
    <div className="w-full flex flex-col md:flex-row group min-w-0 gap-4">
      <div className="flex-none w-10 h-2 bg-white/5 backdrop-blur-xl border border-white/10 mt-10 shadow-2xl relative">
        <span className="absolute shadow-2xl w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white/5 backdrop-blur-xl border border-white/10">
          <span className="w-3 h-3 rounded-full shadow-2xl bg-white/5 backdrop-blur-xl border border-white/10 inline-flex group-hover:bg-[#FF014F] duration-300"></span>
        </span>
      </div>
      <div className="w-full flex-1 min-w-0">
        <div className="w-full min-h-55 shadow-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-gray-500 duration-300 rounded-lg gap-10 p-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="min-w-0">
              <h1 className="text-2xl md:text-3xl font-semibold text-white wrap-break-word leading-tight">
                {title}
              </h1>
              <p className="text-gray-300 text-sm sm:text-base wrap-break-word">{short}</p>
            </div>
            <div className="shrink-0">
              <button className="bg-white/5 py-2 px-4 rounded-md shadow-md text-[#FF014F] font-medium text-sm sm:text-base">
                {result}
              </button>
            </div>
          </div>
          <p className="mt-4 text-sm sm:text-base text-gray-200">{dis}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
