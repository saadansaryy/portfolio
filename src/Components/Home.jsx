import React from "react";
import githubLogo from "../assets/logo/github.png";
import inLogo from "../assets/logo/linkedin.png";
import arrow from "../assets/logo/downward-arrow.png";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import ContactMe from "./Contact";
import Footer from "./Footer";
import resume from "../assets/img/Resume.pdf";

function Home() {
  const handleClickNav = (scrollToId) => {
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
    closeMenu("menu");
  };
  const openMenu = (componentId) => {
    window.scrollTo(0,0)
    const menuList = document.getElementById(componentId);
    menuList.classList.remove("hidden");
    menuList.classList.add("flex");
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  };
  const closeMenu = (componentId) => {
    document.getElementsByTagName("body")[0].style.overflow = "visible";
    const menuList = document.getElementById(componentId);
    menuList.classList.remove("flex");
    menuList.classList.add("hidden");
  };
  return (
    <div className="bg-teal-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 sticky top-0 shadow-xl bg-[#45b08c17] z-10">
        <p
          className="text-[#45b08c] ml-4 text-xl cursor-pointer"
          onClick={() => handleClickNav("home")}
        >
          Portfolio
        </p>
        <ul className="hidden md:flex flex-row space-x-5 mr-8 font-thin tracking-wide text-yellow-50">
          <li
            className="cursor-pointer text-[#DDFFE7] p-3 hover:bg-zinc-900 transition-all duration-300"
            onClick={() => handleClickNav("home")}
          >
            Home
          </li>
          <li
            className=" cursor-pointer text-[#DDFFE7] p-3 hover:bg-zinc-900 transition-all duration-300"
            onClick={() => handleClickNav("about")}
          >
            About
          </li>
          <li
            className=" cursor-pointer text-[#DDFFE7] p-3 hover:bg-zinc-900 transition-all duration-300"
            onClick={() => handleClickNav("projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer text-[#DDFFE7] p-3 hover:bg-zinc-900 transition-all duration-300"
            onClick={() => handleClickNav("education")}
          >
            Education
          </li>
          <li
            className="cursor-pointer text-[#DDFFE7] p-3 hover:bg-zinc-900 transition-all duration-300"
            onClick={() => handleClickNav("contact")}
          >
            Contact
          </li>
        </ul>
        <div
          id="hamburger"
          className="md:hidden mx-10 invert"
          onClick={() => openMenu("menu")}
        >
          <iconify-icon icon="game-icons:hamburger-menu"></iconify-icon>
        </div>
      </nav>
      {/* HomePage */}
      <div
        id="home"
        className="flex flex-col justify-center shadow-xl h-screen"
      >
        <a
          href="mailto:ansarisaad990@gmail.com"
          className="hidden md:block relative hover:text-[#45b08c] mr-4 top-40 rotate-90 self-end underline underline-offset-8 text-[#DDFFE7] font-thin transition-all duration-700"
        >
          ansarisaad990@gmail.com
        </a>
        <div className="px-4 flex flex-col space-y-3">
          <div className="space-y-2 border-l-8 pl-5">
            <p className="font-mono font-semibold text-[#DDFFE7] text-xs sm:text-sm">
              Hi, my name is
            </p>
            <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#06421a79] text-2xl sm:text-4xl sm:w-[60vw] lg:w-[35vw] lg:text-5xl">
              Saad Ansari.
            </p>
            <p className="w-fit bg-[#45B08C] text-[#DDFFE7] font-light shadow-lg shadow-[#45b08cb9] p-1 tracking-widest text-sm sm:text-base lg:text-xl animate-pulse">
              &lt; Full Stack Web Developer &#47;&gt;
            </p>
            <p className="text-left text-[#DDFFE7] font-thin tracking-wide text-xs sm:text-sm sm:w-3/4 lg:w-[70%]">
              Goal-oriented Web Developer with a Bachelor's degree in Computer
              Applications and looking to enhance my professional experience
              with an IT company specializing in Web Development. Armed with a
              deep sense of responsibility and possessing very high levels of
              enthusiasm to give my best efforts for any endeavor.
            </p>
          </div>
          <div className="flex mx-auto space-x-4">
            <a href="https://github.com/saadansaryy">
              <img
                src={githubLogo}
                alt=""
                className="w-8 cursor-pointer hover:scale-105 hover:-translate-y-1.5 transition-all duration-500"
              />
            </a>
            <a href="https://www.linkedin.com/in/saad-ansari-117013229/">
              <img
                src={inLogo}
                alt=""
                className="w-8 cursor-pointer hover:scale-105 hover:-translate-y-1.5 transition-all duration-500"
              />
            </a>
          </div>
          <a href={resume} download="Resume" className="">
            <button className="text-sm bg-[#0000005b] text-[#45B08C] hover:bg-[#000000a2] hover:text-[#62caa7d5] font-mono border-black border-l border-t border-r-4 border-b-4 self-start p-1 md:p-2 transition-all duration-300">
              Download CV/Resume &rarr;
            </button>
          </a>
        </div>
        <button
          id="discover_btn"
          className="bg-[#45B08C] text-white p-2 text-lg mt-12 self-center shadow-md shadow-slate-900 hover:shadow-md hover:shadow-teal-300 transition-all duration-300 "
          onClick={() => handleClickNav("about")}
        >
          Discover Now
        </button>
        <img
          src={arrow}
          alt=""
          className="invert-[75%] my-2 w-6 self-center animate-bounce transition-all duration-500 cursor-pointer"
          onClick={() => handleClickNav("about")}
        />
      </div>
      <div
        id="menu"
        className="hidden absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-95 flex-col justify-center items-center transition-all duration-500"
      >
        <p
          className="font-mono border hover:py-1 px-2 text-white  transition-all duration-200"
          onClick={() => closeMenu("menu")}
        >
          Go Back &rarr;
        </p>
        <ul className="flex md:hidden flex-col items-center justify-center font-thin tracking-wide text-yellow-50">
          <li
            className="cursor-pointer text-white p-3 hover:bg-zinc-900 transition-all duration-300"
            onClick={() => handleClickNav("home")}
          >
            Home
          </li>
          <li
            className=" cursor-pointer text-[#DDFFE7] p-3 hover:bg-zinc-900 transition-all duration-300"
            onClick={() => handleClickNav("about")}
          >
            About
          </li>
          <li
            className=" cursor-pointer text-[#DDFFE7] p-3 hover:bg-zinc-900 transition-all duration-300"
            onClick={() => handleClickNav("projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer text-[#DDFFE7] p-3 hover:bg-zinc-900 transition-all duration-300"
            onClick={() => handleClickNav("education")}
          >
            Education
          </li>
          <li
            className="cursor-pointer text-[#DDFFE7] p-3 hover:bg-zinc-900 transition-all duration-300"
            onClick={() => handleClickNav("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
      {/* AboutPage */}
      <div className="mt-20">
        <About />
      </div>
      {/* ProjectsPage */}
      <div className="mt-20">
        <Projects />
      </div>
      {/* EducationPage */}
      <div className="mt-20">
        <Education />
      </div>
      {/* ContactMePage */}
      <div className="mt-20">
        <ContactMe />
      </div>
      {/* FooterPage */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
