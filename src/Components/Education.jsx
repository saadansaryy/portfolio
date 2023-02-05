import React from "react";
import educationLogo from "../assets/logo/education_icons/mortarboard.png";
import hrLogo from "../assets/logo/certification_icons/480px-HackerRank_Icon-1000px.png";
import almaLogo from "../assets/logo/certification_icons/image.png";
import degreeLogo from "../assets/logo/education_icons/diploma.png";

function Education() {
  return (
    <div id="education" className="bg-teal-900 text-[#DDFFE7]">
      <div className="text-center">
        <h1 className="font-extrabold tracking-widest text-xl sm:text-4xl text-[#DDFFE7] pt-20">
          EDUCATION
        </h1>
        <hr className="w-1/2 mx-auto mt-5" />
      </div>
      <div className="flex flex-row justify-center items-center my-4 space-x-2">
        <div className="">
          <img
            src={educationLogo}
            alt=""
            className="max-w-[5rem] xs2:max-w-[8rem] md:max-w-[18rem] ml-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center  space-y-2 md:space-y-6 ">
          <h2 className="text-center text-xs tracking-wide xs:text-sm xs2:text-base sm:text-xl md:text-3xl text-[#DDFFE7] font-semibold">
            Basic Qualifications and Certifications
          </h2>
          <div className="flex flex-row justify-start items-center space-x-2 md:space-x-6 ">
            <a href="!#">
              <img src={hrLogo} alt="" className="w-[2rem] md:w-14" />
            </a>
            <a href="!#">
              <img src={almaLogo} alt="" className="w-[6rem] md:w-44" />
            </a>
          </div>
        </div>
      </div>
      {/* Qualifications */}
      <div className="mb-28">
        <h2 className="my-8 text-lg tracking-widest text-center font-bold bg-[#0000005b] px-6 text-[#45B08C] font-mono shadow-lg shadow-black w-fit mx-auto sm:text-2xl">
          Qualifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5 px-6 text-[#65c4a4f1] cursor-default">
          {/* Qualification Cards */}
          <div className="flex flex-col items-start p-4 justify-center bg-zinc-900 shadow-xl shadow-slate-900 leading-8 hover:shadow-md hover:shadow-slate-900 transition-all duration-300">
            <img src={degreeLogo} alt="" className="w-4 md:w-6 invert" />
            <p className="font-medium text-[#DDFFE7] text-sm md:text-base">
              Bachelor of Computer Applications
            </p>
            <p className="font-thin opacity-80 text-sm md:text-base">
              Vikram University, Ujjain
            </p>
            <p className="font-thin opacity-50 text-sm md:text-base">
              2019 - 2022
            </p>
          </div>
          <div className="flex flex-col items-start p-4 justify-center bg-zinc-900 shadow-xl shadow-slate-900 leading-8 hover:shadow-md hover:shadow-slate-900 transition-all duration-300">
            <img src={degreeLogo} alt="" className="w-4 md:w-6 invert" />
            <p className="font-medium text-[#DDFFE7] text-sm md:text-base">
              Full Stack Web Development Course
            </p>
            <p className="font-thin opacity-80 text-sm md:text-base">
              AlmaBetter in Collab with Polygon
            </p>
            <p className="font-thin opacity-50 text-sm md:text-base">
              May 2022 - Present
            </p>
          </div>
          <div className="flex flex-col items-start p-4 justify-center bg-zinc-900 shadow-xl shadow-slate-900 leading-8 hover:shadow-md hover:shadow-slate-900 transition-all duration-300">
            <img src={degreeLogo} alt="" className="w-4 md:w-6 invert" />
            <p className="font-medium text-[#DDFFE7] text-sm md:text-base">
              Master of Computer Applications
            </p>
            <p className="font-thin opacity-80 text-sm md:text-base">
              Sri Satya Sai University, Sehore
            </p>
            <p className="font-thin opacity-50 text-sm md:text-base">
              July 2022 - Present
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Certification --> */}
      <h2 className="my-8 text-lg tracking-widest text-center font-bold bg-[#0000005b] px-6 text-[#45B08C] font-mono shadow-lg shadow-black w-fit mx-auto sm:text-2xl">
        Certifications
      </h2>
      <div className="grid xs2:grid-cols-2 xl:grid-cols-4 gap-6 mx-10 ">
        {/* <!-- Certificate Cards --> */}
        {/* Card 1 */}
        <div className="relative overflow-hidden bg-no-repeat bg-cover cursor-pointer flex flex-col bg-slate-900 border-t-2 border-l-2  border-r-[6px] border-b-[6px] border-black shadow-lg shadow-slate-900 hover:shadow-md hover:shadow-slate-900 transition-shadow">
          <div className="border border-black flex justify-center items-center px-4 py-6 bg-white ">
            <img src={hrLogo} alt="" className="w-8 md:w-10" />
          </div>
          <div className="text-center p-4 text-white text-sm md:text-base">
            <p className="opacity-90">JavaScript (Basic)</p>
            <p className="text-sm opacity-70 font-thin">~Hackerrank</p>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-0 hover:opacity-95 flex flex-row justify-center items-center transition-all duration-500">
            <a
              href="https://www.hackerrank.com/certificates/84c898821c4b"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border hover:py-1 px-2 text-white  transition-all duration-200"
            >
              Verify Credentials &rarr;
            </a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="relative overflow-hidden bg-no-repeat bg-cover cursor-pointer flex flex-col bg-[#ff0000b4] border-t-2 border-l-2  border-r-[6px] border-b-[6px] border-black shadow-lg shadow-slate-900 hover:shadow-md hover:shadow-slate-900 transition-shadow">
          <div className="border border-black flex justify-center items-center px-4 py-6 bg-white ">
            <img src={almaLogo} alt="" className="w-32 md:w-40" />
          </div>
          <div className="text-center p-4 text-white text-sm md:text-base">
            <p className="opacity-90">Introduction to React Ecosystem</p>
            <p className="text-sm opacity-70 font-thin">~AlmaBetter</p>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-0 hover:opacity-95 flex flex-row justify-center items-center transition-all duration-500">
            <a
              href="https://certificates.almabetter.com/en/verify/32873092894627"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border hover:py-1 px-2 text-white  transition-all duration-200"
            >
              Verify Credentials &rarr;
            </a>
          </div>
        </div>
        {/* Card 3 */}
        <div className="relative overflow-hidden bg-no-repeat bg-cover cursor-pointer flex flex-col bg-[#ff0000b4] border-t-2 border-l-2  border-r-[6px] border-b-[6px] border-black shadow-lg shadow-slate-900 hover:shadow-md hover:shadow-slate-900 transition-shadow">
          <div className="border border-black flex justify-center items-center px-4 py-6 bg-white ">
            <img src={almaLogo} alt="" className="w-32 md:w-40" />
          </div>
          <div className="text-center p-4 text-white text-sm md:text-base">
            <p className="opacity-90">Advanced React</p>
            <p className="text-sm opacity-70 font-thin">~AlmaBetter</p>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-0 hover:opacity-95 flex flex-row justify-center items-center transition-all duration-500">
            <a
              href="https://certificates.almabetter.com/en/verify/98386315348376"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border hover:py-1 px-2 text-white  transition-all duration-200"
            >
              Verify Credentials &rarr;
            </a>
          </div>
        </div>
        {/* Card 4 */}
        <div className="relative overflow-hidden bg-no-repeat bg-cover cursor-pointer flex flex-col bg-[#ff0000b4] border-t-2 border-l-2  border-r-[6px] border-b-[6px] border-black shadow-lg shadow-slate-900 hover:shadow-md hover:shadow-slate-900 transition-shadow">
          <div className="border border-black flex justify-center items-center px-4 py-6 bg-white ">
            <img src={almaLogo} alt="" className="w-32 md:w-40" />
          </div>
          <div className="text-center p-4 text-white text-sm md:text-base">
            <p className="opacity-90">JavaScript on the Browser</p>
            <p className="text-sm opacity-70 font-thin">~AlmaBetter</p>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-0 hover:opacity-95 flex flex-row justify-center items-center transition-all duration-500"
          >
            <a
              href="https://certificates.almabetter.com/en/verify/06993807067779"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border hover:py-1 px-2 text-white  transition-all duration-200"
            >
              Verify Credentials &rarr;
            </a>
          </div>
        </div>
        {/* Card 5 */}
        <div className="relative overflow-hidden bg-no-repeat bg-cover cursor-pointer flex flex-col bg-[#ff0000b4] border-t-2 border-l-2  border-r-[6px] border-b-[6px] border-black shadow-lg shadow-slate-900 hover:shadow-md hover:shadow-slate-900 transition-shadow">
          <div className="border border-black flex justify-center items-center px-4 py-6 bg-white ">
            <img src={almaLogo} alt="" className="w-32 md:w-40" />
          </div>
          <div className="text-center p-4 text-white text-sm md:text-base">
            <p className="opacity-90">Node.js & Express.js</p>
            <p className="text-sm opacity-70 font-thin">~AlmaBetter</p>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-0 hover:opacity-95 flex flex-row justify-center items-center transition-all duration-500">
            <a
              href="https://certificates.almabetter.com/en/verify/28482607704179"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border hover:py-1 px-2 text-white  transition-all duration-200"
            >
              Verify Credentials &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
