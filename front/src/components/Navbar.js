import React from 'react'
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
function Navbar() {
  return (
    
    <div class="Navbar">
    <div class="log">
      <img src="https://res.cloudinary.com/dhw1mueq4/image/upload/v1701507162/youtube-music7134_awzqph.jpg" alt="Logo" />
    </div>
    <div class="Navbarsearch">
        <SearchIcon></SearchIcon>
        <input type="text" id="fname" name="fname" placeholder="Search" />
    </div>
    <div class="profile-dropdown">
    <img src="https://res.cloudinary.com/dhw1mueq4/image/upload/v1701191768/vixtlwhqncyog0qkm9bn.jpg" alt="Profile Icon" />
    <div class="dropdown-content">
      <ul>
        <a href='/profile'><li>Profile</li></a>
        <a href='/mymusic'><li>My Music</li></a>
        <a href='/logout'><li class="logout-item">Logout <LogoutIcon /></li></a>
        
      </ul>
    </div>
    </div>
  </div>
  
  
    
  )
}

export default Navbar