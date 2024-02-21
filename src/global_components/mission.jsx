import React from "react";
import "./mission.css";
import MissionCard from "./cards/missionCard";
import BlueButton from "./buttons/blueButton";

export default function Mission() {
  return (
    <>
      <h2>Our Mission</h2>
      <div className="card-container">
        <MissionCard
          img="/images/mission-card1.png"
          description="Create impactful career and learning experiences for student members"
        ></MissionCard>
        <MissionCard
          img="/images/mission-card2.png"
          description="Assist local nonprofit organizations in the San Diego area"
        ></MissionCard>
        <MissionCard
          img="/images/mission-card1.png"
          description="Conducting research inquiries with the aim of fostering positive societal impact on a global scale"
        ></MissionCard>
      </div>

      <BlueButton>LEARN MORE</BlueButton>
    </>
  );
}
