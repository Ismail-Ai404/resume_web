import { Mail, MapPin, Phone, Linkedin, Globe, Github } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

import React from '../assets/React.png';
import css from '../assets/CSS3.png';
import Express from '../assets/Express.png';
import GitHub from '../assets/GitHub.png';
import HTML5 from '../assets/HTML5.png';
import JavaScript from '../assets/JavaScript.png';
import MongoDB from '../assets/MongoDB.png';
import Mongoose from '../assets/Mongoose.png';
import MySQL from '../assets/MySQL.png';
import Node from '../assets/Node.png';
import Postman from '../assets/Postman.png';
import Redux from '../assets/Redux.png';
import Tailwind from '../assets/Tailwind.png';
import TypeScript from '../assets/TypeScript.png';
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { IoLink } from "react-icons/io5";

type PersonalInfo = {
  firstName: string;
  lastName: string;
  career: string;
  phone: string;
  email: string;
  location: string;
  linked: string;
  portfolio: string;
  github: string;
  major: string;
  school: string;
  year: string;
};

const personal: PersonalInfo = {
  firstName: "Ismail",
  lastName: "Hossain",
  career: "FullStack Engineer",
  phone: "+88018-4159-7451",
  email: "ayon000777@email.com",
  location: "Dhaka, Bangladesh",
  linked: "linkedin.com/in/ismailgetsitdone/",
  portfolio: "Portfolio Website",
  github: "github.com/Ismail-Ai404",
  major: "Bachelor of Science in Computer Science and Engineering",
  school: "North South University",
  year: "2019-2023",
};

type TechStack = {
  name: string;
  image: string;
};

type SectionDetail = {
  position: JSX.Element;
  detail: JSX.Element[];
};

type ResumeProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};


export default function Resume({ darkMode, setDarkMode }: ResumeProps) {

  const techStack: TechStack[] = [
    { name: "JavaScript", image: JavaScript },
    { name: "TypeScript", image: TypeScript },
    { name: "React", image: React },
    { name: "HTML5", image: HTML5 },
    { name: "CSS3", image: css },
    { name: "Tailwind", image: Tailwind },
    { name: "Redux", image: Redux },
    { name: "Node.js", image: Node },
    { name: "Express", image: Express },
    { name: "MySQL", image: MySQL },
    { name: "MongoDB", image: MongoDB },
    { name: "Mongoose", image: Mongoose },
    { name: "GitHub", image: GitHub },
    { name: "Postman", image: Postman },
  ];

  const sectionOne: SectionDetail[] = [
    {
      position: (
        <>
          <b>CLICK-O DIGITAL</b> | <b>FULL-STACK DEVELOPER</b> | Jun 2025 - Present
        </>
      ),
      detail: [
        <>
          Develop and deploy <b>full-stack web applications</b> for diverse clients using the <b>MERN stack</b> (MongoDB, Express.js, React, Node.js),
          delivering tailored digital solutions that meet specific business requirements.
        </>,
        <>
          Engineer and maintain secure <b>RESTful APIs</b> to manage data flow between front-end and back-end systems,
          implementing robust <b>authentication and authorization</b> mechanisms.
        </>,
        <>
          Collaborate with <b>UI/UX designers</b> and <b>project managers</b> to translate client requirements into technical specifications
          and functional features, ensuring timely project delivery.
        </>
      ]
    },
    {
      position: (
        <>
          <b>MOXO</b> | <b>PRODUCT DESIGNER</b> | Feb 2025 - May 2025
        </>
      ),
      detail: [
        <>
          Designed and prototyped key <b>user-centric features</b> for a high-traffic collaboration platform,
          directly contributing to the user experience roadmap.
        </>,
        <>
          Created <b>high-fidelity, interactive prototypes</b> in <b>Figma</b>, translating complex product requirements
          into actionable design specifications that streamlined the development handoff process.
        </>,
        <>
          Collaborated in an <b>agile environment</b> with cross-functional product and engineering teams
          to ensure design feasibility and a seamless user experience.
        </>
      ]
    },
    {
      position: (
        <>
          <b>AUGMENTA EDUCATION CONSULTANCY</b> | <b>PYTHON & IELTS INSTRUCTOR</b> | Feb 2024 - Jan 2025
        </>
      ),
      detail: [
        <>
          Designed and delivered a comprehensive <b>Python curriculum</b> for over <b>40 students</b>,
          covering fundamental concepts to advanced data structures.
        </>,
        <>
          Achieved a <b>95% course completion rate</b> through hands-on instruction and personalized guidance.
        </>
      ]
    },
    {
      position: (
        <>
          <b>EMBEDDED LOGIC OPERATIONS (ELO)</b> | <b>SOFTWARE ENGINEER INTERN</b> | Jan 2022 - Oct 2022
        </>
      ),
      detail: [
        <>
          Developed three <b>responsive web interfaces</b> using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>,
          contributing to a <b>15% improvement</b> in user task completion rates.
        </>,
        <>
          Contributed to a <b>cross-platform mobile application</b> using <b>Flutter</b>,
          helping reduce manual data entry time by <b>30%</b>.
        </>
      ]
    }
  ];

  const sectionTwo: SectionDetail[] = [
    {
      position: (
        <>
          <b>YELPCAMP | FULLSTACK WEB APPLICATION </b>
        </>
      ),
      detail: [
        <>
          Developed a comprehensive <b>camping review platform</b> where users can discover, review, and share camping experiences,
          built with <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b>.
        </>,
        <>
          Implemented <b>user authentication</b> and <b>authorization</b> with <b>Passport.js</b>, enabling secure user registration,
          login, and session management for campground reviews and submissions.
        </>,
        <>
          Integrated <b>Cloudinary API</b> for image upload and management, allowing users to upload multiple photos for each campground
          with automatic image optimization and responsive delivery.
        </>,
        <>
          Built responsive <b>front-end</b> using <b>Bootstrap</b> and <b>EJS templating</b>, ensuring seamless user experience
          across desktop and mobile devices with interactive maps powered by <b>Mapbox API</b>.
        </>
      ]
    },
    {
      position: (
        <>
          <b>PORTFOLIO WEBSITE | RESPONSIVE WEB DESIGN</b>
        </>
      ),
      detail: [
        <>
          Created a modern, responsive <b>portfolio website</b> showcasing professional projects and technical skills,
          built with <b>HTML5</b>, <b>CSS3</b>, and <b>JavaScript</b>.
        </>,
        <>
          Implemented smooth <b>animations</b> and <b>interactive elements</b> to enhance user engagement,
          featuring project galleries, contact forms, and skill demonstrations.
        </>,
        <>
          Optimized for <b>mobile-first design</b> with cross-browser compatibility and fast loading times,
          deployed on <b>Webflow</b> for professional presentation.
        </>
      ]
    },
  ];
  
  function handleOpenLink(index: number): void {
    switch (index) {
      case 0: window.open('https://yelpcamp-3bdc.onrender.com/', '_blank'); break;
      case 1: window.open('https://ismails-portfolio-70b11a.webflow.io/#Portfolio', '_blank'); break;
      default: break;
    }
  }

  function handleContact(name: string): void {
    if (name.includes('Portfolio')) {
      window.open('https://ismails-portfolio-70b11a.webflow.io/#Portfolio');
      return;
    }
    if (name.includes('linkedin.com')) {
      window.open('https://www.linkedin.com/in/ismailgetsitdone/');
      return;
    }
    if (name.includes('github.com')) {
      window.open('https://github.com/Ismail-Ai404');
      return;
    }
    return;
  }

  const contact = [
    {icon: Phone, detail: personal.phone},
    {icon: Mail, detail: personal.email},
    {icon: MapPin, detail: personal.location},
    {icon: Linkedin, detail: personal.linked},
    {icon: Github, detail: personal.github},
    {icon: Globe, detail: personal.portfolio},
  ]

  return (
    <div className={`${darkMode? 'bg-black' : ''} md:min-w-[800px] lg:w-[900px] md:max-w-6x1 w-[100svw] overflow-x-hidden absolute top-0 left-1/2 -translate-x-1/2`}>
        <div className="target absolute right-5 top-4" onClick={() => setDarkMode(!darkMode)}>
        <p className="text-[30px] duration-500 transition-opacity opacity-100">
          {darkMode ? (
            <IoSunny className="sun"/>
          ) : (
            <IoMoon className="moon"/>
          )}
        </p>
      </div>
    
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-gray-700'} duration-500 p-8 flex flex-col items-start gap-6 text-white`}>
        <div className="relative flex flex-col items-start">
          <h1 className={`${darkMode ? '' : 'text-white'} duration-500 font-light mb-2 flex gap-4`}>
            <span className="target md:text-[50px] text-[40px] relative duration-500 cursor-default">{personal.firstName}</span>
            <span className="target md:text-[50px] text-[40px] relative duration-500 cursor-default">{personal.lastName}</span>
          </h1>
          <p className="text-[18px] pl-2 transform cursor-default">{personal.career}</p>
        </div>
      </header>

      <div className={`${darkMode ? 'bg-black' : 'bg-white'} flex flex-col md:flex-row `}>
        {/* Left Column */}
        <div className={`${darkMode ? 'bg-[#151414]' : 'bg-[#f8f3f1]'} duration-500 w-full md:w-[300px] p-6`}>
          <section className="mb-8">
            <h2 className={`${darkMode ? 'text-white' : 'text-gray-700'} duration-500 font-medium text-xl mb-4`}>CONTACT</h2>
            <div className="space-y-3 relative md:left-2 flex flex-col items-center">
                {contact.map((item) => (
                  <div className={`${darkMode ? 'text-white hover:text-blue-400 active:text-blue-400' : 'text-gray-600 hover:text-blue-600 active:text-blue-600'} flex w-[250px] items-center gap-3 duration-500`}
                    onClick={() => handleContact(item.detail)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className=" text-[15px]">{item.detail}</span>
                  </div>
                ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`${darkMode ? 'text-white' : 'text-gray-700'} duration-500 font-medium text-xl mb-4`}>EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <p className={`${darkMode ? 'text-white' : 'text-gray-600'} duration-500`}>{personal.major}</p>
                <p className={`${darkMode ? 'text-white' : 'text-gray-600'} duration-500`}>{personal.school}</p>
                <p className={`${darkMode ? 'text-white' : 'text-gray-600'} duration-500`}>{personal.year}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className={`${darkMode ? 'text-white' : 'text-gray-700'} duration-500 font-medium text-xl mb-4`}>Tech Stack</h2>
            <div className="p-2 text-gray-600 grid grid-cols-3 gap-3">
              {techStack.map((icon, index) => (
                <div
                  key={index}
                  className={`${
                    darkMode ? 'bg-gray-800 shadow-lg hover:shadow-xl' : 'bg-gray-200 shadow-md hover:shadow-lg'
                  } p-4 flex flex-col items-center rounded-sm transition-transform transform hover:scale-105 duration-200`}
                >
                  <img src={icon.image} alt={icon.name} className="w-[30px]" />
                  <p className={`${darkMode ? 'text-white' : 'text-gray-900'} text-[12px] cursor-default relative top-2`}>
                    {icon.name}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className={`${darkMode ? 'bg-[#1a1919fa]' : ''} w-full md:w-[100%] p-8`}>
          <section className="mb-8">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-[#f8f3f1]'} duration-500 px-4 py-2 mb-4`}>
              <h2 className={`${darkMode ? 'text-white' : 'text-gray-700'} duration-500 font-medium text-xl`}>PROFESSIONAL EXPERIENCE</h2>
            </div>
            <div className="space-y-6">
              {sectionOne.map((experience, index) => (
                <ul key={index} className="list-disc ml-1 text-gray-600 text-left text-[14px]">
                  <li className={`${darkMode ? 'text-white' : 'text-gray-600'} duration-500 list-none font-medium mb-2`}>
                    {experience.position}
                  </li>
                  {experience.detail.map((textLi, liIndex) => (
                    <li key={liIndex} className={`${darkMode ? 'text-white' : 'text-gray-600'} target duration-500 ml-4 cursor-text`}>
                      {textLi}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </section>

          <section>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-[#f8f3f1]'} duration-500 px-4 py-2 mb-4`}>
              <h2 className={`${darkMode ? 'text-white' : 'text-gray-700'} duration-500 font-medium text-xl`}>PROJECTS</h2>
            </div>
            <div className="space-y-6">
              {sectionTwo.map((text, index) => (
                <ul key={index} className="list-disc ml-1 text-gray-600 text-left text-[14px] ">
                  <li className={`${darkMode ? 'text-white' : 'text-gray-600'} flex duration-500  hover:text-blue-600 list-none `}
                    onClick={() => handleOpenLink(index)}
                  >
                    {text.position}
                    <IoLink className="text-[18px] relative ml-1 top-[2px]"/>
                  </li>
                  {text.detail.map((textLi, liIndex) => (
                    <li key={liIndex} className={`${darkMode ? 'text-white' : 'text-gray-600'} target duration-500 ml-4 cursor-text`}>
                      {textLi}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

