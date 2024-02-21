import React from "react";
import "../mission.css";

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
