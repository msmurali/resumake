import React from "react";
import TextArea from "../widgets/text_area";
import TextInput from "../widgets/text_input";

const WorkExperienceForm = ({ state, stateHandler }) => {
  return (
    <form className="form mx-auto p-6">
      {state.map((exp, index) => {
        return <FormGroup data={exp} id={index} changeHandler={stateHandler} />;
      })}
    </form>
  );
};

const FormGroup = ({ data, id, changeHandler }) => {
  return (
    <React.Fragment>
      <TextInput
        name="designation"
        label="Designation"
        required
        handleChange={changeHandler}
        value={data["designation"]}
      />
      <TextInput
        name="organization"
        label="Organization"
        required
        handleChange={changeHandler}
        value={data["organization"]}
      />
      <TextInput
        name="location"
        label="Location"
        required
        handleChange={changeHandler}
        value={data["location"]}
      />
      <TextInput
        name="start-year"
        label="Start year"
        required
        handleChange={changeHandler}
        value={data["start-year"]}
      />
      <TextInput
        name="end-year"
        label="end year"
        required
        handleChange={changeHandler}
        value={data["end-year"]}
      />
      <TextArea
        name="description"
        label="Description"
        handleChange={changeHandler}
        value={data["description"]}
      />
    </React.Fragment>
  );
};

export default WorkExperienceForm;
