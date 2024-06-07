import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import {FaFacebook,FaTwitter,FaYoutube} from "react-icons/fa"
import { Dropdown } from './Dropdown';


export const Navbar = () => {
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  // Function to toggle the state of a dropdown
  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleClickOutside = (event) => {
    if (event.target.closest(".dropdown") === null) {
      setOpenDropdownIndex(null);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <div className="nav">
    <div className='navbar'>
        <div className="logo">
            <p>Secur<span>Hub</span></p>
        </div>
        <div className="links">
            <Link to="/">Home</Link>
            <Dropdown title="About Us" links={[
                { to: "/item1", text: "Item 1" },
                { to: "/item2", text: "Item 2" },
                { to: "/item3", text: "Item 3" }]}
                isOpen={openDropdownIndex === 0}
                toggleDropdown={() => toggleDropdown(0)}
            />
            <Dropdown title="Services" links={[
                { to: "/item4", text: "Item 4" },
                { to: "/item5", text: "Item 5" },
                { to: "/item6", text: "Item 6" }
                ]}
                isOpen={openDropdownIndex === 1}
                toggleDropdown={() => toggleDropdown(1)}
            />
            <Dropdown title="Pages" links={[
                { to: "/item4", text: "Item 4" },
                { to: "/item5", text: "Item 5" },
                { to: "/item6", text: "Item 6" }
                ]}
                isOpen={openDropdownIndex === 2}
                toggleDropdown={() => toggleDropdown(2)}
            />
            <Link to="/">Contact Us</Link>
        </div>
        
        <div className="icons">
            <FaFacebook/>
            <FaTwitter/>
            <FaYoutube/>
        </div>
    </div>
    </div>
  )
}
