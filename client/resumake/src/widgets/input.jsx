import React from "react";
import TextInput from "./text_input";
import TextArea from "./text_area";
import RangeInput from "./range_input";
import { input } from "../constants/constants";

const Input = ({ name, value, changeHandler, validated, readOnly }) => {
  switch (input[name].inputtype) {
    case "text":
      return (
        <TextInput
          name={name}
          value={value}
          handleChange={changeHandler}
          label={input[name].label}
          placeholder={input[name].placeholder}
          required={input[name].required}
          validated={validated}
          pattern={input[name].pattern.source}
          title={input[name].title}
          readOnly={readOnly || false}
        />
      );
    case "text-area":
      return (
        <TextArea
          name={name}
          value={value}
          handleChange={changeHandler}
          label={input[name].label}
          placeholder={input[name].placeholder}
          required={input[name].required}
          validated={validated}
          pattern={input[name].pattern.source}
          title={input[name].title}
          readOnly={readOnly || false}
        />
      );
    case "range":
      return (
        <RangeInput
          name={name}
          value={value}
          handleChange={changeHandler}
          label={input[name].label}
          required={input[name].required}
          max={5}
          min={1}
          step={1}
          readOnly={readOnly || false}
        />
      );
    default:
      return (
        <TextInput
          name={name}
          value={value}
          handleChange={changeHandler}
          label={input[name].label}
          placeholder={input[name].placeholder}
          required={input[name].required}
          pattern={input[name].pattern.source}
          readOnly={readOnly || false}
        />
      );
  }
};

export default Input;
