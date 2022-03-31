import React from "react";
import "./app.css";
import AchievementsForm from "./forms/achievements_form";
import ContactForm from "./forms/contact_form";
import EducationForm from "./forms/education_form";
import PersonalInfoForm from "./forms/personal_info_form";
import SkillsForm from "./forms/skills_form";
import SoftwareSkillsForm from "./forms/software_skills_form";
import WorkExperienceForm from "./forms/work_experience_form";
import RangeInput from "./widgets/range_input";

function App() {
  const [personalInfo, setPersonalInfo] = React.useState({
    "first-name": "",
    "last-name": "",
    "full-name": "",
    description: "",
    address: "",
    website: "",
  });
  const [contact, setContact] = React.useState({
    mobile: "",
    telephone: "",
    "linked-in": "",
    facebook: "",
    email: "",
  });
  const [experience, setExperience] = React.useState([
    {
      designation: "",
      organization: "",
      location: "",
      "start-year": "",
      "end-year": "",
      description: "",
    },
  ]);
  const [education, setEducation] = React.useState([
    {
      course: "",
      instituition: "",
      location: "",
      grade: "",
    },
  ]);
  const [achievements, setAchievements] = React.useState([
    {
      achievement: "",
    },
  ]);
  const [skills, setSkills] = React.useState([
    {
      skill: "",
      proficiency: "1",
    },
  ]);
  const [softwareSkills, setSoftwareSkills] = React.useState([
    {
      skill: "",
      proficiency: "1",
    },
  ]);
  const [languages, setLanguages] = React.useState([
    {
      language: "",
    },
  ]);
  const [projects, setProjects] = React.useState([
    {
      title: "",
      description: "",
      link: "",
    },
  ]);
  const [courses, setCourses] = React.useState([
    {
      course: "",
    },
  ]);
  const [certifications, setCertifications] = React.useState([
    {
      certification: "",
    },
  ]);

  const addEmptyStateObject = (state) => {
    switch (state) {
      case "experience":
        setExperience(() => [...experience, getEmptyStateObject(state)]);
        break;
      case "education":
        setEducation(() => [...education, getEmptyStateObject(state)]);
        break;
      case "achievements":
        setAchievements(() => [...achievements, getEmptyStateObject(state)]);
        break;
      case "skills":
        setSkills(() => [...skills, getEmptyStateObject(state)]);
        break;
      case "software":
        setSkills(() => [...softwareSkills, getEmptyStateObject(state)]);
        break;
      case "languages":
        setLanguages(() => [...languages, getEmptyStateObject(state)]);
        break;
      case "courses":
        setCourses(() => [...courses, getEmptyStateObject(state)]);
        break;
      case "certification":
        setCertifications(() => [
          ...certifications,
          getEmptyStateObject(state),
        ]);
        break;
      case "projects":
        setProjects(() => [...projects, getEmptyStateObject(state)]);
        break;
      default:
        //no nothing
        break;
    }
  };
  const removeStateObject = (state, id) => {
    switch (state) {
      case "experience":
        break;
      case "education":
        setEducation(() => [
          ...education.slice(0, id),
          ...education.slice(id + 1),
        ]);
        break;
      case "achievements":
        setAchievements(() => [
          ...achievements.slice(0, id),
          ...achievements.slice(id + 1),
        ]);
        break;
      case "skills":
        setSkills(() => [...skills.slice(0, id), ...skills.slice(id + 1)]);
        break;
      case "software":
        setSoftwareSkills(() => [
          ...softwareSkills.slice(0, id),
          ...softwareSkills.slice(id + 1),
        ]);
        break;
      case "languages":
        setLanguages(() => [
          ...languages.slice(0, id),
          ...languages.slice(id + 1),
        ]);
        break;
      case "courses":
        setCourses(() => [...courses.slice(0, id), ...courses.slice(id + 1)]);
        break;
      case "certification":
        setCertifications(() => [
          ...certifications.slice(0, id),
          ...certifications.slice(id + 1),
        ]);
        break;
      case "projects":
        setProjects(() => [
          ...projects.slice(0, id),
          ...projects.slice(id + 1),
        ]);
        break;
      default:
        //no nothing
        break;
    }
  };
  const getEmptyStateObject = (state) => {
    switch (state) {
      case "personal":
        return {
          "first-name": "",
          "last-name": "",
          "full-name": "",
          description: "",
          address: "",
          website: "",
        };
      case "contact":
        return {
          mobile: "",
          telephone: "",
          "linked-in": "",
          facebook: "",
          email: "",
        };
      case "experience":
        return {
          designation: "",
          organization: "",
          location: "",
          "start-year": "",
          "end-year": "",
          description: "",
        };
      case "education":
        return {
          course: "",
          instituition: "",
          location: "",
          grade: "",
        };
      case "achievements":
        return {
          achievement: "",
        };
      case "skill":
        return {
          skill: "",
          proficiency: "1",
        };
      case "software":
        return {
          skill: "",
          proficiency: "1",
        };
      case "languages":
        return {
          language: "",
        };
      case "courses":
        return {
          course: "",
        };
      case "certifications":
        return {
          certification: "",
        };
      case "projects":
        return {
          title: "",
          description: "",
          link: "",
        };
      default:
        //do nothing
        break;
    }
  };
  const stateHandler = (e, state, { id }) => {
    const { name, value } = e.target;

    switch (state) {
      case "personal":
        setPersonalInfo({
          ...personalInfo,
          [name]: value,
        });

        break;

      case "contact":
        setContact({
          ...contact,
          [name]: value,
        });

        break;

      case "experience":
        setExperience(() => {
          const newState = [...experience];
          newState[id] = { ...newState[id], [name]: value };
          return newState;
        });

        break;

      case "education":
        setEducation(() => {
          const newState = [...education];
          newState[id] = { ...newState[id], [name]: value };
          return newState;
        });

        break;

      case "achievements":
        setAchievements(() => {
          const newState = [...achievements];
          newState[id] = { ...newState[id], [name]: value };
          return newState;
        });

        break;

      case "skill":
        setSkills(() => {
          const newState = [...skills];
          newState[id] = { ...newState[id], [name]: value };
          return newState;
        });

        break;

      case "software":
        setSoftwareSkills(() => {
          const newState = [...softwareSkills];
          newState[id] = { ...newState[id], [name]: value };
          return newState;
        });

        break;

      case "languages":
        setLanguages(() => {
          const newState = [...languages];
          newState[id] = { ...newState[id], [name]: value };
          return newState;
        });

        break;

      case "courses":
        setCourses(() => {
          const newState = [...courses];
          newState[id] = { ...newState[id], [name]: value };
          return newState;
        });

        break;

      case "certifications":
        setCertifications(() => {
          const newState = [...certifications];
          newState[id] = { ...newState[id], [name]: value };
          return newState;
        });

        break;

      default:
        //do nothing
        break;
    }
  };
  const personalInfoHandler = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(() => ({
      ...personalInfo,
      [name]: value,
    }));
  };
  const contactInfoHandler = (e) => {
    const { name, value } = e.target;
    setContact(() => ({
      ...contact,
      [name]: value,
    }));
  };
  const experienceInfoHandler = (e, id) => {
    const { name, value } = e.target;
    setExperience(() => {
      const newState = [...experience];
      newState[id] = { ...newState[id], [name]: value };
      return newState;
    });
  };
  const educationInfoHandler = (e, id) => {
    const { name, value } = e.target;
    setEducation(() => {
      const newState = [...education];
      newState[id] = { ...newState[id], [name]: value };
      return newState;
    });
  };
  const achievementsInfoHandler = (e, id) => {
    const { name, value } = e.target;
    setAchievements(() => {
      const newState = [...achievements];
      newState[id] = { ...newState[id], [name]: value };
      return newState;
    });
  };
  const skillInfoHandler = (e, id) => {
    const { name, value } = e.target;
    setSkills(() => {
      const newState = [...skills];
      newState[id] = { ...newState[id], [name]: value };
      return newState;
    });
  };
  const softwareSkillsInfoHanlder = (e, id) => {
    const { name, value } = e.target;
    setSoftwareSkills(() => {
      const newState = [...softwareSkills];
      newState[id] = { ...newState[id], [name]: value };
      return newState;
    });
  };
  const addEducationGroup = () => {
    setEducation(() => {
      const newState = [
        ...education,
        {
          course: "",
          instituition: "",
          location: "",
          grade: "",
        },
      ];
      return newState;
    });
  };
  const addExperienceGroup = () => {
    setExperience(() => {
      const newState = [
        ...experience,
        {
          designation: "",
          organization: "",
          location: "",
          "start-year": "",
          "end-year": "",
          description: "",
        },
      ];
      return newState;
    });
  };
  const addAchievementField = () => {
    setAchievements(() => [...achievements, { achievement: "" }]);
  };
  const addSkillField = () => {
    setSkills(() => [
      ...skills,
      {
        skill: "",
        proficiency: "1",
      },
    ]);
  };
  const addSoftwareSkillField = () => {
    setSoftwareSkills(() => [
      ...softwareSkills,
      {
        skill: "",
        proficiency: "1",
      },
    ]);
  };
  const deleteEducationGroup = (id) => {
    setEducation(() => [...education.slice(0, id), ...education.slice(id + 1)]);
  };
  const deleteExperienceGroup = (id) => {
    setExperience(() => [
      ...experience.slice(0, id),
      ...experience.slice(id + 1),
    ]);
  };
  const deleteAchievementField = (id) => {
    setAchievements(() => [
      ...achievements.slice(0, id),
      ...achievements.slice(id + 1),
    ]);
  };
  const deleteSkillField = (id) => {
    setSkills(() => [...skills.slice(0, id), ...skills.slice(id + 1)]);
  };
  const deleteSoftwareSkillField = (id) => {
    setSoftwareSkills(() => [
      ...softwareSkills.slice(0, id),
      ...softwareSkills.slice(id + 1),
    ]);
  };

  return (
    <div className="app">
      {/* <PersonalInfoForm
        state={personalInfo}
        stateHandler={personalInfoHandler}
      />
      <ContactForm state={contact} stateHandler={contactInfoHandler} />
      <WorkExperienceForm
        state={experience}
        stateHandler={experienceInfoHandler}
        addGroup={addExperienceGroup}
        deleteGroup={deleteExperienceGroup}
      />
      <EducationForm
        state={education}
        stateHandler={educationInfoHandler}
        addGroup={addEducationGroup}
        deleteGroup={deleteEducationGroup}
      />
      <AchievementsForm
        state={achievements}
        stateHandler={achievementsInfoHandler}
        addField={addAchievementField}
        deleteField={deleteAchievementField}
      /> 
      <SkillsForm
        addField={addSkillField}
        deleteField={deleteSkillField}
        stateHandler={skillInfoHandler}
        state={skills}
      /> */}
    </div>
  );
}

export default App;
