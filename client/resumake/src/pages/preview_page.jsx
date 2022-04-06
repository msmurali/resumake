import React from "react";
import Input from "../widgets/input";

const PreviewPage = ({ formData }) => {
  const submitHandler = (e) => e.preventDefault();

  return (
    <React.Fragment>
      <header className="bg-blue-600 text-white p-8 font-medium font-body text-3xl">
        Preview
      </header>
      <form
        className="form h-full p-6 overflow-y-auto"
        onSubmit={submitHandler}
      >
        {Object.keys(formData).map((key) => (
          <div className="bg-gray-50 p-6 rounded-lg my-6" key={key}>
            <div>
              <h1 className="text-center text-2xl font-medium py-3 font-body">
                {`${key.slice(0, 1).toUpperCase()}${key.slice(1)}`}
              </h1>
            </div>
            {Array.isArray(formData[key])
              ? formData[key].map((obj, indx) =>
                  Object.keys(obj).map((elem) => (
                    <Input
                      name={elem}
                      value={obj[elem]}
                      key={`${elem}-${indx}`}
                      readOnly={true}
                    />
                  ))
                )
              : Object.keys(formData[key]).map((elem, indx) => (
                  <Input
                    name={elem}
                    value={formData[key][elem]}
                    key={`${elem}-${indx}`}
                    readOnly={true}
                  />
                ))}
          </div>
        ))}
      </form>
    </React.Fragment>
  );
};

export default PreviewPage;
