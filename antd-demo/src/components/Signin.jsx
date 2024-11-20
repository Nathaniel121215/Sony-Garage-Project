import React from "react";
import Half_BG from "../assets/Half_BG.svg";
import Sony_Logo from "../assets/Sony_Logo.svg";
import Accenture_Logo from "../assets/Accenture_Logo.svg";
import Loader from "../components/Loader";
import Loader_Black from "../components/Loader_Black";

const SignIn = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section - Hidden on Mobile and Medium screens */}
      <div
        className="hidden lg:flex w-1/2 flex-col items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${Half_BG})` }}
      >
        {/* Loader and Text on Top of Left Section */}
        <div className="flex flex-col items-center w-[350px] gap-[20px] mb-6">
          <Loader />
          <div>
            <span className="text-[#e7e7e7] text-3xl font-normal font-['Inter']">PULSE</span>
            <span className="text-[#e7e7e7] text-3xl font-extrabold font-['Inter']"> AI</span>
          </div>
          <div className="w-52 text-center text-white text-[13px] font-['Inter'] font-normal leading-normal">
            Performance Updates and Live Schedule Extraction with AI
          </div>
        </div>

        <div className="absolute bottom-14 flex items-center justify-center gap-2">
          <img src={Sony_Logo} alt="Sony Logo" className="w-[100px] h-auto" />
          <span className="text-white text-lg font-semibold p-5 pb-7">x</span>
          <img src={Accenture_Logo} alt="Accenture Logo" className="w-[100px] h-auto" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-[#fffff] m-5">
        {/* Loader and Text on Top of Right Section */}
        <div className="flex flex-col items-center gap-4 mb-[45px]">
          <Loader_Black />
          <div>
            <span className="text-[#1f1f1f] text-[16px] font-extrabold font-['Inter']">PULSE</span>
            <span className="text-[#1f1f1f] text-[16px] font-extrabold font-['Inter']"> AI</span>
          </div>
        </div>

        <div
          className="w-full max-w-[415px] lg:w-[415px] h-auto bg-white rounded-[20px] border border-[#ececec] p-5"
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        >
          {/* Sign In Form */}
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="px-6 text-[#A5A5A5] p-4 rounded-[20px] border-[1.5px] border-[#E8E8E8] text-gray-700 font-['Inter'] font-medium text-[16px] leading-[19.36px] focus:outline-none focus:border-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="px-6 text-[#A5A5A5] p-4 rounded-[20px] border-[1.5px] border-[#E8E8E8] text-gray-700 font-['Inter'] font-medium text-[16px] leading-[19.36px] focus:outline-none focus:border-indigo-500"
            />
            <div className="flex items-center justify-between mt-6 mb-2 ml-2">
              <a
                href="#"
                className="text-[#1f1f1f] underline underline-offset-2 decoration-solid font-['Inter'] font-medium text-[16px] leading-[19.36px]"
              >
                Trouble signing in?
              </a>
              <button
                type="submit"
                className="px-[55px] py-[15px] bg-[#1f1f1f] text-white p-3 rounded-[20px] font-['Inter'] font-bold text-[16px] leading-[19.36px] hover:bg-black transition"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>

        {/* Sign Up Link Below the Form */}
        <div className="mt-8">
          <a
            href="#"
            className="text-[#4F4F4F] font-['Inter'] font-medium text-[15px] leading-[16.94px] underline decoration-solid text-decoration-line: underline text-decoration-skip-ink: none"
            style={{
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;