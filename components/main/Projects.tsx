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
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="A sleek, responsive portfolio showcasing my web development projects and skills."
          technologies={["Next.js", "React", "Tailwind CSS", "Framer Motion"]}
          demoLink="https://demo.com"
          githubLink="https://github.com/username/repo"
          index={1}
        />
        <ProjectCard
          src="/portfolio1.png"
          title="Modern Next.js Portfolio"
          description="A sleek, responsive portfolio showcasing my web development projects and skills."
          technologies={["Next.js", "React", "Tailwind CSS", "Framer Motion"]}
          demoLink="https://demo.com"
          githubLink="https://github.com/username/repo"
          index={3}
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