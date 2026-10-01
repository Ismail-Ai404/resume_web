import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Globe,
} from "lucide-react";

import React from "../assets/React.png";
import GitHub from "../assets/GitHub.png";
import HTML5 from "../assets/HTML5.png";
import JavaScript from "../assets/JavaScript.png";
import MongoDB from "../assets/MongoDB.png";
import Node from "../assets/Node.png";
import Express from "../assets/Express.png";
import Figma from "../assets/Figma.png";
import Python from "../assets/Python.png";
import CSS from "../assets/CSS3.png";
import Next from "../assets/Next.png";

import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

import { Dispatch, SetStateAction } from "react";

type PersonalInfo = {
  firstName: string;
  lastName: string;
  career: string;
  email: string;
  location: string;
  linked: string;
  github: string;
  portfolio: string;
  major: string;
  school: string;
  year: string;
};

type TechStack = {
  name: string;
  image?: string;
};

type SectionDetail = {
  position: JSX.Element;
  detail: JSX.Element[];
};

type ResumeProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

const personal: PersonalInfo = {
  firstName: "MOHAMMAD ISMAIL",
  lastName: "HOSSAIN SIDDIQUEE",
  career: "Frontend Engineer",
  email: "mohammad.siddiquee@northsouth.edu",
  location: "Dhaka, Bangladesh",
  linked: "linkedin.com/in/ismailgetsitdone/",
  github: "github.com/Ismail-Ai404",
  portfolio: "Portfolio Website",
  major: "BSc in Computer Science & Engineering",
  school: "North South University",
  year: "2019 - 2023",
};

export default function Resume({
  darkMode,
  setDarkMode,
}: ResumeProps) {
  const techStack: TechStack[] = [
    { name: "React", image: React },
    { name: "JavaScript", image: JavaScript },
    { name: "HTML", image: HTML5 },
    { name: "CSS", image: CSS },
    { name: "Node.js", image: Node },
    { name: "Express.js", image: Express },
    { name: "MongoDB", image: MongoDB },
    { name: "Python", image: Python },
    { name: "Figma", image: Figma },
    { name: "GitHub", image: GitHub },
    { name: "Git" },
    { name: "REST" },
    { name: "UI/UX" },
    { name: "Adobe Photoshop" },
    { name: "AI" },
    { name: "Next.js", image: Next },
  ];

  const sectionOne: SectionDetail[] = [
    {
      position: (
        <>
          <b>ELO</b> | <b>FRONTEND ENGINEER</b> | Jun 2025 - Present
        </>
      ),
      detail: [
        <>
          Develop and maintain <b>web applications</b> and user-facing
          software features.
        </>,
        <>
          Contribute to <b>frontend implementation</b>, feature development,
          debugging, and application refinement.
        </>,
        <>
          Work across application layers to integrate frontend functionality
          with <b>backend services</b>.
        </>,
        <>
          Collaborate within software development workflows to deliver and
          improve <b>production features</b>.
        </>,
      ],
    },

    {
      position: (
        <>
          <b>ARB INTERACTIVE</b> | <b>FRONTEND DEVELOPER</b> | Feb 2025 - May
          2025
        </>
      ),
      detail: [
        <>
          Developed <b>responsive frontend interfaces</b> for web projects.
        </>,
        <>
          Translated design concepts into clean, functional, and
          <b> user-friendly web experiences</b>.
        </>,
        <>
          Built and refined interfaces using <b>HTML, CSS, JavaScript, and
          React</b>.
        </>,
        <>
          Improved layouts and interactions across different screen sizes and
          devices.
        </>,
        <>
          Worked with design and development requirements to turn concepts
          into working interfaces.
        </>,
      ],
    },

    {
      position: (
        <>
          <b>AUGMENTA EDUCATION</b> | <b>SOFTWARE CONSULTANT</b> | Nov 2024 -
          Jan 2025
        </>
      ),
      detail: [
        <>
          Developed a <b>student-performance web application</b> using Node
          and MongoDB, contributing to backend development, frontend
          integration, and deployment.
        </>,
        <>
          Built and supported <b>data-driven interfaces and workflows</b> for
          student records, attendance, payments, and reporting.
        </>,
        <>
          Structured operational data and digital workflows for
          <b> education-related processes</b>.
        </>,
        <>
          Optimized database operations, reducing execution time by
          approximately <b>60%</b>.
        </>,
        <>
          Worked across frontend, backend, and database layers to deliver and
          maintain application functionality.
        </>,
      ],
    },

    {
      position: (
        <>
          <b>AUGMENTA EDUCATION</b> | <b>LEAD INSTRUCTOR OF PYTHON</b> | Nov
          2024 - Jan 2025
        </>
      ),
      detail: [
        <>
          Taught <b>Python</b> through structured lessons, practical exercises,
          and programming projects.
        </>,
        <>
          Developed tutorials and learning materials focused on
          <b> programming fundamentals and problem-solving</b>.
        </>,
        <>
          Guided learners through hands-on programming tasks and technical
          concepts.
        </>,
        <>
          Provided technical training and support to students and staff.
        </>,
      ],
    },

    {
      position: (
        <>
          <b>ELO</b> | <b>FRONTEND ENGINEER</b> | Jan 2022 - Oct 2024
        </>
      ),
      detail: [
        <>
          Contributed to the development of <b>SaaS products</b>, working
          across UI/UX design and frontend implementation.
        </>,
        <>
          Designed user interfaces and improved user experiences, translating
          product requirements into intuitive, user-friendly designs.
        </>,
        <>
          Transitioned into a <b>frontend-focused role</b>, building and
          maintaining responsive web interfaces for multiple client projects.
        </>,
        <>
          Collaborated with cross-functional teams to implement features,
          resolve bugs, and improve application performance.
        </>,
        <>
          Worked across diverse client requirements, adapting designs and
          frontend solutions to different products and business needs.
        </>,
        <>
          Assisted with development tasks, debugging, and application
          improvements.
        </>,
      ],
    },
  ];

  const contact = [
    {
      icon: Mail,
      detail: personal.email,
    },
    {
      icon: MapPin,
      detail: personal.location,
    },
    {
      icon: Linkedin,
      detail: personal.linked,
    },
    {
      icon: Github,
      detail: personal.github,
    },
    {
      icon: Globe,
      detail: personal.portfolio,
    },
  ];

  function handleContact(name: string): void {
    if (name.includes("linkedin.com")) {
      window.open(
        "https://www.linkedin.com/in/ismailgetsitdone/",
        "_blank"
      );
      return;
    }

    if (name.includes("github.com")) {
      window.open(
        "https://github.com/Ismail-Ai404",
        "_blank"
      );
      return;
    }

    if (name.includes("Portfolio")) {
      window.open(
        "https://ismail-ai404.github.io/resume_web/",
        "_blank"
      );
    }
  }

  return (
    <div
      className={`${
        darkMode ? "bg-black" : "bg-white"
      } md:min-w-[800px] lg:w-[900px] w-[100svw] overflow-x-hidden absolute top-0 left-1/2 -translate-x-1/2`}
    >
      {/* Dark Mode Toggle */}
      <div
        className="target absolute right-5 top-4 z-20 cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
      >
        <p className="text-[30px] duration-500 transition-opacity opacity-100 text-white">
          {darkMode ? (
            <IoSunny className="sun" />
          ) : (
            <IoMoon className="moon" />
          )}
        </p>
      </div>

      {/* Header */}
      <header
        className={`${
          darkMode ? "bg-gray-800" : "bg-gray-700"
        } duration-500 p-8 flex flex-col items-start gap-6 text-white`}
      >
        <div className="relative flex flex-col items-start">
          <h1 className="font-light mb-2 flex gap-4 flex-wrap">
            <span className="target md:text-[42px] text-[32px] relative duration-500 cursor-default">
              {personal.firstName}
            </span>

            <span className="target md:text-[42px] text-[32px] relative duration-500 cursor-default">
              {personal.lastName}
            </span>
          </h1>

          <p className="text-[18px] pl-2 transform cursor-default">
            {personal.career}
          </p>
        </div>
      </header>

      <div
        className={`${
          darkMode ? "bg-black" : "bg-white"
        } flex flex-col md:flex-row`}
      >
        {/* LEFT COLUMN */}
        <div
          className={`${
            darkMode
              ? "bg-[#151414]"
              : "bg-[#f8f3f1]"
          } duration-500 w-full md:w-[300px] p-6`}
        >
          {/* CONTACT */}
          <section className="mb-8">
            <h2
              className={`${
                darkMode ? "text-white" : "text-gray-700"
              } duration-500 font-medium text-xl mb-4`}
            >
              CONTACT
            </h2>

            <div className="space-y-3 relative md:left-2 flex flex-col items-center">
              {contact.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    darkMode
                      ? "text-white hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-600"
                  } flex w-[250px] items-center gap-3 duration-500 cursor-pointer`}
                  onClick={() => handleContact(item.detail)}
                >
                  <item.icon className="w-5 h-5 shrink-0" />

                  <span className="text-[13px] break-all">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section className="mb-8">
            <h2
              className={`${
                darkMode ? "text-white" : "text-gray-700"
              } duration-500 font-medium text-xl mb-4`}
            >
              EDUCATION
            </h2>

            <div className="space-y-4">
              <div>
                <p
                  className={`${
                    darkMode ? "text-white" : "text-gray-600"
                  } duration-500`}
                >
                  {personal.major}
                </p>

                <p
                  className={`${
                    darkMode ? "text-white" : "text-gray-600"
                  } duration-500`}
                >
                  {personal.school}
                </p>

                <p
                  className={`${
                    darkMode ? "text-white" : "text-gray-600"
                  } duration-500`}
                >
                  {personal.year}
                </p>
              </div>
            </div>
          </section>

          {/* LANGUAGES */}
          <section className="mb-8">
            <h2
              className={`${
                darkMode ? "text-white" : "text-gray-700"
              } duration-500 font-medium text-xl mb-4`}
            >
              LANGUAGES
            </h2>

            <div className="space-y-2">
              <p
                className={`${
                  darkMode ? "text-white" : "text-gray-600"
                } duration-500 text-[15px]`}
              >
                <b>English</b> — Bilingual
              </p>

              <p
                className={`${
                  darkMode ? "text-white" : "text-gray-600"
                } duration-500 text-[15px]`}
              >
                <b>Bengali</b> — Native
              </p>
            </div>
          </section>

          {/* TECH STACK */}
          <section>
            <h2
              className={`${
                darkMode ? "text-white" : "text-gray-700"
              } duration-500 font-medium text-xl mb-4`}
            >
              SKILLS
            </h2>

            <div className="p-2 grid grid-cols-3 gap-3">
              {techStack.map((skill, index) => (
                <div
                  key={index}
                  className={`${
                    darkMode
                      ? "bg-gray-800 shadow-lg hover:shadow-xl"
                      : "bg-gray-200 shadow-md hover:shadow-lg"
                  } p-3 flex flex-col items-center justify-center rounded-sm transition-transform transform hover:scale-105 duration-200 min-h-[78px]`}
                >
                  {skill.image ? (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-[30px] h-[30px] object-contain"
                    />
                  ) : (
                    <div
                      className={`${
                        darkMode ? "text-white" : "text-gray-700"
                      } w-[30px] h-[30px] flex items-center justify-center font-bold text-[12px]`}
                    >
                      {skill.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}

                  <p
                    className={`${
                      darkMode ? "text-white" : "text-gray-900"
                    } text-[11px] text-center cursor-default relative top-2`}
                  >
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className={`${
            darkMode ? "bg-[#1a1919fa]" : "bg-white"
          } w-full md:w-[100%] p-8`}
        >
          {/* SUMMARY */}
          <section className="mb-8">
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-[#f8f3f1]"
              } duration-500 px-4 py-2 mb-4`}
            >
              <h2
                className={`${
                  darkMode ? "text-white" : "text-gray-700"
                } duration-500 font-medium text-xl`}
              >
                SUMMARY
              </h2>
            </div>

            <p
              className={`${
                darkMode ? "text-white" : "text-gray-600"
              } duration-500 text-[14px] leading-6`}
            >
              Frontend Engineer with a background in Computer Science and
              experience building responsive web applications. Skilled in
              React, JavaScript, and modern web technologies, with a focus on
              creating practical, user-friendly digital experiences.
            </p>
          </section>

          {/* PROFESSIONAL EXPERIENCE */}
          <section>
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-[#f8f3f1]"
              } duration-500 px-4 py-2 mb-6`}
            >
              <h2
                className={`${
                  darkMode ? "text-white" : "text-gray-700"
                } duration-500 font-medium text-xl`}
              >
                PROFESSIONAL EXPERIENCE
              </h2>
            </div>

            <div className="space-y-7">
              {sectionOne.map((experience, index) => (
                <ul
                  key={index}
                  className={`${
                    darkMode ? "text-white" : "text-gray-600"
                  } text-left text-[14px]`}
                >
                  <li className="list-none font-medium mb-2">
                    {experience.position}
                  </li>

                  {experience.detail.map((textLi, liIndex) => (
                    <li
                      key={liIndex}
                      className="ml-5 list-disc leading-6"
                    >
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
