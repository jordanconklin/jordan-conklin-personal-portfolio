import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Personal Portfolio Website",
    description:
      "My portfolio built with Tailwind CSS and React.",
    image: "/portfolio-website-image.png",
    github: "https://github.com/jordanconklin/personal-portfolio",
    link: "https://jordan-conklin-personal-portfolio.vercel.app",
  },
  {
    name: "ConklinOfficial Landing Page",
    description: "My personal brand landing page where customers can purchase merch and programs.",
    image: "/conklinofficial-LP-image.png",
    github: "https://github.com/jordanconklin/conklin-official",
    link: "https://conklin-official.netlify.app/index.html",
  },
  // {
  //   name: "TCR: Equities Backtester & Data Visualization Project",
  //   description:
  //     "A collaborative project that uses Pandas and Python to evaluate trading strategies on historical stock market data.",
  //   image: "/tasktrackr-image.png",
  //   github: "",
  //   link: "",
  // },
  {
    name: "RetroTune @LAHacks",
    description:
      "Hackathon project built with Python and Gemini API, curating a Spotify playlist based on one's Instagram feed",
    image: "/retrotune.png",
    github: "https://github.com/mayhong1/lahacks24/blame/RTjordan/lahacks24/lahacks24.py",
    link: "https://www.youtube.com/watch?v=yuOEwQPndEE",
  },
  {
    name: "TaskTrackr To-Do List App",
    description:
      "TaskTrackr is a todo list app built using React and JavaScript.",
    image: "/tasktrackr-image.png",
    github: "https://github.com/jordanconklin/react-todo",
    link: "https://tasktrackr-react.vercel.app/",
  },
  
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection