import React, { useRef, useEffect, useState } from 'react';
import '../assets/css/style.css'; // Create this CSS file for animations

import facebook from "../assets/Updated Icons/Facebook-1.png";
import instagram from "../assets/Updated Icons/Instagram-1.png";
import twitter from "../assets/Updated Icons/Twitter-1.png";
import dribble from "../assets/Updated Icons/Dribble1.png";
import Tiktok from "../assets/Updated Icons/Tiktok-1.png";
import LinkedIn from "../assets/Updated Icons/LinkedIn-1.png";

const IconsAnimation = ({ hovered }) => {
  const iconsRef = useRef([]);

  useEffect(() => {
    if (hovered) {
      iconsRef.current.forEach((icon, index) => {
        const angle = (index / iconsRef.current.length) * Math.PI * 2;
        const radius = 100; // Adjust the radius as needed
        icon.style.transform = `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`;
      });
    } else {
      iconsRef.current.forEach((icon) => {
        icon.style.transform = 'translate(0, 0)';
      });
    }
  }, [hovered]);

  return (
    <div className="icons-container">
      <img ref={(el) => (iconsRef.current[0] = el)} src={facebook} alt="Facebook" style={{ width: "40px", height: "40px" }} />
      <img ref={(el) => (iconsRef.current[1] = el)} src={dribble} alt="Dribbble" style={{ width: "40px", height: "40px" }} />
      <img ref={(el) => (iconsRef.current[2] = el)} src={twitter} alt="Twitter" style={{ width: "40px", height: "40px" }} />
      <img ref={(el) => (iconsRef.current[3] = el)} src={Tiktok} alt="Tiktok" style={{ width: "40px", height: "40px" }} />
      <img ref={(el) => (iconsRef.current[4] = el)} src={LinkedIn} alt="LinkedIn" style={{ width: "40px", height: "40px" }} />
      <img ref={(el) => (iconsRef.current[5] = el)} src={instagram} alt="Instagram" style={{ width: "40px", height: "40px" }} />
    </div>
  );
};

export default IconsAnimation;