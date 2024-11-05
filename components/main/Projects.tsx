import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      {/* <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10">  
        <ProjectCard
          src="/branditbg.png"
          title="AI-Powered Marketing Copy Generator"
          description="A cutting-edge AI-powered marketing platform that revolutionizes how businesses create their brand content. 
          Built with Next.js and AWS serverless infrastructure, this application empowers users to generate professional brand and marketing copy instantly through OpenAI's powerful API."
          technologies={["Next.js", "React", "Typescript", "Tailwind CSS", "Python", "OpenAI API", "AWS"]}
          demoLink="https://brandit-beta.vercel.app/"
          githubLink="https://github.com/jnjerin/brandit"
          index={0}
        />
        <ProjectCard
          src="/domovie.png"
          title="Instant Movie Search & Discovery Platform"
          description="A sophisticated movie discovery platform powered by the TMDB API, delivering real-time movie data through an optimized architecture that separates client and server concerns and a component-based structure that ensures scalability.
          The dark-mode enabled interface combines Tailwind's utility-first approach with Next.js server components to create a fast, responsive experience where users can explore and search through an extensive movie database with instant results.."
          technologies={["Next.js", "React", "JavaScript", "Tailwind CSS", "TMDB API"]}
          demoLink="https://domovie-beta.vercel.app/"
          githubLink="https://github.com/jnjerin/domovie"
          index={3}
        />
        <ProjectCard
          src="/portfolionew.png"
          title="Modern Next.js Portfolio with Dynamic Interactions"
          description="A modern web portfolio combining sleek design principles with dynamic interactions. Features an elegant responsive grid system with smooth animations and gradient aesthetics. 
          Project cards showcase comprehensive details including technology stack badges, and direct links to both demos and source code,  creating an engaging platform to highlight development expertise."
          technologies={["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend API"]}
          demoLink="https://portfolio-joan-njeris-projects.vercel.app/"
          githubLink="https://github.com/jnjerin/portfolio"
          index={1}
        />
        

        {/* <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="A sleek, responsive portfolio showcasing my web development projects and skills."
          technologies={["Next.js", "React", "Tailwind CSS", "Framer Motion"]}
          demoLink="https://demo.com"
          githubLink="https://github.com/username/repo"
          index={4}
        /> */}
      </div>
      {/* <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/CardImage.png" 
          title="Modern Next.js Portfolio" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Social Media app for devs"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next js job board"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div> */}
    </div>
  );
};

export default Projects;