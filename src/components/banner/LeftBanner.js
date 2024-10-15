import React from 'react'
import {useTypewriter, Cursor} from "react-simple-typewriter";
import { FaTwitter,FaLinkedinIn, FaGithub,  FaReact, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiFigma } from 'react-icons/si';

const LeftBanner = () => {
        const [text] = useTypewriter({
         words: ["Front-end Developer.", "UI/UX Designer.", "Coder."],
         loop: true,
         typeSpeed: 20,
         deleteSpeed: 10,
         delaySpeed: 2000,
        });
  return (
    
        <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
          <h1 className='text-6xl font-bold text-white'>
            Hi, I'm {" "}
            <span className='text-designColor captialize '>Ankita Salunke</span>
            </h1>
            <h2 className='text-4xl font-bold text-white '>
              a <span>{text}</span>
              <Cursor 
                cursorBlinking = "false"
                cursorStyle="|"
                cursorColor ="#ff014f"
              />
            </h2>
            <p className='text-base font-bodyFont leading-6 tracking-wide text-justify'>
              Welcome to my portfolio! I created this website with the goal of showcasing my work, experience and projects in order to enhance my job prospects.
              As a React-build platform, this portfolio provides an interactive and visually appealing display of my qualifications and achievements.
              I Completed a Bachelor's in Computer Engineering from Savitribai Phule Pune University.
              In addition to my technical skills and professional achievements, I have passion for various hobbies. When I'm not immersed in coding, I enjoy reading books and webtoons, exploring differnent technologies and building customized things. 
            </p>
          </div>
        

        <div className="flex flex-col lgl:flex-row gap-6 lgl:gap-10 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            {/* <span className="bannerIcon"> */}
            <a className='flex items-center space-x-2 bannerIcon' href="https://github.com/ankitadattatraysalunke" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              </a>
            {/* </span> */}
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
            <FaBootstrap />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default LeftBanner
