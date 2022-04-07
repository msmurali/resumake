import React from "react";
import Input from "../widgets/input";
import { useNavigate } from "react-router-dom";
import download from "downloadjs";

const PreviewPage = ({ formData, setStep, setDownloadStatus }) => {
  const navigate = useNavigate();

  const submitHandler = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "template-id": "template_001",
        ...formData,
      }),
    };

    navigate("/download");

    setDownloadStatus("inprogress");

    const blob = await fetch("/generate", requestOptions)
      .then((res) => res.blob())
      .catch((err) => console.log(err));

    download(blob, `${formData.personal["first-name"]}_resume.pdf`);

    setDownloadStatus("completed");
  };

  return (
    <React.Fragment>
      <header className="bg-blue-600 text-white p-8 font-medium font-body text-3xl">
        Preview
      </header>
      <form
        className="form h-full p-6 overflow-y-auto"
        onSubmit={submitHandler}
      >
        {Object.keys(formData).map((key, index) => (
          <div className="bg-gray-50 p-6 rounded-lg my-6" key={key}>
            <div className="flex w-full md:w-1/2 mx-auto justify-between items-center">
              <h1 className="text-center text-2xl font-medium py-3 font-body">
                {`${key.slice(0, 1).toUpperCase()}${key.slice(1)}`}
              </h1>
              <button
                onClick={() => {
                  setStep(index + 1);
                  navigate("/create");
                }}
                className="font-medium text-white py-2 px-4 rounded bg-blue-600 shadow-lg active:shadow-none"
              >
                Edit
              </button>
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
              : Object.keys(formData[key]).map((elem, indx) => {
                  if (formData[key][elem] !== "") {
                    return (
                      <Input
                        name={elem}
                        value={formData[key][elem]}
                        key={`${elem}-${indx}`}
                        readOnly={true}
                      />
                    );
                  }
                })}
          </div>
        ))}
        <div>
          <button
            type="button"
            onClick={submitHandler}
            className="mx-auto block mt-6 mb-10 bg-blue-600 active:bg-blue-700 rounded shadow-lg active:shadow-none py-3 px-5 font-medium font-body text-white"
          >
            Generate Resume
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default PreviewPage;
