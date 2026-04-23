"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll"
import {
  AiOutlineFileText,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot-image.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Jordan!</h1>
          <p className="text-lg mt-6 mb-8 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              software engineer and founder{" "}
            </span>
            based in Fremont, CA. I build AI-powered consumer products, and
            I&#39;m currently focused on scaling{" "}
            <span className="font-semibold text-teal-600">BravoBall</span>{" "}
            across iOS and Android.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              View BravoBall
            </Link>
            <a
              href="https://github.com/jordanconklin"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded border border-teal-600 text-teal-700 shadow transition-colors hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-teal-950"
            >
              <AiOutlineGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/jordan-conklin/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded border border-teal-600 text-teal-700 shadow transition-colors hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-teal-950"
            >
              <AiOutlineLinkedin size={28} />
            </a>
            <a
              href="/Jordan-Conklin-Software-Engineer-Resume.pdf"
              download
              aria-label="Download resume"
              className="flex h-12 items-center gap-2 rounded border border-teal-600 px-4 font-semibold text-teal-700 shadow transition-colors hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-teal-950"
            >
              <AiOutlineFileText size={24} />
              Resume
            </a>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
            <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div> */}
    </section>
  )
}

export default HeroSection
