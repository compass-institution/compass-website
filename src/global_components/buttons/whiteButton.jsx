import React from "react";

export default function WhiteButton({ onClick, children }) {
  return (
    <>
      <button className="white-button" onClick={onClick}>
        {children}
        <img src="/images/white-button.png"></img>
      </button>
    </>
  );
}
