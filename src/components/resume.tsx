import {
  Mail,
  Github,
  MapPin,
} from "lucide-react";

import { Dispatch, SetStateAction } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

type PersonalInfo = {
  firstName: string;
  lastName: string;
  career: string;
  email: string;
  location: string;
  github: string;
  major: string;
  school: string;
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
  email: "ayon000777@gmail.com",
  location: "Dhaka, Bangladesh",
  github: "github.com/Ismail-Ai404",
  major: "BSc in Computer Science & Engineering",
  school: "North South University",
};

export default function Resume({
  darkMode,
  setDarkMode,
}: ResumeProps) {
  
 const icons = {
  react: "https://cdn.simpleicons.org/react/61DAFB",
  javascript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  html: "https://cdn.simpleicons.org/html5/E34F26",
  node: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  express: "https://cdn.simpleicons.org/express/000000",
  mongodb: "https://cdn.simpleicons.org/mongodb/47A248",
  github: "https://cdn.simpleicons.org/github/181717",
  figma: "https://cdn.simpleicons.org/figma/F24E1E",
  python: "https://cdn.simpleicons.org/python/3776AB",
  git: "https://cdn.simpleicons.org/git/F05032",
};

const techStack: TechStack[] = [
  { name: "React", image: icons.react },
  { name: "JavaScript", image: icons.javascript },
  { name: "HTML", image: icons.html },
  { name: "Node.js", image: icons.node },
  { name: "Express.js", image: icons.express },
  { name: "MongoDB", image: icons.mongodb },
  { name: "GitHub", image: icons.github },
  { name: "Figma", image: icons.figma },
  { name: "Python", image: icons.python },
  { name: "Git", image: icons.git },
];

  const experiences: SectionDetail[] = [
    {
      position: (
        <>
          <b>ELO</b> | <b>FRONTEND ENGINEER</b> | 06/2025 - Present
        </>
      ),
      detail: [
        <>
          Develop and maintain <b>web applications</b> and user-facing
          software features
        </>,
        <>
          Contribute to <b>frontend implementation</b>, feature development,
          debugging, and application refinement
        </>,
        <>
          Work across application layers to integrate frontend functionality
          with <b>backend services</b>
        </>,
        <>
          Collaborate within software development workflows to deliver and
          improve <b>production features</b>
        </>,
      ],
    },

    {
      position: (
        <>
          <b>ARB INTERACTIVE</b> | <b>FRONTEND DEVELOPER</b> | 02/2025 - 05/2025
        </>
      ),
      detail: [
        <>
          Developed <b>responsive frontend interfaces</b> for web projects
        </>,
        <>
          Translated design concepts into clean, functional, and
          <b> user-friendly web experiences</b>
        </>,
        <>
          Built and refined interfaces using <b>HTML, CSS, JavaScript, and React</b>
        </>,
        <>
          Improved layouts and interactions across different screen sizes and
          devices
        </>,
        <>
          Worked with design and development requirements to turn concepts
          into working interfaces
        </>,
      ],
    },

    {
      position: (
        <>
          <b>AUGMENTA EDUCATION</b> | <b>SOFTWARE CONSULTANT</b> | 11/2024 - 01/2025
        </>
      ),
      detail: [
        <>
          Developed a <b>student-performance web application</b> using Node
          and MongoDB, contributing to backend development, frontend
          integration, and deployment
        </>,
        <>
          Built and supported <b>data-driven interfaces and workflows</b> for
          student records, attendance, payments, and reporting
        </>,
        <>
          Structured operational data and digital workflows for
          <b> education-related processes</b>
        </>,
        <>
          Optimized database operations, reducing execution time by
          approximately <b>60%</b>
        </>,
        <>
          Worked across frontend, backend, and database layers to deliver and
          maintain application functionality
        </>,
      ],
    },

    {
      position: (
        <>
          <b>AUGMENTA EDUCATION</b> | <b>LEAD INSTRUCTOR OF PYTHON</b> | 11/2024 -
          01/2025
        </>
      ),
      detail: [
        <>
          Taught <b>Python</b> through structured lessons, practical
          exercises, and programming projects
        </>,
        <>
          Developed tutorials and learning materials focused on
          <b> programming fundamentals and problem-solving</b>
        </>,
        <>
          Guided learners through hands-on programming tasks and technical
          concepts
        </>,
        <>
          Provided technical training and support to students and staff
        </>,
      ],
    },

    {
      position: (
        <>
          <b>ELO</b> | <b>FRONTEND ENGINEER</b> | 01/2022 - 10/2024
        </>
      ),
      detail: [
        <>
          Contributed to the development of <b>SaaS products</b>, working
          across UI/UX design and frontend implementation
        </>,
        <>
          Designed user interfaces and improved user experiences, translating
          product requirements into intuitive, user-friendly designs
        </>,
        <>
          Transitioned into a <b>frontend-focused role</b>, building and
          maintaining responsive web interfaces for multiple client projects
        </>,
        <>
          Collaborated with cross-functional teams to implement features,
          resolve bugs, and improve application performance
        </>,
        <>
          Worked across diverse client requirements, adapting designs and
          frontend solutions to different products and business needs
        </>,
        <>
          Assisted with development tasks, debugging, and application
          improvements
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
      icon: Github,
      detail: personal.github,
    },
  ];

  function handleContact(name: string): void {
    if (name.includes("github.com")) {
      window.open(
        "https://github.com/Ismail-Ai404",
        "_blank"
      );
    }
  }

  return (
    <div
      className={`${
        darkMode ? "bg-black" : "bg-white"
      } md:min-w-[800px] lg:w-[900px] md:max-w-[900px] w-[100svw] overflow-x-hidden absolute top-0 left-1/2 -translate-x-1/2`}
    >
      {/* Dark Mode Toggle */}
      <div
        className="target absolute right-5 top-4 z-20 cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
      >
        <p className="text-[30px] text-white">
          {darkMode ? <IoSunny /> : <IoMoon />}
        </p>
      </div>

      {/* HEADER */}
      <header
        className={`${
          darkMode ? "bg-gray-800" : "bg-gray-700"
        } duration-500 p-8 flex flex-col items-start gap-4 text-white`}
      >
        <div className="relative flex flex-col items-start">
          <h1 className="font-light mb-2 flex flex-wrap gap-x-4 gap-y-1">
            <span className="target md:text-[42px] text-[32px] relative duration-500 cursor-default">
              {personal.firstName}
            </span>

            <span className="target md:text-[42px] text-[32px] relative duration-500 cursor-default">
              {personal.lastName}
            </span>
          </h1>

          <p className="text-[18px] pl-1 cursor-default">
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
        <aside
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
              } font-medium text-xl mb-4`}
            >
              CONTACT
            </h2>

            <div className="space-y-4">
              {contact.map((item, index) => {
                const isClickable =
                  item.detail.includes("github.com");

                return (
                  <div
                    key={index}
                    onClick={() =>
                      isClickable && handleContact(item.detail)
                    }
                    className={`${
                      darkMode
                        ? "text-white hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    } flex items-start gap-3 duration-500 ${
                      isClickable ? "cursor-pointer" : ""
                    }`}
                  >
                    <item.icon className="w-5 h-5 mt-0.5 shrink-0" />

                    <span className="text-[13px] break-all leading-5">
                      {item.detail}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* EDUCATION */}
          <section className="mb-8">
            <h2
              className={`${
                darkMode ? "text-white" : "text-gray-700"
              } font-medium text-xl mb-4`}
            >
              EDUCATION
            </h2>

            <div className="space-y-2">
              <p
                className={`${
                  darkMode ? "text-white" : "text-gray-600"
                } text-[15px] leading-6`}
              >
                {personal.major}
              </p>

              <p
                className={`${
                  darkMode ? "text-white" : "text-gray-600"
                } text-[15px]`}
              >
                {personal.school}
              </p>
            </div>
          </section>

          {/* SKILLS */}
          <section className="mb-8">
            <h2
              className={`${
                darkMode ? "text-white" : "text-gray-700"
              } font-medium text-xl mb-4`}
            >
              SKILLS
            </h2>

            <div className="grid grid-cols-3 gap-3">
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
                        darkMode
                          ? "text-white"
                          : "text-gray-700"
                      } w-[30px] h-[30px] flex items-center justify-center font-bold text-[11px] text-center`}
                    >
                      {skill.name === "Adobe Photoshop"
                        ? "Ps"
                        : skill.name === "JavaScript"
                        ? "JS"
                        : skill.name === "Next.js"
                        ? "N"
                        : skill.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}

                  <p
                    className={`${
                      darkMode
                        ? "text-white"
                        : "text-gray-900"
                    } text-[10px] text-center mt-2 leading-tight`}
                  >
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* LANGUAGES */}
          <section>
            <h2
              className={`${
                darkMode ? "text-white" : "text-gray-700"
              } font-medium text-xl mb-4`}
            >
              LANGUAGES
            </h2>

            <div className="space-y-2">
              <p
                className={`${
                  darkMode ? "text-white" : "text-gray-600"
                } text-[15px]`}
              >
                <b>English</b> — Bilingual
              </p>

              <p
                className={`${
                  darkMode ? "text-white" : "text-gray-600"
                } text-[15px]`}
              >
                <b>Bengali</b> — Native
              </p>
            </div>
          </section>
        </aside>

        {/* RIGHT COLUMN */}
        <main
          className={`${
            darkMode ? "bg-[#1a1919fa]" : "bg-white"
          } w-full p-8`}
        >
          {/* SUMMARY */}
          <section className="mb-8">
            <div
              className={`${
                darkMode
                  ? "bg-gray-800"
                  : "bg-[#f8f3f1]"
              } px-4 py-2 mb-4`}
            >
              <h2
                className={`${
                  darkMode
                    ? "text-white"
                    : "text-gray-700"
                } font-medium text-xl`}
              >
                SUMMARY
              </h2>
            </div>

            <p
              className={`${
                darkMode
                  ? "text-white"
                  : "text-gray-600"
              } text-[14px] leading-6`}
            >
              Frontend Engineer with a background in Computer Science
              and experience building responsive web applications.
              Skilled in React, JavaScript, and modern web technologies,
              with a focus on creating practical, user-friendly digital
              experiences.
            </p>
          </section>

          {/* PROFESSIONAL EXPERIENCE */}
          <section>
            <div
              className={`${
                darkMode
                  ? "bg-gray-800"
                  : "bg-[#f8f3f1]"
              } px-4 py-2 mb-6`}
            >
              <h2
                className={`${
                  darkMode
                    ? "text-white"
                    : "text-gray-700"
                } font-medium text-xl`}
              >
                PROFESSIONAL EXPERIENCE
              </h2>
            </div>

            <div className="space-y-7">
              {experiences.map((experience, index) => (
                <div key={index}>
                  {/* Job title */}
                  <div
                    className={`${
                      darkMode
                        ? "text-white"
                        : "text-gray-700"
                    } text-[14px] font-medium mb-2 leading-5`}
                  >
                    {experience.position}
                  </div>

                  {/* No bullet points */}
                  <div className="space-y-2">
                    {experience.detail.map(
                      (detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className={`${
                            darkMode
                              ? "text-white"
                              : "text-gray-600"
                          } text-[14px] leading-6`}
                        >
                          {detail}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
