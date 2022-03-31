import React from "react";
import TextInput from "./text_input";
import TextArea from "./text_area";
import RangeInput from "./range_input";

const Input = ({ inputType }) => {
  switch (inputType) {
    case "text":
      return <TextInput />;
  }
};
