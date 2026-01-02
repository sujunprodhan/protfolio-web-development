import React from 'react';

const ResumeCard = ({ title, short, dis, university, result }) => {
  return (
    <div className="w-full h-1/3 flex group">
      <div className="w-10 h-2 bg-black mt-10 relative group">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black ">
          <span className="w-3 h-3 rounded-full bg-white inline-flex group-hover:bg-red-600 duration-300"></span>
        </span>
      </div>
      <div>
        <div className="w-full h-50 bg-black hover:bg-amber-500 duration-300 rounded-lg gap-10 shadow-md p-5">
          <div className="flex justify-between items-center">
            <div>
              <h1>{title}</h1>
              <p>{short}</p>
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
