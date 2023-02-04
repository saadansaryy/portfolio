import React from "react";
import githubLogo from "../assets/logo/github.png";
import inLogo from "../assets/logo/linkedin.png";
import gmailLogo from "../assets/logo/contact_me_icons/gmail.png";
import { useRef } from "react";
import { sendForm } from "@emailjs/browser";
import { useAlert } from "react-alert";

function Contact() {
  const alert = useAlert();
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    await sendForm(
      "service_ht6htvw",
      "template_6xzahbr",
      form.current,
      "StQkXwTQJHa0evVt3"
    ).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert.success("Message Sent Successfully!")
      },
      function (error) {
        console.log("FAILED...", error);
        alert.error("Message not sent")
      }
    );
    e.target.reset();
  };
  return (
    <div id="contact" className="bg-teal-900 text-[#DDFFE7]">
      <div className="text-center">
        <h1 className="font-extrabold tracking-widest text-xl sm:text-4xl text-[#DDFFE7] pt-20">
          CONTACT
        </h1>
        <hr className="w-1/2 mx-auto mt-5 mb-8"/>
      </div>
      <p className="text-center text-sm px-2 opacity-80 font-extralight sm:text-lg text-[#DDFFE7]">
        Have a question or want to work together? Send me a message or Email me at <a href="mailto:ansarisaad990@gmail.com" className="underline text-zinc-900 font-medium">ansarisaad990@gmail.com</a>, I'll reach out to you as soon as I can.
      </p>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-[90%] xl:w-1/2 mx-auto my-8 bg-[#45b08c21] p-4 md:px-10 md:py-6 shadow-lg "
      >
        <div className="mb-6 shadow-xl">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-[#DDFFE7]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="bg-white text-gray-900 text-sm block w-full p-2.5 border-t-2 border-l-2 border-r-4 border-b-4 border-gray-800 focus:outline-none"
            placeholder="User Example"
            required
          />
        </div>
        <div className="mb-6 shadow-xl">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-[#DDFFE7]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="bg-white text-gray-900 text-sm block w-full p-2.5 border-t-2 border-l-2  border-r-4 border-b-4 border-gray-800 focus:outline-none"
            placeholder="user@example.com"
            required
          />
        </div>
        <div className="mb-6 shadow-xl">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-[#DDFFE7]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-white border-t-2 border-l-2 border-r-4 border-b-4 border-gray-800 focus:outline-none"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <input
          type="submit"
          className="text-white cursor-pointer bg-[#45B08C] hover:bg-[#45b08c9c] font-medium text-sm md:text-base sm:w-auto px-5 py-2.5 text-center shadow-sm shadow-black hover:shadow-slate-900 transition-all duration-500"
          value="Send Message"
        />
      </form>

      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="flex flex-row space-x-4">
          <div className="flex flex-row justify-center items-center">
            <img src={gmailLogo} alt="" className="w-4 md:w-6" />
            <a href="mailto:ansarisaad990@gmail.com" className="text-sm md:text-base underline font-extralight opacity-80 text-[#DDFFE7] border-r px-2">
              ansarisaad990@gmail.com
            </a>
          </div>
          <div className="flex justify-center my-8 space-x-4">
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
        </div>
        <div className="text-center">
          <a href="tel:+919131846422" className="text-sm md:text-base underline underline-offset-2 font-thin tracking-wide text-[#DDFFE7]">Call : +91 9131846422</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
