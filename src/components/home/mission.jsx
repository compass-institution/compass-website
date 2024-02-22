import React from "react";
import "./home.css";
import MissionCard from "../../global_components/cards/missionCard";
import BlueButton from "../../global_components/buttons/blueButton";

export default function Mission() {
  return (
    <div className="mission-container">
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
    </div>
  );
}
