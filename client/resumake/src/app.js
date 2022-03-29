import React from "react";
import "./app.css";
import ContactForm from "./forms/contact_form";
import EducationForm from "./forms/education_form";
import PersonalInfoForm from "./forms/personal_info_form";
import WorkExperienceForm from "./forms/work_experience_form";

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

  const deleteEducationGroup = (id) => {
    setEducation(() => [...education.slice(0, id), ...education.slice(id + 1)]);
  };

  const deleteExperienceGroup = (id) => {
    setExperience(() => [
      ...experience.slice(0, id),
      ...experience.slice(id + 1),
    ]);
  };

  return (
    <div className="app">
      <PersonalInfoForm
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
    </div>
  );
}

export default App;
