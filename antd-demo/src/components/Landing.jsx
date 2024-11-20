import React from "react";
import Landing_BG from "../assets/Landing_BG.png";
// import Logo_SVG from "./assets/Logo_SVG.svg";
import Sony_Logo from "../assets/Sony_Logo.svg";
import Accenture_Logo from "../assets/Accenture_Logo.svg";
import Loader from "../components/Loader";


const Landing = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen bg-cover"
        style={{ backgroundImage: `url(${Landing_BG})` }}
      >
        <div className="flex flex-col items-center w-[350px] gap-[20px]">
          {/* <img src={Logo_SVG} alt="Logo" className="w-56 h-32" /> */}
          <Loader></Loader>
          <div>
            <span className="text-[#e7e7e7] text-3xl font-normal font-['Inter']">PULSE</span>
            <span className="text-[#e7e7e7] text-3xl font-extrabold font-['Inter']"> AI</span>
          </div>

          <div className="w-52 text-center text-white text-[13px] font-['Inter'] font-normal leading-normal">
            Performance Updates and Live Schedule Extraction with AI
          </div>
        </div>
      </div>

      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2">
        <img src={Sony_Logo} alt="Sony Logo" className="w-[120px] h-auto" />
        <span className="text-white text-xl font-semibold p-5 pb-7">x</span>
        <img src={Accenture_Logo} alt="Accenture Logo" className="w-[120px] h-auto" />
      </div>
    </>
  );
};

export default Landing;
