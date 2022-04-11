import React from "react";
import "./app.css";
import HomePage from "./pages/home_page";
import PreviewPage from "./pages/preview_page";
import Form from "./widgets/form";
import Nav from "./widgets/nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DownloadPage from "./pages/download_page";

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

      case "projects":
        setProjects(() => {
          const newState = [...projects];
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
  const [downloadStatus, setDownloadStatus] = React.useState("idle");
  const [step, setStep] = React.useState(1);
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

  const incrementStep = () => {
    if (step < 11) setStep(() => step + 1);
  };

  const decrementStep = () => {
    if (step > 1) setStep(() => step - 1);
  };

  const getFormComponent = () => {
    switch (step) {
      case 1:
        return (
          <Form
            step={step}
            state={personal}
            title={"personal"}
            stateHandler={stateHandler}
            incrementStep={incrementStep}
            decrementStep={decrementStep}
          />
        );
      case 2:
        return (
          <Form
            step={step}
            state={contact}
            title={"contact"}
            stateHandler={stateHandler}
            incrementStep={incrementStep}
            decrementStep={decrementStep}
          />
        );
      case 3:
        return (
          <Form
            step={step}
            state={education}
            title={"education"}
            stateHandler={stateHandler}
            addGroup={addEmptyStateObject}
            removeGroup={removeStateObject}
            incrementStep={incrementStep}
            decrementStep={decrementStep}
          />
        );
      case 4:
        return (
          <Form
            step={step}
            state={experience}
            title={"experience"}
            stateHandler={stateHandler}
            addGroup={addEmptyStateObject}
            removeGroup={removeStateObject}
            incrementStep={incrementStep}
            decrementStep={decrementStep}
          />
        );
      case 5:
        return (
          <Form
            step={step}
            state={achievements}
            title={"achievements"}
            stateHandler={stateHandler}
            addGroup={addEmptyStateObject}
            removeGroup={removeStateObject}
            incrementStep={incrementStep}
            decrementStep={decrementStep}
          />
        );
      case 6:
        return (
          <Form
            step={step}
            state={certification}
            title={"certification"}
            stateHandler={stateHandler}
            addGroup={addEmptyStateObject}
            removeGroup={removeStateObject}
            incrementStep={incrementStep}
            decrementStep={decrementStep}
          />
        );

      case 7:
        return (
          <Form
            step={step}
            state={courses}
            title={"courses"}
            stateHandler={stateHandler}
            addGroup={addEmptyStateObject}
            removeGroup={removeStateObject}
            incrementStep={incrementStep}
            decrementStep={decrementStep}
          />
        );

      case 8:
        return (
          <Form
            step={step}
            state={projects}
            title={"projects"}
            stateHandler={stateHandler}
            addGroup={addEmptyStateObject}
            removeGroup={removeStateObject}
            incrementStep={incrementStep}
            decrementStep={decrementStep}
          />
        );
      case 9:
        return (
          <Form
            step={step}
            state={skills}
            title={"skills"}
            stateHandler={stateHandler}
            addGroup={addEmptyStateObject}
            removeGroup={removeStateObject}
            incrementStep={incrementStep}
            decrementStep={decrementStep}
          />
        );
      case 10:
        return (
          <Form
            step={step}
            state={softwareSkills}
            title={"software"}
            stateHandler={stateHandler}
            addGroup={addEmptyStateObject}
            removeGroup={removeStateObject}
            incrementStep={incrementStep}
            decrementStep={decrementStep}
          />
        );
      case 11:
        return (
          <Form
            step={step}
            state={languages}
            title={"languages"}
            stateHandler={stateHandler}
            addGroup={addEmptyStateObject}
            removeGroup={removeStateObject}
            incrementStep={incrementStep}
            decrementStep={decrementStep}
          />
        );
      default:
        return (
          <Form
            step={step}
            state={personal}
            title={"personal"}
            stateHandler={stateHandler}
            incrementStep={incrementStep}
            decrementStep={decrementStep}
          />
        );
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route
          exact
          path="/create"
          element={
            <div className="app md:grid grid-cols-page-layout grid-rows-1 md:max-h-screen">
              <Nav step={step} setStep={setStep} />
              {getFormComponent()}
            </div>
          }
        />
        <Route
          exact
          path="/preview"
          element={
            <PreviewPage
              formData={{
                personal: personal,
                contact: contact,
                education: education,
                experience: experience,
                achievements: achievements,
                certification: certification,
                courses: courses,
                projects: projects,
                skills: skills,
                software: softwareSkills,
                languages: languages,
              }}
              setStep={setStep}
              setDownloadStatus={setDownloadStatus}
            />
          }
        />
        <Route
          path="/download"
          exact
          element={<DownloadPage downloadStatus={downloadStatus} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
