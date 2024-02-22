import React from "react";
import "./card.css";

export default function MissionCard({ img, description }) {
  return (
    <>
      <div className="card">
        <img src={img}></img>
        <div className="text">{description}</div>
      </div>
    </>
  );
}
