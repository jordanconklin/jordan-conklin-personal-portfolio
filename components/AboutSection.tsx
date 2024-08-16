import React from "react"
import Image from "next/image"

const skills = [
  { skill: "C++" },
  { skill: "Python" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "NextJS" },
  { skill: "Beautiful Soup" },
  { skill: "AWS" },
  { skill: "Git" },
  { skill: "SQL" },
  { skill: "DynamoDB" },
  { skill: "MongoDB" },

]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
                {" "}
                I am an undergrad UCLA student majoring in Cognitive Science 
                (Computer Science + Psychology) and a minor in Data Science Engineering.
            </p>
            <br />
            <p>
                I am the Founder & Software Engineer of ConklinOfficial, improving the lives of 400k+ 
                soccer players with 1.5M monthly social media impressions. I am currently building Tekk, an AI-driven 
                soccer training app to help players improve their technique, which utilizes Python, SwiftUI, 
                Langchain, and Nvidia NIMs.
            </p>
            <br />
            <p>
                I have a wide range of hobbies and passions.
                From traveling and playing soccer to 
                making social media content, I am always seeking 
                new experiences and love to keep myself engaged and learning new things.
            </p>
            <br />
            <p>
              Feel free to checkout my {" "}
              <a href="/Jordan-Conklin-Software-Engineer-Resume.pdf" className="font-bold text-teal-500" download>
                resume
              </a>
              {" "} or my social media platforms on {" "}
              <a href="https://hoo.be/conklinofficial" className="font-bold text-teal-500">
                hoo.be
              </a>. My email is {" "}
                <span className="font-bold text-teal-500">
                  jordinho@g.ucla.edu 
                </span>{" "}
                if you have any questions!
            </p>

          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image 
                className="hidden md:block md:relative md:bottom-4 md:left-20 md:z-0"
                src="/coolman.png" 
                alt="" 
                width={400}
                height={325}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection