import React from "react";
import TextArea from "../widgets/text_area";

const AchievementsForm = ({ state, stateHandler, addField, deleteField }) => {
  const submitHandler = (e) => e.preventDefault();

  return (
    <React.Fragment>
      <form onSubmit={submitHandler} className="form mx-auto p-6">
        {state.map((achievement, index) => (
          <FormGroup
            data={achievement}
            stateHandler={stateHandler}
            deleteField={deleteField}
            id={index}
            key={index}
          />
        ))}
      </form>
      <button
        onClick={addField}
        className="bg-blue-600 text-white font-medium px-6 py-2 text-md rounded-md shadow-lg mt-4 mb-10 block mx-auto active:shadow-none"
      >
        Add Achievement
      </button>
    </React.Fragment>
  );
};

const FormGroup = ({ data, id, stateHandler, deleteField }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg my-6">
      <button
        type="button"
        className="text-white font-medium text-md bg-red-600 w-full md:w-1/2 block mx-auto py-3 rounded-md shadow-lg active:shadow-none mt-4 my-10"
        onClick={() => deleteField(id)}
      >
        Delete Field
      </button>
      <TextArea
        required
        name="achievement"
        value={data["achievement"]}
        label="Achievement"
        handleChange={(e) => stateHandler(e, id)}
      />
    </div>
  );
};

export default AchievementsForm;
