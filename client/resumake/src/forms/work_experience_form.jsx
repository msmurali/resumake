import React from "react";
import TextArea from "../widgets/text_area";
import TextInput from "../widgets/text_input";

const WorkExperienceForm = ({ state, stateHandler, addGroup, deleteGroup }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <form className="form mx-auto p-6" onSubmit={submitHandler}>
        {state.map((exp, index) => {
          return (
            <FormGroup
              key={index}
              data={exp}
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
        Add Experience
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
          name="designation"
          label="Designation"
          required
          handleChange={(e) => changeHandler(e, id)}
          value={data["designation"]}
        />
        <TextInput
          name="organization"
          label="Organization"
          required
          handleChange={(e) => changeHandler(e, id)}
          value={data["organization"]}
        />
        <TextInput
          name="location"
          label="Location"
          required
          handleChange={(e) => changeHandler(e, id)}
          value={data["location"]}
        />
        <TextInput
          name="start-year"
          label="Start year"
          required
          handleChange={(e) => changeHandler(e, id)}
          value={data["start-year"]}
        />
        <TextInput
          name="end-year"
          label="End year"
          required
          handleChange={(e) => changeHandler(e, id)}
          value={data["end-year"]}
        />
        <TextArea
          name="description"
          label="Description"
          handleChange={(e) => changeHandler(e, id)}
          value={data["description"]}
        />
      </div>
    </React.Fragment>
  );
};

export default WorkExperienceForm;
