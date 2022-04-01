import React from "react";
import Input from "./input";

const Form = ({ title, state, stateHandler, addGroup, removeGroup }) => {
  const submitHandler = (e) => e.preventDefault();
  return (
    <form className="form mx-auto p-6" onSubmit={submitHandler}>
      {!Array.isArray(state)
        ? Object.keys(state).map((elem) => (
            <Input
              key={elem}
              name={elem}
              value={state[elem]}
              changeHandler={(e) => stateHandler(e, title)}
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
    </form>
  );
};

const FormGroup = ({ data, stateHandler, removeGroup }) => {
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
