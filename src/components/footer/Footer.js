import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black gap-8 flex flex-col items-center ">
      <div className="w-full h-full flex flex-col gap-8 items-center justify-center">
        <img className="w-32" src={logo} alt="logo" />
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

export default Footer