import React from 'react';

const ResumeCard = ({ title, short, dis, university, result }) => {
  return (
    <div className="w-full h-1/3 flex group">
      <div
        className="w-10 h-2 bg-white/5 backdrop-blur-xl
  border border-white/10 mt-10 shadow-2xl relative group"
      >
        <span
          className="absolute shadow-2xl w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white/5 backdrop-blur-xl
  border border-white/10 "
        >
          <span
            className="w-3 h-3 rounded-full shadow-2xl bg-white/5 backdrop-blur-xl
  border border-white/10 inline-flex group-hover:bg-[#FF014F] duration-300"
          ></span>
        </span>
      </div>
      <div className="w-full flex-1">
        <div
          className="w-full h-50 shadow-2xl bg-white/5 backdrop-blur-xl
  border border-white/10 hover:bg-gray-900 duration-300 rounded-lg gap-10 p-5"
        >
          <div className="flex justify-between items-center space-y-5">
            <div>
              <h1 className="text-2xl font-semibold text-white">{title}</h1>
              <p className="text-gray-300">{short}</p>
            </div>
            <div>
              <button className="bg-white/5 py-1 px-5 rounded-md shadow-md sh text-[#FF014F] font-medium">
                {result}
              </button>
            </div>
          </div>
          <p>{dis}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
