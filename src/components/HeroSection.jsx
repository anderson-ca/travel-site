import React from 'react'
import '../App';
import { Button } from './Button';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
               
            </div>
        </div>
    )
}

export default HeroSection
