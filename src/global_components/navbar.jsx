import React from 'react';
import Link from 'next/link';
import './navbar.css';


const NavBar = () => {
  
    return (
    
    
        <div className="nav-bar">
        <div>
            <div className="w-[25.6px] h-[25.6px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                    <path d="M25.6101 13.0369C25.6101 19.6643 20.2375 25.0369 13.6101 25.0369C6.98269 25.0369 1.61011 19.6643 1.61011 13.0369C1.61011 6.40945 6.98269 1.03687 13.6101 1.03687C20.2375 1.03687 25.6101 6.40945 25.6101 13.0369Z" stroke="#0D1B37" strokeWidth="1.6"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.0356 11.6114L13.61 1.83691L12.1845 11.6114L2.41003 13.0369L12.1845 14.4624L13.61 24.2369L15.0356 14.4624L24.81 13.0369L15.0356 11.6114ZM13.6101 14.5369C14.4385 14.5369 15.1101 13.8653 15.1101 13.0369C15.1101 12.2085 14.4385 11.5369 13.6101 11.5369C12.7816 11.5369 12.1101 12.2085 12.1101 13.0369C12.1101 13.8653 12.7816 14.5369 13.6101 14.5369Z" fill="#0D1B37"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.6205 11.2922L7.41528 6.84204L11.8654 13.0473L7.41528 19.2526L13.6205 14.8024L19.8258 19.2526L15.3757 13.0473L19.8258 6.84204L13.6205 11.2922ZM13.61 14.5368C14.4384 14.5368 15.11 13.8652 15.11 13.0368C15.11 12.2083 14.4384 11.5368 13.61 11.5368C12.7816 11.5368 12.11 12.2083 12.11 13.0368C12.11 13.8652 12.7816 14.5368 13.61 14.5368Z" fill="#0D1B37"/>
                </svg>
            </div>
            <p className="compass">COMPASS</p>
        </div>
        
        <div className="links">
            <p className="page-link">about us</p>
            <p className="page-link">global</p>
            <p className="page-link">local</p>
            <p className="page-link">blog</p>
            <p className="page-link">join us</p>
        </div>    
    </div>
            

    
    );
};

export default NavBar;