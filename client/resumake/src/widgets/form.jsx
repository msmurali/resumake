import React from "react";
import Input from "./input";

const Form = ({
  step,
  title,
  state,
  stateHandler,
  addGroup,
  removeGroup,
  incrementStep,
  decrementStep,
}) => {
  const [validations, setValidations] = React.useState({
    personal: false,
    contact: false,
    experience: false,
    education: false,
    achievements: false,
    skills: false,
    software: false,
    courses: false,
    certification: false,
    projects: false,
    languages: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const isValid = e.target.checkValidity();
    setValidations({ ...validations, [title]: true });
    if (isValid) {
      incrementStep();
    }
  };

  return (
    <React.Fragment>
      <form
        className="form h-full p-6 overflow-y-auto"
        onSubmit={submitHandler}
      >
        <h1 className="text-center text-2xl font-medium py-3 font-body">
          {`${title.slice(0, 1).toUpperCase()}${title.slice(1)}`}
        </h1>
        {!Array.isArray(state)
          ? Object.keys(state).map((elem) => (
              <Input
                key={elem}
                name={elem}
                value={state[elem]}
                changeHandler={(e) => stateHandler(e, title)}
                validated={validations[title]}
              />
            ))
          : state.map((obj, index) => {
              return (
                <FormGroup
                  data={obj}
                  id={index}
                  stateHandler={(e) => stateHandler(e, title, index)}
                  removeGroup={() => removeGroup(title, index)}
                  key={`${index}-${title}`}
                  validated={validations[title]}
                />
              );
            })}
        {Array.isArray(state) && (
          <button
            onClick={() => addGroup(title)}
            type="button"
            className="bg-blue-600 text-white font-medium px-6 py-2 text-md rounded-md shadow-lg mt-4 mb-10 block mx-auto active:shadow-none"
          >
            {`Add ${title}`}
          </button>
        )}
        <div className="flex justify-between py-6 px-4">
          {step != 1 && (
            <button
              onClick={decrementStep}
              type="button"
              className="bg-blue-600 text-white font-medium px-6 py-2 text-md rounded-md shadow-lg mt-4 mb-10 block mx-auto active:shadow-none"
            >
              {`Previous page`}
            </button>
          )}
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium px-6 py-2 text-md rounded-md shadow-lg mt-4 mb-10 block mx-auto active:shadow-none"
          >
            {step === 11 ? `Preview + Submit` : `Save + Continue`}
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

const FormGroup = ({ data, stateHandler, removeGroup, validated }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg my-6">
      <button
        type="button"
        className="text-white font-medium text-md bg-red-600 w-full md:w-1/2 block mx-auto py-3 rounded-md shadow-lg active:shadow-none mt-4 my-10"
        onClick={removeGroup}
      >
        Delete Group
      </button>
      {Object.keys(data).map((elem, index) => {
        return (
          <Input
            validated={validated}
            changeHandler={stateHandler}
            name={elem}
            value={data[elem]}
            key={`${index}-${elem}`}
          />
        );
      })}
    </div>
  );
};

export default Form;
