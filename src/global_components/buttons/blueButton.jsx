import React from "react";

export default function BlueButton({ onClick, children }) {
  return (
    <>
      <button className="button" onClick={onClick}>
        {children}
        <img src="/images/button.png"></img>
      </button>
    </>
  );
}
