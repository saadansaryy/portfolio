import React from "react";
import imgArrow from "../assets/logo/right-drawn-arrow.png";
import myPicture from "../assets/img/pfp.jpeg";

function About() {
  return (
    <div id="about" className="bg-teal-900 text-[#DDFFE7]">
      <div className="text-center">
        <h1 className="font-extrabold tracking-widest text-xl sm:text-4xl text-[#DDFFE7] pt-20">
          ABOUT
        </h1>
        <hr className="w-1/2 mx-auto mt-5 mb-8" />
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-evenly">
        <img
          src={myPicture}
          alt=""
          className="max-w-[16rem] shadow-md shadow-black my-4"
        />
        <img src={imgArrow} alt="" className="max-w-[3rem] md:max-w-[4rem] rotate-45 md:rotate-[130deg] invert" />
      <p className="text-[#DDFFE7] text-sm tracking-wide px-4 xs:px-4 md:px-2 mt-4 mb-8 opacity-80 md:text-left md:text-xl md:w-1/2">
        This is me,{" "}
        <span className="font-medium text-zinc-900"> MOHAMMAD SAAD ANSARI</span>, a
        Full Stack Web Developer. The scope of my work mostly includes quality web design by integrating powerful designing tools such as Tailwind CSS with frontend tools---Reactjs,HTML , backend tools---Nodejs, Expressjs and non-relational database---MongoDB.
        <br />
        <br />
        That being said, I like to explore and learn all technologies of Web Development and work on new projects in the new development environments to expand and improve my skillset.
      </p>
      </div>
      <h2 className="my-8 text-lg tracking-widest text-center font-bold bg-[#0000005b] px-6 text-[#45B08C] font-mono shadow-lg shadow-black w-fit mx-auto sm:text-2xl">
        TECHNICAL SKILLS
      </h2>
      <div
        id="Box"
        className="flex flex-col sm:flex-row my-14 items-center justify-center"
      >
        <div id="leftBox" className="sm:w-1/2 flex flex-col items-center justify-center">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-thin text-[#DDFFE7] text-center">
            Full Stack Web Development
          </h3>
          <div className="my-6 grid grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            <iconify-icon
              icon="vscode-icons:file-type-html"
              width="50"
            ></iconify-icon>
            <iconify-icon
              icon="vscode-icons:file-type-css"
              width="50"
            ></iconify-icon>
            <iconify-icon
              icon="vscode-icons:file-type-js-official"
              width="50"
            ></iconify-icon>
            <iconify-icon icon="logos:react" width="50"></iconify-icon>
            <iconify-icon icon="logos:nodejs-icon" width="50"></iconify-icon>
            <iconify-icon
              icon="logos:tailwindcss-icon"
              width="50"
            ></iconify-icon>
            <iconify-icon icon="logos:java" width="50"></iconify-icon>
            <iconify-icon icon="skill-icons:mongodb" width="50"></iconify-icon>
            <iconify-icon icon="akar-icons:bootstrap-fill" style={{color:"purple"}} width="50"></iconify-icon>
            <iconify-icon
              icon="teenyicons:git-outline"
              width="50"
            ></iconify-icon>
            <iconify-icon icon="logos:mysql" width="50"></iconify-icon>
            <iconify-icon icon="logos:aws" width="50"></iconify-icon>
          </div>
        </div>
        <div
          id="rightBox"
          className="text-sm px-6 md:text-lg sm:w-1/2 space-y-6"
        >
          <p className="text-[#DDFFE7] font-medium tracking-tight">
            ⚡ Building responsive website front end using React-Redux
          </p>
          <p className="text-[#DDFFE7] font-medium tracking-tight">
            ⚡ Creating intutive, dynamic user experiences 
          </p>
          <p className="text-[#DDFFE7] font-medium tracking-tight">
            ⚡ Creating application backend in Node.js and Express
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
