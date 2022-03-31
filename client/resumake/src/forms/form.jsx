import React from "react";

const Form = ({ state, stateHandler, addGroup, removeGroup }) => {
  const submitHandler = (e) => e.preventDefault();

  return <form className="form mx-auto p-6" onSubmit={submitHandler}></form>;
};

export default Form;
