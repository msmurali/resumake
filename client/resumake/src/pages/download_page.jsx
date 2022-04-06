import React from "react";
import downloadBg from "../asset/download_bg.svg";

const DownloadPage = () => {
  return (
    <div className="h-screen w-full grid md:grid-cols-2">
      <div className="flex justify-center items-center flex-col pt-10">
        <h1 className="font-semibold text-4xl font-body text-center">
          Thanks for using Resumake
        </h1>
        <br></br>
        <p className="text-base text-center font-body font-medium">
          Your download will start in few seconds.
        </p>
      </div>
      <img src={downloadBg} alt="resume" className="w-full" />
    </div>
  );
};

export default DownloadPage;
