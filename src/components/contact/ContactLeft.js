import React from 'react'
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg 
    shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ankita Salunke</h3>
        <p className="text-lg font-normal text-gray-400">
          Front-End Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide text-justify">
          Get in touch with me for captivating Front-end and UI/UX projects! 
          Let's collaborate to bring your vision to life. 
          Reach out to me through following channels:- 
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ankita.dattatray.salunke@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <span className="bannerIcon">
            <a className='flex items-center space-x-2 ' href="https://github.com/ankitadattatraysalunke" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              </a>
            </span>
            <span className="bannerIcon">
            <a className='flex items-center space-x-2 ' href="https://x.com/_Ankita_Salunke?t=GkSRimSddQ5cMN35MglgUw&s=09" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            </span>
            <span className="bannerIcon">
            <a className='flex items-center space-x-2 ' href="https://www.linkedin.com/in/ankita-salunke-8543ab287/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
              </a>
            </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft