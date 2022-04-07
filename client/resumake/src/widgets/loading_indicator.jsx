import React from "react";

const LoadingIndicator = () => {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        preserveAspectRatio="xMidYMid meet"
        style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"
      >
        <defs>
          <clipPath id="__lottie_element_2">
            <rect width="24" height="24" x="0" y="0"></rect>
          </clipPath>
        </defs>
        <g clipPath="url(#__lottie_element_2)">
          <g
            transform="matrix(0.6966288685798645,-0.7174316644668579,0.7174316644668579,0.6966288685798645,-4.968727111816406,12.2496337890625)"
            opacity="1"
            style="display: block;"
          >
            <g opacity="1" transform="matrix(1,0,0,1,12,12)">
              <path
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity="0"
                strokeMiterlimit="10"
                stroke="rgb(0,0,0)"
                strokeOpacity="1"
                strokeWidth="2"
                d=" M-2.239000082015991,-8.718999862670898 C-6.126999855041504,-7.723999977111816 -9,-4.197999954223633 -9,0 C-9,0.08900000154972076 -8.99899959564209,0.1770000010728836 -8.996000289916992,0.26600000262260437"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </React.Fragment>
  );
};

export default LoadingIndicator;
