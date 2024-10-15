import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectNine, 
  projectSix, projectSeven, projectEight, projectTen, projectEleven, 
  projectTwelve,
  PHPSQL1} from '../../assets/index' 
import ProjectCard from './ProjectsCard'

const Projects = () => {
  return (
    <section 
       id='projects'
       className='w-full py-20 border-b-[1px] border-b-black'
        >
      <div className='flex justify-center items-center text-center'>
      <Title
      title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
      des="My Projects"
      />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>

        <ProjectCard 
         title="E-commerce Website"
         result="OCT-2024"
         des="
        This project is a dynamic e-commerce website developed using PHP, MySQL, and Bootstrap, 
        designed to enhance product management and user interaction.
         It features distinct panels for both administrators and users,
         ensuring streamlined operations and secure access.
         "
         src={PHPSQL1}
          />

        <ProjectCard 
         title="RECIPE WEBSITE"
         result="July-2024"
         des="This project is a React-based web application that allows users to explore recipes from various categories and 
         search for specific meals. 
         It includes features like a carousel of popular and trending recipes, category-based navigation and detailed recipe views.
         The application is built using modern front-end technologies and integrates with the MealDB API to fetch recipe data.
         "
         src={projectOne}
         githubLink="https://github.com/ankitadattatraysalunke/React-Recipe-App"
         liveDemoLink="https://react-recipe-app-peach-phi.vercel.app/"
          />

        <ProjectCard 
         title="CAR RENTAL WEBSITE"
         result="June-2024"
         des="This project is a well-structured car rental web application designed with a focus on user experience and modern web development practices.
              It leverages React for dynamic UI components, Tailwind CSS for styling and AOS for animations, providing a responsive and interactive platform for users to explore car rental options.
              The inclusion of dark mode and persistent state enhances user comfort and personalization."
         githubLink="https://github.com/ankitadattatraysalunke/React-car-rental-proj"
        liveDemoLink="https://react-car-rental-proj-kxq9.vercel.app/"
         src={projectTwo}
          />
     
         <ProjectCard 
         title="ECOMMERCE WEBSITE"
         result="May-2024"
         des="This project is a modern e-commerce web application that features a variety of sections including banners, blog posts, 
         categories, product features and more. The project is designed to provide
          a user-friendly interface for browsing and shopping for products, 
          showcasing various features like product cards, promotional banners and a newsletter subscription."
          src={projectThree}
          githubLink="https://github.com/ankitadattatraysalunke/React-ecommerce-web"
          liveDemoLink="https://react-ecommerce-web-five.vercel.app/"
          />

        <ProjectCard 
         title="Dice Game"
         result="May-2024"
         des="Developed an interactive Dice Game application using React, where players select a number and roll 
         a virtual dice to try and match the selected number with the dice roll. The game keeps track of the player’s score,
          provides feedback on correct and incorrect guesses and includes a feature to view the game rules. 
         The application features a user-friendly interface with dynamic components and styled elements."
          src={projectTwelve}
          githubLink="https://github.com/ankitadattatraysalunke/React-DiceGame"
          liveDemoLink="https://react-dice-game-hazel-one.vercel.app/"
          />

        <ProjectCard 
         title="Music Player"
         des="Developed a responsive web-based music player featuring playback controls, progress tracking and an album cover display.
        Utilized HTML5, CSS3 and JavaScript to create a visually appealing and functional music player with integrated Font Awesome icons."
         result="Jan-2024" 
         src={projectTen}
          liveDemoLink="https://js-music-player-six.vercel.app/"
          githubLink="https://github.com/ankitadattatraysalunke/js-half-music-player"
          />

        <ProjectCard 
         title="To-do-list"
         des=" Developed a web-based To-Do List application that allows users to add, check off and remove tasks.
          Utilized HTML, CSS and JavaScript to create a functional and aesthetically pleasing task manager
           with persistent data storage using localStorage. "
         result="Jan-2024" 
         src={projectEleven}
        githubLink="https://github.com/ankitadattatraysalunke/Javascript-To-Do-List-Modify"
        liveDemoLink="https://javascript-to-do-list-modify.vercel.app/"
          />

        <ProjectCard 
         title="DAD JOKE GENERATOR"
         result="Feb-2024"
         des="The Dad Jokes Generator is a simple web application that provides users with random dad jokes when they click a button. 
         It aims to entertain users with humorous and light-hearted content. 
         This project demonstrates basic web development skills, including HTML, CSS and JavaScript."
          src={projectFive}
          githubLink="https://github.com/ankitadattatraysalunke/Dad-joke-gernerator-app"
          liveDemoLink="https://dad-joke-gernerator-app.vercel.app/"
          />

         <ProjectCard 
         title="English Dictionary"
         result="Mar-2024"
         des=" Developed a web-based English dictionary application that allows users to search for the meaning of words.
          The application fetches word definitions and audio pronunciations from an external dictionary API.
          It provides a user-friendly interface where users can input a word, view its definition and listen to its pronunciation."
         src={projectNine}
         githubLink="https://github.com/ankitadattatraysalunke/JS-English-Dictionary"
         liveDemoLink="js-english-dictionary-bzpc5f4wj.vercel.app"
          />

         <ProjectCard 
         title="Text To SPEECH CONVERTER"
         des="The Text-to-Speech Converter is a web application designed to convert user-inputted text into spoken audio using the
          browser's built-in text-to-speech capabilities. It allows users to select different voices and listen to the spoken version of their text input.
          This type of application is useful for accessibility purposes, language learning and enhancing user interaction by providing auditory feedback.
"        result="Mar-2024"
         src={projectFour}
         githubLink="https://github.com/ankitadattatraysalunke/Text-to-speech-convertor"
         liveDemoLink="https://text-to-speech-convertor-theta.vercel.app/"
          />
     
        <ProjectCard 
         title="BUBBLE GAME"
         des="The project is a simple interactive web-based game designed to test users quick thinking and reflexes. 
         The games objective is to click on bubbles that display numbers in order to match a target number.
         Players score points for each correct match and the game runs on a countdown timer.
         The project demonstrates basic web development skills including HTML, CSS and JavaScript with a focus on interactive elements and dynamic content."
         result="April-2024"
         src={projectSix}
          githubLink="https://github.com/ankitadattatraysalunke/JS-Bubble-Game"
          liveDemoLink="https://js-bubble-game.vercel.app/"
          />


            <ProjectCard 
         title="BASIC BOOTSTRAP website "
         des="A simple website created with Bootstrap components capable of being further improved with additional features and refinements."
         result="April-2024"
         src={projectSeven}
          githubLink="https://github.com/ankitadattatraysalunke/JS-Bootstrap-p"
          liveDemoLink="https://js-bootstrap-p.vercel.app/"
          />
           <ProjectCard 
         title="BASIC FIGMA PROJECT"
         des="Susscessfully designed a basic restaurant app in Figma featuring a home screen, menu screen, dish screen, cart screen. "
         result="Aug-2024" 
         src={projectEight}
          liveDemoLink="https://www.figma.com/design/O1Tr9eARq8nevO9R2bX7tc/Food-Ordering-App?node-id=0-1&t=yLF0JI97JcSiCSi6-0"
          />
      </div>
    </section>
  )
}

export default Projects
