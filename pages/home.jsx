import React from 'react';
import NavBar from "@/global_components/navbar";
export default function HomePage() {
    return (
        <>
        <div className="nav-bar-container"><NavBar></NavBar></div>

        <div className="relative">
        
            <div className="gradient-orb top-orb-a"></div>
            <div className="gradient-orb mid-orb-a"></div>
        </div>

        <div className="page-header-div">
            <h1>COMPASS Institution</h1>
            <h3>MATHEMATICAL MODELING FOR SOCIAL GOOD</h3>
            
            <p className="body-text sub-description">
            We're a student run organization partnering with local and international organizations to amplify their impact through mathematics, computer science and data science.
            </p>
        </div>
        </>
    );
}