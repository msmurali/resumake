import React from "react";
import ResumeBg from "../asset/resume_bg.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <React.Fragment>
      <header className="h-14 md:h-16 bg-blue-600 py-4 px-6 md:px-8 shadow-xl">
        <h1 className="text-white text-xl font-medium">Resumake</h1>
      </header>
      <div className="font-body grid md:grid-cols-2 h-screen bg-white">
        <div className="h-full pt-10 md:pt-0">
          <div className="flex h-full flex-col items-center justify-center">
            <h1 className="text-4xl md:text-7xl font-semibold text-center mb-3 leading-normal md:leading-relaxed">
              Job winning resume at five minutes
            </h1>
            <p className="text-sm md:text-base text-center">
              Tirelessly create a professional resume for free of cost.
            </p>
            <Link to="/create">
              <button className="bg-blue-600 text-white md:text-lg font-medium px-4 py-2 md:px-5 md:py-3 rounded mx-auto my-6 block shadow-lg active:shadow-none active:bg-blue-700">
                Get started
              </button>
            </Link>
          </div>
        </div>
        <img src={ResumeBg} alt="resume" className="md:h-screen w-full" />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
