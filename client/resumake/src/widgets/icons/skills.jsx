import React from "react";

const SkillsIcon = ({ color, height, width }) => {
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
        d="M45.4724 31.1611L42.2406 27.9985L45.4724 24.8361C45.9412 24.3988 46.0973 23.8523 45.9412 23.1964C45.7539 22.5561 45.348 22.1579 44.723 22.0018L40.3197 20.8772L41.5612 16.5202C41.7482 15.8802 41.6005 15.3332 41.116 14.8805C40.6634 14.3963 40.1168 14.2479 39.4764 14.4353L35.1203 15.6769L33.9957 11.2731C33.8395 10.6326 33.442 10.2345 32.8019 10.0784C32.1612 9.9064 31.6148 10.0551 31.1623 10.5234L28 13.7796L24.838 10.5235C24.3851 10.0394 23.8387 9.89105 23.1984 10.0784C22.5582 10.2346 22.1601 10.6327 22.004 11.2731L20.8796 15.677L16.5231 14.4354C15.8829 14.2479 15.3364 14.3963 14.8836 14.8806C14.3994 15.3333 14.251 15.8798 14.4386 16.5203L15.6799 20.8773L11.2765 22.0019C10.6519 22.158 10.2459 22.5561 10.0586 23.1965C9.90228 23.8524 10.0586 24.3989 10.527 24.8362L13.7591 27.9986L10.527 31.1611C10.0586 31.5983 9.90253 32.1449 10.0586 32.8005C10.2459 33.4409 10.6519 33.839 11.2765 33.9953L15.6799 35.1195L14.4386 39.4766C14.251 40.1168 14.3994 40.6631 14.8836 41.1163C15.3364 41.6003 15.8829 41.7483 16.5231 41.5611L20.8796 40.32L22.0041 44.7237C22.1602 45.364 22.5582 45.7699 23.1985 45.9415C23.8543 46.0975 24.4009 45.9415 24.8381 45.4732L28.0001 42.2406L31.1625 45.4734C31.4747 45.8166 31.8728 45.9883 32.3565 45.9883C32.4663 45.9883 32.6143 45.9727 32.8022 45.9418C33.4422 45.7542 33.84 45.3483 33.9961 44.7237L35.1202 40.3203L39.4766 41.5616C40.1171 41.7485 40.6637 41.6004 41.1162 41.1163C41.6004 40.6631 41.7487 40.1167 41.5615 39.4766L40.3203 35.1195L44.7233 33.9955C45.3485 33.8395 45.7541 33.4409 45.9415 32.8008C46.0976 32.145 45.9415 31.5983 45.4724 31.1611Z"
        fill={color}
      />
    </svg>
  );
};

export default SkillsIcon;
