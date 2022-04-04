import React from "react";

const TextArea = ({
  name,
  label,
  required,
  placeholder,
  value,
  handleChange,
  validated,
  pattern,
  title,
}) => {
  return (
    <React.Fragment>
      <label
        htmlFor={name}
        className="my-4 text-base w-full md:w-1/2 block md:mx-auto font-body"
      >
        {label} {required && `*`}
        <textarea
          pattern={pattern}
          required={required || false}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder || ""}
          className={`w-full text-base mt-1 border-2 border-gray-200 p-2 bg-gray-50 rounded-md outline-none focus:border-blue-600 block ${
            validated
              ? "invalid:border-red-500 focus:invalid:border-red-500"
              : ""
          }`}
          title={title || ""}
        />
      </label>
    </React.Fragment>
  );
};

export default TextArea;
