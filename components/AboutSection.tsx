import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "Typescript" },
  { skill: "Java" },
  { skill: "Dart" },
  { skill: "SQL" },
  { skill: "Swift" },
  { skill: "C++" },
  { skill: "Go" },
  { skill: "FastAPI" },
  { skill: "React" },
  { skill: "NextJS" },
  { skill: "Spring Boot" },
  { skill: "AWS" },
  { skill: "Docker" },
  { skill: "Render" },
  { skill: "Postgres" },
  { skill: "Firebase" },
  { skill: "GitHub Actions" },
  { skill: "S3" },
  { skill: "AI Agents" },
  { skill: "Product Management" },
  { skill: "Data Modeling" },
  { skill: "Microservices" },
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
                I graduated from <span className="font-bold text-teal-500">UCLA</span> 
                with a B.S. in Cognitive Science, focused on computer science and psychology, 
                and a minor in Data Science Engineering. I build products at the intersection 
                of AI, mobile apps, and consumer behavior.
            </p>
            <br />
            <p>
                My main project is <span className="font-bold text-teal-500">BravoBall</span>, 
                an AI-powered soccer training app I founded and engineered across iOS, Android, 
                and backend systems. The app has reached{" "}
                <span className="font-bold text-teal-500">9,000+ downloads</span>, a{" "}
                <span className="font-bold text-teal-500">4.8-star rating</span>, and{" "}
                <span className="font-bold text-teal-500">3,600+ completed training sessions</span>. 
                The product is built with Flutter, Dart, Python, FastAPI, Postgres, Firebase, 
                Docker, and Render.
            </p>
            <br />
            <p>
                I am also a former{" "}
                <span className="font-bold text-teal-500">
                  Software Development Engineer at Amazon
                </span>, where I built workflow components for LLM-driven ranking-quality tooling, 
                AWS Lambda and SQS pipelines, and a React interface for non-technical product teams. 
                Right now, I am focused on making{" "}
                <span className="font-bold text-teal-500">BravoBall</span> more reliable in 
                production, improving notifications and backend security, and exploring ML tooling 
                for soccer clip analysis. Outside of engineering roles, I run ConklinOfficial, a 
                soccer brand with <span className="font-bold text-teal-500">400k followers</span>.
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
                  jordan@conklinofficial.com
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
