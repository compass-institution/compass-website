import React from "react";

export default function BlueButton({ onClick, children }) {
  return (
    <>
      <button className="blue-button" onClick={onClick}>
        {children}
        <img src="/images/blue-button.png"></img>
      </button>
    </>
  );
}
