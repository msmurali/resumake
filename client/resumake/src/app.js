import React from "react";
import "./app.css";
import PersonalInfoForm from "./forms/personal_info_form";

function App() {
  const [personalInfo, setPersonalInfo] = React.useState({
    "first-name": "",
    "last-name": "",
    "full-name": "",
    description: "",
    address: "",
    website: "",
  });

  const personalInfoHandler = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(() => ({
      ...personalInfo,
      [name]: value,
    }));
  };

  return (
    <div className="app">
      <PersonalInfoForm
        state={personalInfo}
        stateHandler={personalInfoHandler}
      />
    </div>
  );
}

export default App;
