import React from "react";
import "./home.css";
import WhiteButton from "@/global_components/buttons/whiteButton";

export default function Global() {
  return (
    <>
      <div className="global-container">
        <div className="text-container">
          <h2>Global Project</h2>
          <div>
            We are using climate, financial, and satellite data to predict
            famine in affected regions. We are conducting data-driven research
            to develop an intimate understanding of agricultural supply chains
            and their markets. Our learnings power in-house mathematical models
            which help us draw practical utility from our data.
          </div>
          <WhiteButton>SEE MORE</WhiteButton>
        </div>
        <img src="/images/global-project.png"></img>
      </div>
    </>
  );
}
