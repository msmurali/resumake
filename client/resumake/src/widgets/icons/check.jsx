import React from "react";

const CheckIcon = ({ width, height }) => {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        width={width}
        height={height}
        viewBox="0 0 64 64"
        enableBackground="new 0 0 64 64"
      >
        <g id="Check">
          <path d="M46.5136986,19.1436005c-0.4706993-0.2852001-1.0868988-0.1309013-1.3700981,0.3426991L31.5079002,42.2118988   l-8.7080994-11.6112995c-0.3310013-0.4413986-0.9580002-0.5312996-1.3993912-0.2001991   c-0.4414101,0.3311005-0.5312099,0.9580002-0.2002087,1.3994007l9.5995998,12.7998009   c0.1894989,0.2519989,0.4863987,0.3993988,0.7999001,0.3993988c0.0165997,0,0.0340996,0,0.0517082-0.0009003   c0.3320007-0.017601,0.6337891-0.1982994,0.8046913-0.4844017l14.4003983-23.9999981   C47.1407013,20.0410004,46.9873009,19.4267998,46.5136986,19.1436005z" />
          <path d="M32,0c-17.6730995,0-32,14.3268995-32,32s14.3268995,32,32,32s32-14.3269005,32-32S49.6730995,0,32,0z M32,62   c-16.5419998,0-30-13.457901-30-30c0-16.5419998,13.4579992-30,30-30c16.542099,0,30,13.4580002,30,30   C62,48.542099,48.542099,62,32,62z" />
        </g>
      </svg>
    </React.Fragment>
  );
};

export default CheckIcon;
