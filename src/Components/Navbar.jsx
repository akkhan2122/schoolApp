import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Picture/logo.png';
import Button from '../Components/Button';
import Buttons from '../Components/Buttons';

export default function Navbar(props) {
  const [isActive, setIsActive] = useState(false);
  const [showExploreContent, setShowExploreContent] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const handleExploreClick = () => {
    setShowExploreContent(!showExploreContent);
  };

  const handleLinkClick = () => {
    setIsActive(false);
    setShowExploreContent(false); // Hide the Explore content when any link is clicked
  };

  return (
    <div>
      <section id="header">
        
        <div className="logo">
          <img className='logo1' src={Logo} alt="Logo" />
        </div>
        <div id="mobile">
          <i id="bar" className="fas fa-outdent" onClick={toggleNavbar}></i>
        </div>
        <ul id="navbar" className={isActive ? 'active' : ''}>
          <li><button id="close" onClick={toggleNavbar}><i class="fa-solid fa-xmark"></i></button></li>
          <li><Link to="/" className="active" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/Abouts" onClick={handleLinkClick}>Abouts</Link></li>
          <li><Link to="/Staff" onClick={handleLinkClick}>Staff</Link></li>
          <li><Link to="/Gallerys" onClick={handleLinkClick}>Gallery</Link></li>
          <li><Link to="/Testinomial" onClick={handleLinkClick}>Testinomial</Link></li>
          <li><Link to="/Contact" onClick={handleLinkClick}>Contact</Link></li>
          <li>
            <Button text="Explore" onClick={handleExploreClick} />
          </li>
        </ul>
      </section>
      {showExploreContent && (
        <div className="explore-content">
          <h2><Link to="/Attendence" onClick={handleLinkClick}><Buttons text="Attendence" /></Link></h2>
          <h2><Link to="/Calender" onClick={handleLinkClick}><Buttons text="Calender" /></Link></h2>
          <h2><Link to="/NoticeBoard" onClick={handleLinkClick}><Buttons text="Notice Board" /></Link></h2>
          <h2><Link to="/Payfees" onClick={handleLinkClick}><Buttons text="Pay fees" /></Link></h2>
          <h2><Link to="/Blogs" onClick={handleLinkClick}><Buttons text="Blogs" /></Link></h2>
          <h2><Link to="/Tc" onClick={handleLinkClick}><Buttons text="T.C" /></Link></h2>
          <h2><Link to="/Support" onClick={handleLinkClick}><Buttons text="Support" /></Link></h2>
        </div>
      )}
    </div>
  );
}
