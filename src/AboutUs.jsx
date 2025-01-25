import React, { useEffect } from 'react';
import './AboutUs.css';
import { useDispatch } from 'react-redux';
import { addItem } from './CreateSlice';

function  AboutUs() {
  
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">Welcome to EcoBloom – Where Nature Blooms with Life! 🌿</p>
      <p className="about-us-content">
      we believe every space can come to life with the right touch of greenery. From easy-to-care-for succulents to blooming orchids, and from vibrant houseplants to majestic indoor trees, we've curated a collection of plants that bring nature’s beauty into your home, office, or virtual space.
     </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
      Transform Your Space into a Green Oasis 🌿 : Whether you're looking to spruce up your living room with a statement plant or need a few lush accents for your workspace, Krish’s Plants has everything you need. Our plants don’t just look good—they improve air quality, promote relaxation, and boost your well-being.
      </p>
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

      <p className="about-us-content">
      Nurture your surroundings. Nourish your soul. 🌱
      </p>
    </div>
  );
}

export default AboutUs;
