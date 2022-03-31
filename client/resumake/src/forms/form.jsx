import React from "react";
import { input } from "../constants/constants";
import TextInput from "../widgets/text_input";

const Form = ({ state, stateHandler, addGroup, removeGroup }) => {
  const submitHandler = (e) => e.preventDefault();

  return (
    <form className="form mx-auto p-6" onSubmit={submitHandler}>
      {typeof state === Object
        ? Object.keys(state).map((elem) => <Input />)
        : ""}
    </form>
  );
};

export default Form;
