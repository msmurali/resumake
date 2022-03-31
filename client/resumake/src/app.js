import React from "react";
import "./app.css";
import Form from "./forms/form";

function App() {
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
        setSoftwareSkills(() => [
          ...softwareSkills,
          getEmptyStateObject(state),
        ]);
        break;
      case "languages":
        setLanguages(() => [...languages, getEmptyStateObject(state)]);
        break;
      case "courses":
        setCourses(() => [...courses, getEmptyStateObject(state)]);
        break;
      case "certification":
        setCertification(() => [...certification, getEmptyStateObject(state)]);
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
        setExperience(() => [
          ...experience.slice(0, id),
          ...experience.slice(id + 1),
        ]);
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
        setCertification(() => [
          ...certification.slice(0, id),
          ...certification.slice(id + 1),
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
      case "skills":
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
      case "certification":
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
  const stateHandler = (e, state, id) => {
    const { name, value } = e.target;

    switch (state) {
      case "personal":
        setPersonal({
          ...personal,
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

      case "skills":
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

      case "certification":
        setCertification(() => {
          const newState = [...certification];
          newState[id] = { ...newState[id], [name]: value };
          return newState;
        });

        break;

      default:
        //do nothing
        break;
    }
  };
  const [personal, setPersonal] = React.useState(() =>
    getEmptyStateObject("personal")
  );
  const [contact, setContact] = React.useState(() =>
    getEmptyStateObject("contact")
  );
  const [experience, setExperience] = React.useState(() => [
    getEmptyStateObject("experience"),
  ]);
  const [education, setEducation] = React.useState(() => [
    getEmptyStateObject("education"),
  ]);
  const [achievements, setAchievements] = React.useState(() => [
    getEmptyStateObject("achievements"),
  ]);
  const [skills, setSkills] = React.useState(() => [
    getEmptyStateObject("skills"),
  ]);
  const [softwareSkills, setSoftwareSkills] = React.useState(() => [
    getEmptyStateObject("software"),
  ]);
  const [languages, setLanguages] = React.useState(() => [
    getEmptyStateObject("languages"),
  ]);
  const [projects, setProjects] = React.useState(() => [
    getEmptyStateObject("projects"),
  ]);
  const [courses, setCourses] = React.useState(() => [
    getEmptyStateObject("courses"),
  ]);
  const [certification, setCertification] = React.useState(() => [
    getEmptyStateObject("certification"),
  ]);

  return (
    <div className="app">
      <Form state={personal} title={"personal"} stateHandler={stateHandler} />
      <Form state={contact} title={"contact"} stateHandler={stateHandler} />
      <Form
        state={experience}
        title={"experience"}
        stateHandler={stateHandler}
        addGroup={addEmptyStateObject}
        removeGroup={removeStateObject}
      />
      <Form
        state={education}
        title={"education"}
        stateHandler={stateHandler}
        addGroup={addEmptyStateObject}
        removeGroup={removeStateObject}
      />
      <Form
        state={achievements}
        title={"achievements"}
        stateHandler={stateHandler}
        addGroup={addEmptyStateObject}
        removeGroup={removeStateObject}
      />
      <Form
        state={skills}
        title={"skills"}
        stateHandler={stateHandler}
        addGroup={addEmptyStateObject}
        removeGroup={removeStateObject}
      />
      <Form
        state={softwareSkills}
        title={"software"}
        stateHandler={stateHandler}
        addGroup={addEmptyStateObject}
        removeGroup={removeStateObject}
      />
      <Form
        state={languages}
        title={"languages"}
        stateHandler={stateHandler}
        addGroup={addEmptyStateObject}
        removeGroup={removeStateObject}
      />
      <Form
        state={projects}
        title={"projects"}
        stateHandler={stateHandler}
        addGroup={addEmptyStateObject}
        removeGroup={removeStateObject}
      />
      <Form
        state={courses}
        title={"courses"}
        stateHandler={stateHandler}
        addGroup={addEmptyStateObject}
        removeGroup={removeStateObject}
      />
      <Form
        state={certification}
        title={"certification"}
        stateHandler={stateHandler}
        addGroup={addEmptyStateObject}
        removeGroup={removeStateObject}
      />
    </div>
  );
}

export default App;
