import React from "react";
import "./app.css";
import ContactForm from "./forms/contact_form";
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

  return (
    <div className="app">
      <PersonalInfoForm
        state={personalInfo}
        stateHandler={personalInfoHandler}
      />
      <ContactForm state={contact} stateHandler={contactInfoHandler} />
      <WorkExperienceForm state={experience} />
    </div>
  );
}

export default App;
