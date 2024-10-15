import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-black border-opacity-30  flex flex-col gap-10 text-justify">
          <ResumeCard
            title="Front-End-Developer"
            subTitle="SevenMentor - (DEC 2023 - OCT 2024)"
            result="PUNE"
            des="Successfully completed a comprehensive 6-month front-end development course, 
            mastering key technologies including HTML, CSS, JavaScript, React, Bootstrap and TailwindCSS.
             Gained hands-on experience in building and deploying dynamic web applications and user interfaces.
              Additionally, pursued foundational learning in PHP, MySQL and SQL to complement front-end skills.
               During the course, undertook various roles and responsibilities such as:-

              Developing responsive and visually appealing web pages using modern front-end technologies.
              Implementing interactive features and enhancing user experience through JavaScript and React components.
              Utilizing Bootstrap and TailwindCSS for rapid design and layout development.
              Building and maintaining databases with MySQL and SQL to support web application functionality.
              Applying best practices in web development to ensure code quality, performance and maintainability."
          />
        </div>
      </div>
      <div>
      </div>
    </motion.div>
  );
};

export default Experience;
