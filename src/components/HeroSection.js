import React from 'react';
import '../App.css';
import './BtnNav.css'
import { Button } from './Button';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <Button buttonStyle='btn--outline'>Get started</Button>
    </div>
  );
}

export default HeroSection;