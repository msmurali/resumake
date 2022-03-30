import React from "react";
import RangeInput from "../widgets/range_input";
import TextInput from "../widgets/text_input";

const SkillsForm = ({ state, stateHandler, addField, deleteField }) => {
  return (
    <form className="form mx-auto p-6">
      {state.map((skill, index) => (
        <FormGroup
          key={index}
          data={skill}
          deleteField={deleteField}
          changeHandler={stateHandler}
          id={index}
        />
      ))}
      <button
        onClick={addField}
        type="button"
        className="bg-blue-600 text-white font-medium px-6 py-2 text-md rounded-md shadow-lg mt-4 mb-10 block mx-auto active:shadow-none"
      >
        Add Skill
      </button>
    </form>
  );
};

const FormGroup = ({ data, changeHandler, deleteField, id }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg my-6">
      <button
        type="button"
        className="text-white font-medium text-md bg-red-600 w-full md:w-1/2 block mx-auto py-3 rounded-md shadow-lg active:shadow-none mt-4 my-10"
        onClick={() => deleteField(id)}
      >
        Delete Field
      </button>
      <TextInput
        name="skill"
        label="Skill"
        required
        handleChange={(e) => changeHandler(e, id)}
        value={data["skill"]}
      />
      <RangeInput
        min={1}
        max={5}
        step={1}
        name="proficiency"
        label="Proficiency"
        value={+data["proficiency"]}
        handleChange={(e) => changeHandler(e, id)}
        required={true}
      />
    </div>
  );
};

export default SkillsForm;
