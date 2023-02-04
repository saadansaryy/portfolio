import React from "react";
import projectLogo from "../assets/logo/project_icons/project.png";
import cryptoImg from "../assets/img/crypto-dashboard.jpg";
import bmsImg from "../assets/img/bookmyshowApp.jpg";

function Projects() {
  return (
    <div id="projects" className="bg-teal-900 text-[#DDFFE7]">
      <div className="text-center">
        <h1 className="font-extrabold tracking-widest text-xl sm:text-4xl text-[#DDFFE7] pt-20">
          PROJECTS
        </h1>
        <hr className="w-1/2 mx-auto mt-5 mb-10" />
      </div>
      <div className="m-8 flex flex-col sm:flex-row justify-center items-center space-x-2">
        <img src={projectLogo} alt="" className="max-w-[7rem] md:w-40 mb-2 sm:mb-0" />
      <p className="text-left text-sm tracking-wide font-medium text-[#ddffe7e0] opacity-90 md:w-3/4 xl:w-1/2 md:px-4 md:text-lg">
        My projects makes use of vast variety of latest technology tools. My
        best experience is to create Front-End Projects as well as Back-End Projects using technologies such as Javascript, React, Node.js, TailwindCSS and more.
      </p>
      </div>
      <div className="mb-10 grid grid-cols-1 gap-10 mx-4 sm:mx-10 xl:mx-20">
        {/* <!-- Project Cards --> */}
        <div className="relative flex flex-col sm:flex-row md:justify-between lg:h-56 bg-emerald-900 shadow-md shadow-slate-800 cursor-pointer hover:scale-105 transition-all ease-in duration-500">
          <div className="overflow-hidden bg-no-repeat bg-cover max-w-2xl sm:max-w-xs md:max-w-sm lg:max-w-sm">
            <img src={cryptoImg} alt="" className="" />
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="p-3 space-x-3">
              <p className="text-xl sm:text-base md:text-xl xl:text-2xl font-medium tracking-wide text-emerald-50">
                Cryptocurrency-Dashboard
              </p>
              <p className="font-thin text-xs lg:text-sm p-1 leading-4 xl:tracking-wider text-[#DDFFE7]">
                The purpose of the project titled “Cryptocurrency Dashboard” is
                to exclusively provide a web application that is user-friendly &
                reliable. This will give the insight to track various
                cryptocurrencies of one’s interest. The project mainly focuses
                on front-end technologies to build this responsive web
                application, that will work seamlessly across all platforms. The
                Dashboard has four modules: Cryptocurrency Graph, Market Cap
                table, Exchange crypto-currency, and Portfolio.
              </p>
            </div>
            <div className="flex flex-row justify-end items-center space-x-4 px-4 pb-4">
              <iconify-icon
                icon="vscode-icons:file-type-js-official"
                width="40"
              ></iconify-icon>
              <iconify-icon icon="logos:html-5" width="25"></iconify-icon>
              <iconify-icon icon="logos:css-3" width="25"></iconify-icon>
            </div>
          </div>
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-0 hover:opacity-90 flex flex-row justify-center items-center transition-all duration-500">
            <a
              href="https://spark-crypto-dashboard.vercel.app/"
              className="text-emerald-600 font-mono border hover:py-1 px-2 hover:text-white transition-all duration-200"
            >
              Live &rarr;
            </a>
            <a
              href="https://github.com/saadansaryy/spark-crypto-dashboard.git"
              className="text-blue-600  font-mono border hover:py-1 px-2 hover:text-white transition-all duration-300"
            >
              Code &lt;&gt;
            </a>
          </div>
        </div>
        <div className="relative flex flex-col sm:flex-row md:justify-between lg:h-56 bg-emerald-900 shadow-md shadow-slate-800 cursor-pointer hover:scale-105 transition-all ease-in duration-500">
          <div className="overflow-hidden bg-no-repeat bg-cover max-w-2xl sm:max-w-xs md:max-w-sm lg:max-w-md">
            <img src={bmsImg} alt="" className="" />
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="p-3 space-x-3">
              <p className="text-xl sm:text-base md:text-xl xl:text-2xl font-medium tracking-wide text-emerald-50">
                Book-My-Show App
              </p>
              <p className="text-xs lg:text-sm font-thin leading-4 p-1 tracking-wider text-[#DDFFE7]">
                The purpose of the project titled “BookMyShow” is to provide a
                web application that is user-friendly & reliable. The project
                mainly focuses on the back-end and front-end technologies to
                build web applications. It has four modules: Movie Name, Time
                Slot, Seat Slot, and Last Booking Details.
              </p>
            </div>
            <div className="flex flex-row justify-end items-center space-x-4 px-4 pb-4">
              <iconify-icon icon="logos:nodejs-icon" width="35"></iconify-icon>
              <iconify-icon icon="logos:html-5" width="25"></iconify-icon>
              <iconify-icon
                icon="vscode-icons:file-type-js-official"
                width="40"
              ></iconify-icon>
              <iconify-icon
                icon="skill-icons:mongodb"
                width="40"
              ></iconify-icon>
              <iconify-icon icon="logos:css-3" width="25"></iconify-icon>
            </div>
          </div>
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-0 hover:opacity-90 flex flex-row justify-center items-center transition-all duration-500">
            <a
              href="https://bookmyshow-frontend-app.vercel.app/"
              className="text-emerald-600 font-mono border hover:py-1 px-2 hover:text-white transition-all duration-200"
            >
              Live &rarr;
            </a>
            <a
              href="https://github.com/saadansaryy/bookmyshow-frontend-app.git"
              className="text-blue-600  font-mono border hover:py-1 px-2 hover:text-white transition-all duration-300"
            >
              Code &lt;&gt;
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/saadansaryy?tab=repositories"
          id="more_projects_btn"
          className="text-lg text-[#DDFFE7] font-medium p-2 bg-[#45b08c91] border border-white hover:bg-transparent transition-all duration-500 tracking-wide"
        >
          More Projects
        </a>
      </div>
    </div>
  );
}

export default Projects;
