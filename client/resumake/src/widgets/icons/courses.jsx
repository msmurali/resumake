import React from "react";

const CoursesIcon = ({ color, height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28ZM2.24 28C2.24 42.2269 13.7731 53.76 28 53.76C42.2269 53.76 53.76 42.2269 53.76 28C53.76 13.7731 42.2269 2.24 28 2.24C13.7731 2.24 2.24 13.7731 2.24 28Z"
        fill={color}
      />
      <path
        d="M10 21.4615L28 31.9231L43.75 22.7692V42.5H46V21.4615L28 11L10 21.4615Z"
        fill={color}
      />
      <path
        d="M16.75 26.8466V38.4615L28 45L39.25 38.4615V26.8466L28 33.3851L16.75 26.8466Z"
        fill={color}
      />
    </svg>
  );
};

export default CoursesIcon;
