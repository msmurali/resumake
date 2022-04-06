import React from "react";

const TextInput = ({
  name,
  label,
  required,
  placeholder,
  handleChange,
  value,
  type,
  maxLength,
  minLength,
  validated,
  pattern,
  title,
  readOnly,
}) => {
  return (
    <React.Fragment>
      <label
        htmlFor={name}
        className="my-6 text-base w-full md:w-1/2 block md:mx-auto font-body"
      >
        {label} {required && `*`}
        <input
          readOnly={readOnly || false}
          pattern={pattern}
          required={required || false}
          type={type || "text"}
          name={name}
          maxLength={maxLength || 9999999}
          minLength={minLength || 0}
          value={value}
          onChange={handleChange}
          placeholder={placeholder || ""}
          className={`w-full text-base mt-1 border-2 border-gray-200 px-2 py-3 bg-gray-50 rounded-md outline-none focus:border-blue-600 block ${
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

export default TextInput;
