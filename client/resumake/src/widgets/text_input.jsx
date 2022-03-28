import React from "react";

const TextInput = ({
  name,
  label,
  required = false,
  placeholder,
  handleChange,
  value,
}) => {
  return (
    <React.Fragment>
      <label
        htmlFor={name}
        className="my-6 text-base w-full md:w-1/2 block md:mx-auto font-body"
      >
        {label} {required && `*`}
        <input
          required={required}
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder || ""}
          className="w-full text-base mt-1 border-2 border-gray-200 px-2 py-3 bg-gray-50 rounded-md outline-none focus:border-blue-600 block"
        />
      </label>
    </React.Fragment>
  );
};

export default TextInput;
