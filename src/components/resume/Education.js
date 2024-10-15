import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 text-justify">
          <ResumeCard
            title="Bachelor of Engineering"
            subTitle="SAVITRIBI PHULE PUNE UNIVERSITY (2017 - 2021)"
            result="7.55 CGPA"
            des="The training provided by universities in order to prepare people to work in various IT secotors. 
             Created a comprehensive entrance system that integrated temperature detection, face recognition
             and mask detection for employee durign the COVID-19 pandemic.
             Utilized Python programming language and various libraries (e.g. OpenCV, TensorFlow)
             for development"
          />
          <ResumeCard
            title="Diploma in Computer Engineering"
            subTitle="MAHARASHTRA STATE BOARD OF TECHNICAL EDUCATION (2014 - 2017)"
            result="70.88%"
            des="Successfully completed a comprehensive Engineering, demonstrating a strong foundation in computer systems,
                 software development and engineering principles. Led a team of 4 members, guiding and coordinating the project's
                 development.     
                 Designed and developed a wearable device integrated into a sandal, equipped with GPS, 
                 accelerometer and emergency alert features.
                 Coordinated team tasks and ensured timely completion.
                 implemented a mobile app for real-time tracking and alert notifications.
                 Successfully tested and demonstrated the project's efficacy in ensuring women's safety."
          />
          <ResumeCard
            title="Secondary and Higher Secondary Education"
            subTitle="Shri Shahaji High School, Akkalkot(2014)"
            result="71.80%"
            des="Successfully completed secondary school education. 
            Achieved academic success by actively participating in various competitve exams and activities, 
            demonstrating a strong commitment to learning and personal growth."
          />
        </div>
      </div>
     

    </motion.div>
  );
}

export default Education