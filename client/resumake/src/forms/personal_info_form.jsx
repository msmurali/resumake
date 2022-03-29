import React from "react";
import TextArea from "../widgets/text_area";
import TextInput from "../widgets/text_input";

const PersonalInfoForm = ({ state, stateHandler }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form mx-auto p-6" onSubmit={submitHandler}>
      <TextInput
        name="first-name"
        label="Firstname"
        required
        placeholder="Mark"
        handleChange={stateHandler}
        value={state["first-name"]}
      />
      <TextInput
        name="last-name"
        label="Lastname"
        required
        placeholder="Twain"
        handleChange={stateHandler}
        value={state["last-name"]}
      />
      <TextInput
        name="full-name"
        label="Fullname"
        required
        placeholder="Mark Twain"
        handleChange={stateHandler}
        value={state["full-name"]}
      />
      <TextArea
        name="description"
        label="About yourself"
        required
        handleChange={stateHandler}
        value={state["description"]}
      />
      <TextArea
        name="address"
        label="Postal address"
        required
        handleChange={stateHandler}
        value={state["address"]}
      />
      <TextInput
        name="website"
        label="Website"
        placeholder="https://www.mark-twain.com"
        handleChange={stateHandler}
        type="url"
        value={state["website"]}
      />
    </form>
  );
};

export default PersonalInfoForm;
