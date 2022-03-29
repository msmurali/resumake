import React from "react";
import TextInput from "../widgets/text_input";

const EducationForm = ({ state, stateHandler, addGroup, deleteGroup }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <form className="form mx-auto p-6" onSubmit={submitHandler}>
        {state.map((edu, index) => {
          return (
            <FormGroup
              key={index}
              data={edu}
              id={index}
              changeHandler={stateHandler}
              deleteGroup={deleteGroup}
            />
          );
        })}
      </form>
      <button
        onClick={addGroup}
        className="bg-blue-600 text-white font-medium px-6 py-2 text-md rounded-md shadow-lg mt-4 mb-10 block mx-auto active:shadow-none"
      >
        Add Education
      </button>
    </React.Fragment>
  );
};

const FormGroup = ({ data, id, changeHandler, deleteGroup }) => {
  return (
    <React.Fragment>
      <div className="bg-gray-50 p-6 rounded-lg my-6">
        <button
          type="button"
          className="text-white font-medium text-md bg-red-600 w-full md:w-1/2 block mx-auto py-3 rounded-md shadow-lg active:shadow-none mt-4 my-10"
          onClick={() => deleteGroup(id)}
        >
          Delete Group
        </button>
        <TextInput
          name="course"
          label="Course"
          required
          handleChange={(e) => changeHandler(e, id)}
          value={data["course"]}
        />
        <TextInput
          name="instituition"
          label="Instituition"
          required
          handleChange={(e) => changeHandler(e, id)}
          value={data["instituition"]}
        />
        <TextInput
          name="location"
          label="Location"
          required
          handleChange={(e) => changeHandler(e, id)}
          value={data["location"]}
        />
        <TextInput
          name="grade"
          label="Grade"
          required
          handleChange={(e) => changeHandler(e, id)}
          value={data["grade"]}
        />
      </div>
    </React.Fragment>
  );
};

export default EducationForm;
