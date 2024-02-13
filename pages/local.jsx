import React from 'react';
import NavBar from '@/global_components/navbar';
import '../src/app/globals.css';

export default function Local() {
    return (
        <>
        <div className="nav-bar-container"><NavBar></NavBar></div>

        <div className="relative">
            <div className="gradient-orb top-orb"></div>
            <div className="gradient-orb mid-orb"></div>
        </div>

        <div className="page-header-div">
            <h1>Local Project</h1>
            <h3>PLACEHOLDER TEXT</h3>
            
            <p className="body-text sub-description">
            We're a student run organization partnering with local and international organizations to amplify their impact through mathematics, computer science and data science.
            </p>
        </div>
        </>
        
    );
}