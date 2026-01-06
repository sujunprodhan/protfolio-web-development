import React from 'react';

const ResumeCard = ({ title, short, dis, university, result }) => {
  return (
    <div className="w-full h-1/3 flex group">
      <div className="w-10 h-2 bg-black/50 mt-10 relative group">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black/50 ">
          <span className="w-3 h-3 rounded-full bg-[#212428] inline-flex group-hover:bg-[#FF014F] duration-300"></span>
        </span>
      </div>
      <div>
        <div className="w-full h-50 shadow-2xl bg-black/50 hover:bg-black/70 duration-300 rounded-lg gap-10 p-5">
          <div className="flex justify-between items-center space-y-5">
            <div>
              <h1 className='text-2xl font-semibold text-white'>{title}</h1>
              <p className='text-gray-300'>{short}</p>
            </div>
            <div>
              <p>{result}</p>
            </div>
          </div>
          <p>
            <p>{dis}</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
