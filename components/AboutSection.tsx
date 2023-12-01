import React from "react"
import Image from "next/image"

const skills = [
  { skill: "C++" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "SQL" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
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
                with a Computing Specialization and minor in Data Science Engineering.
            </p>
            <br />
            <p>
                I am the Founder & Software Engineer of ConklinOfficial, improving the lives of 400k+ 
                soccer players with 1.5M monthly social media impressions. Recently I have gained web-scraping 
                and user authentication experience from Software Engineer Internships at Bruinshack and Fork.
            </p>
            <br />
            <p>
                I have a wide range of hobbies and passions.
                From traveling and playing soccer to eating spicy food and 
                making social media content, I am always seeking 
                new experiences and love to keep myself engaged and learning new things.
            </p>
            <br />
            <p>
                With my desire to never stop growing and my passion in tech, 
                I am excited to see where my career takes me as I am always 
                open to new opportunities. My email is {" "}
                <span className="font-bold text-teal-500">
                  jordinho@g.ucla.edu 
                </span>{" "}
                if you have any questions!
            </p>
            <br />
            <p>
              Click {" "}
              <a href="https://www.linkedin.com/in/jordan-conklin/overlay/1635548262843/single-media-viewer/?profileId=ACoAACt5fyYBr-Y2-HWxm6awP89h0IIOozSOADo" 
                  className="font-bold text-teal-500">
                here
              </a>{" "}
              to view my resume.
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