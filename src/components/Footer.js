import React from 'react';
import '../assets/Footer.css';
import { FaMapMarkerAlt, FaUtensils, FaInfoCircle } from 'react-icons/fa'; // Import icons for routers

function Footer() {
  const phoneNumber = '1-808-866-7082';

  return (
    <div className="footer">
      <div className="footer-content">
        <h4>For more informations and bookings,
          <br></br> 
          message Jimmi Aloha at</h4>
        <p>
          <a className="phone-link" href={`tel:${phoneNumber}`}>{phoneNumber}</a> (Click to text)
        </p>
      </div>
      <div className="separator"></div>
      <div className="router-icons">
        {/* Add router icons with links to your pages */}
        <a href="/MauiMap" title="Map Page">
          <FaMapMarkerAlt size={24} />
        </a>
        <a href="/food-info" title="Food Info Page">
          <FaUtensils size={24} />
        </a>
        <a href="/general-info" title="General Info Page">
          <FaInfoCircle size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
