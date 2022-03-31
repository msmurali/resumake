import React from "react";
import "./widget_styles.css";

const getRange = (min, max) =>
  Array.from({ length: max + 1 - min }, (_, k) => k + min);

const RangeInput = ({
  name,
  label,
  max,
  min,
  step,
  value,
  handleChange,
  required,
}) => {
  return (
    <React.Fragment>
      <label
        htmlFor={name}
        className="my-4 text-base w-full md:w-1/2 block md:mx-auto font-body"
      >
        {label} {required && `*`}
        <input
          name={name}
          required={required || false}
          type="range"
          max={max || Infinity}
          min={min || 0}
          onChange={handleChange}
          step={step || 1}
          value={+value || +min || 0}
          className="slider block appearance-none mt-6"
        />
        <div className="flex justify-between items-center opacity-50">
          {getRange(min, max).map((_, indx) => (
            <p className="w-6" key={indx}>
              <span className="flex justify-center items-center">|</span>
            </p>
          ))}
        </div>
        <div className="flex justify-between items-center ">
          {getRange(min, max).map((elem, indx) => (
            <p className="w-6" key={indx}>
              <span className="flex justify-center items-center">{elem}</span>
            </p>
          ))}
        </div>
      </label>
    </React.Fragment>
  );
};

export default RangeInput;
