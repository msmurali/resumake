import React from "react";
import TextInput from "../widgets/text_input";

const ContactForm = ({ state, stateHandler }) => {
  return (
    <form className="form mx-auto p-6">
      <TextInput
        name="mobile"
        value={state["mobile"]}
        handleChange={stateHandler}
        placeholder="9340729826"
        label="Mobile"
        required
        type="text"
        maxLength={10}
        minLength={10}
      />
      <TextInput
        name="telephone"
        value={state["telephone"]}
        handleChange={stateHandler}
        placeholder="044-2985293"
        label="Telephone"
        type="text"
        maxLength={10}
        minLength={10}
      />
      <TextInput
        name="linked-in"
        value={state["linked-in"]}
        handleChange={stateHandler}
        placeholder="www.linkedin.com/mark-twain"
        label="Linked-in"
        type="url"
      />
      <TextInput
        name="facebook"
        value={state["facebook"]}
        handleChange={stateHandler}
        placeholder="www.facebook.com/mark-twain"
        label="Facebook"
        type="url"
      />
      <TextInput
        name="email"
        value={state["email"]}
        handleChange={stateHandler}
        placeholder="marktwain@emial.com"
        label="Email"
        type="email"
        required
      />
    </form>
  );
};

export default ContactForm;
