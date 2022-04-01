import React from "react";
import {
  AchievementsIcon,
  CertificationIcon,
  CoursesIcon,
  ContactIcon,
  EducationIcon,
  ExperienceIcon,
  LanguagesIcon,
  PersonalIcon,
  ProjectsIcon,
  SkillsIcon,
  SoftwareIcon,
} from "./icons/icons";

const Nav = ({ step, setStep }) => {
  return (
    <header className="bg-blue-700 font-body grid w-full md:w-min md:h-screen overflow-y-auto grid-rows-nav-layout md:px-4">
      <h1 className="text-xl font-medium p-6 pb-0 text-white">Resumake</h1>
      <nav className="w-full p-6 flex justify-between items-center md:flex-col">
        <div
          className="flex w-full items-center justify-start cursor-pointer md:py-2 "
          onClick={() => setStep(1)}
        >
          <PersonalIcon
            color={step == 1 ? "#ffffff" : "#6E9CFF"}
            height={24}
            width={24}
          />
          <p
            className={`hidden md:inline-block pl-3 text-sm ${
              step == 1 ? "text-white" : "text-blue-400"
            }`}
          >
            Personal
          </p>
        </div>
        <div
          className="flex w-full items-center justify-start cursor-pointer md:py-2 "
          onClick={() => setStep(2)}
        >
          <ContactIcon
            color={step == 2 ? "#ffffff" : "#6E9CFF"}
            height={24}
            width={24}
          />
          <p
            className={`hidden md:inline-block pl-3 text-sm ${
              step == 2 ? "text-white" : "text-blue-400"
            }`}
          >
            Contact
          </p>
        </div>
        <div
          className="flex w-full items-center justify-start cursor-pointer md:py-2 "
          onClick={() => setStep(3)}
        >
          <EducationIcon
            color={step == 3 ? "#ffffff" : "#6E9CFF"}
            height={24}
            width={24}
          />
          <p
            className={`hidden md:inline-block pl-3 text-sm ${
              step == 3 ? "text-white" : "text-blue-400"
            }`}
          >
            Education
          </p>
        </div>
        <div
          className="flex w-full items-center justify-start cursor-pointer md:py-2 "
          onClick={() => setStep(4)}
        >
          <ExperienceIcon
            color={step == 4 ? "#ffffff" : "#6E9CFF"}
            height={24}
            width={24}
          />
          <p
            className={`hidden md:inline-block pl-3 text-sm ${
              step == 4 ? "text-white" : "text-blue-400"
            }`}
          >
            Education
          </p>
        </div>
        <div
          className="flex w-full items-center justify-start cursor-pointer md:py-2 "
          onClick={() => setStep(5)}
        >
          <AchievementsIcon
            color={step == 5 ? "#ffffff" : "#6E9CFF"}
            height={24}
            width={24}
          />
          <p
            className={`hidden md:inline-block pl-3 text-sm ${
              step == 5 ? "text-white" : "text-blue-400"
            }`}
          >
            Achievements
          </p>
        </div>
        <div
          className="flex w-full items-center justify-start cursor-pointer md:py-2 "
          onClick={() => setStep(6)}
        >
          <CertificationIcon
            color={step == 6 ? "#ffffff" : "#6E9CFF"}
            height={24}
            width={24}
          />
          <p
            className={`hidden md:inline-block pl-3 text-sm ${
              step == 6 ? "text-white" : "text-blue-400"
            }`}
          >
            Certification
          </p>
        </div>
        <div
          className="flex w-full items-center justify-start cursor-pointer md:py-2 "
          onClick={() => setStep(7)}
        >
          <CoursesIcon
            color={step == 7 ? "#ffffff" : "#6E9CFF"}
            height={24}
            width={24}
          />
          <p
            className={`hidden md:inline-block pl-3 text-sm ${
              step == 7 ? "text-white" : "text-blue-400"
            }`}
          >
            Courses
          </p>
        </div>
        <div
          className="flex w-full items-center justify-start cursor-pointer md:py-2 "
          onClick={() => setStep(8)}
        >
          <ProjectsIcon
            color={step == 8 ? "#ffffff" : "#6E9CFF"}
            height={24}
            width={24}
          />
          <p
            className={`hidden md:inline-block pl-3 text-sm ${
              step == 8 ? "text-white" : "text-blue-400"
            }`}
          >
            Projects
          </p>
        </div>
        <div
          className="flex w-full items-center justify-start cursor-pointer md:py-2 "
          onClick={() => setStep(9)}
        >
          <SkillsIcon
            color={step == 9 ? "#ffffff" : "#6E9CFF"}
            height={24}
            width={24}
          />
          <p
            className={`hidden md:inline-block pl-3 text-sm ${
              step == 9 ? "text-white" : "text-blue-400"
            }`}
          >
            Skills
          </p>
        </div>
        <div
          className="flex w-full items-center justify-start cursor-pointer md:py-2 "
          onClick={() => setStep(10)}
        >
          <SoftwareIcon
            color={step == 10 ? "#ffffff" : "#6E9CFF"}
            height={24}
            width={24}
          />
          <p
            className={`hidden md:inline-block pl-3 text-sm ${
              step == 10 ? "text-white" : "text-blue-400"
            }`}
          >
            Software
          </p>
        </div>
        <div
          className="flex w-full items-center justify-start cursor-pointer md:py-2 "
          onClick={() => setStep(11)}
        >
          <LanguagesIcon
            color={step == 11 ? "#ffffff" : "#6E9CFF"}
            height={24}
            width={24}
          />
          <p
            className={`hidden md:inline-block pl-3 text-sm ${
              step == 11 ? "text-white" : "text-blue-400"
            }`}
          >
            Languages
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
