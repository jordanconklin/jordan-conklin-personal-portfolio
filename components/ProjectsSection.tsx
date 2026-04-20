import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

type ProjectLink = {
  label: string
  href: string
  icon?: "github"
}

type Project = {
  name: string
  eyebrow?: string
  description: string
  image: string
  github?: string
  link?: string
  links?: ProjectLink[]
}

const bravoBallLinks = {
  ios: "https://apps.apple.com/us/app/bravoball/id6746950846",
  android:
    "https://play.google.com/store/apps/details?id=com.bravoball.app.bravoball_flutter&pcampaignid=web_share",
  earlierMobile: "https://github.com/jordanconklin/bravoball_flutter",
  earlierBackend: "https://github.com/jordanconklin/BravoBall_Backend",
  landing: "https://bravoball.vercel.app/",
}

const projects: Project[] = [
  {
    name: "BravoBall",
    eyebrow: "Featured Project",
    description:
      "Founder and full-stack engineer for an AI-powered soccer training app live on iOS and Android with 9,000+ downloads, a 4.8-star rating, and 3,600+ completed training sessions. Built the Flutter/Dart mobile app, Python/FastAPI backend, Render Postgres deployment, Firebase notifications, and a personalization engine that ranks drills by skill area, equipment, user preferences, and target duration. Current production code is private; linked repos are earlier public versions.",
    image: "/bravoball-image.png",
    link: bravoBallLinks.ios,
    links: [
      { label: "iOS App", href: bravoBallLinks.ios },
      { label: "Android App", href: bravoBallLinks.android },
      {
        label: "Earlier Mobile Repo",
        href: bravoBallLinks.earlierMobile,
        icon: "github",
      },
      {
        label: "Earlier Backend Repo",
        href: bravoBallLinks.earlierBackend,
        icon: "github",
      },
      { label: "Landing Page", href: bravoBallLinks.landing },
    ],
  },
  {
    name: "BravoBall - Landing Page",
    description:
      "Marketing and product site for BravoBall user acquisition, product education, and download conversion. Built with TypeScript, React, Next.js, and Node.js.",
    image: "/bravoballLanding.png",
    github: "https://github.com/jordanconklin/bravoball-landing",
    link: bravoBallLinks.landing,
  },
  {
    name: "Fork - AI Nutrition App",
    description:
      "Backend software engineer for a production nutrition app serving 10,000+ students. Improved Firestore and REST API infrastructure, expanded data scraping pipelines with Beautiful Soup, and helped increase app capacity and engagement.",
    image: "/fork-image.png",
    github: "",
    link: "",
  },
  {
    name: "ConklinOfficial - Personal Brand Landing Page",
    description:
      "Personal soccer brand platform supporting programs, mentorship, and product sales for a 400k-follower audience. Built with Spring Boot, React, TypeScript, and Node.js.",
    image: "/conklinofficial-LP-image.png",
    github: "https://github.com/jordanconklin/conklinofficial-landing-page",
    link: "https://conklinofficial-landing-page.vercel.app/",
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
    name: "RetroTune - Spotify Playlist Generator, LA Hacks 2024",
    description:
      "Hackathon project that curates Spotify playlists from an Instagram feed using Reflex.py and the Gemini API.",
    image: "/retrotune.png",
    github: "https://github.com/mayhong1/lahacks24/blame/RTjordan/lahacks24/lahacks24.py",
    link: "https://www.youtube.com/watch?v=yuOEwQPndEE",
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
                <div
                  className={`flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 ${
                    project.eyebrow
                      ? "rounded-lg border border-teal-200 bg-teal-50/60 p-5 shadow-lg dark:border-teal-800 dark:bg-teal-950/20"
                      : ""
                  }`}
                >
                  <div className=" md:w-1/2">
                    {project.link ? (
                      <Link href={project.link} target="_blank" rel="noreferrer">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={600}
                          height={400}
                          className="rounded-xl shadow-xl hover:opacity-70"
                          priority={idx < 2}
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="rounded-xl shadow-xl"
                        priority={idx < 2}
                      />
                    )}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    {project.eyebrow && (
                      <p className="mb-3 inline-block rounded bg-teal-600 px-3 py-1 text-sm font-semibold text-white">
                        {project.eyebrow}
                      </p>
                    )}
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    {project.links ? (
                      <div className="flex flex-wrap gap-3">
                        {project.links.map((projectLink) => (
                          <Link
                            key={projectLink.label}
                            href={projectLink.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-1 dark:bg-neutral-100 dark:text-neutral-900"
                          >
                            {projectLink.icon === "github" && <BsGithub size={18} />}
                            {projectLink.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-row align-bottom space-x-4">
                        {project.github && (
                          <Link href={project.github} target="_blank" rel="noreferrer">
                            <BsGithub
                              size={30}
                              className="hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                          </Link>
                        )}
                        {project.link && (
                          <Link href={project.link} target="_blank" rel="noreferrer">
                            <BsArrowUpRightSquare
                              size={30}
                              className="hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                          </Link>
                        )}
                      </div>
                    )}
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
