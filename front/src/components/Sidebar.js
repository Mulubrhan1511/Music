import React, { useEffect, useState } from "react";
import '../App.css';
import { SidebarData } from './SidebarData';

import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import AlbumIcon from '@mui/icons-material/Album';
import MicIcon from '@mui/icons-material/Mic';
function Sidebar() {
 
  const [playlists, setPlaylists] = useState([])
  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await fetch('/stats'); // Replace with your backend API endpoint
      const data = await response.json();
      setPlaylists(data);
      console.log(data)
    } catch (error) {
      console.error(error);
      // Handle error state
    }
  };
  return (
    <div className='Sidebar'>
      <div className='lib'>
        Library
      </div>
      <div className='SidebarList'>
      <ul >
            {SidebarData.map((val,key)=> {
                return (<li key={key} className='row'
                id= {window.location.pathname === val.link ? "active": ""}
                onClick={()=>{
                    window.location.pathname = val.link;
                }}
                >
                    
                <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                
            
            
        </li>
        );
                
            })}
        </ul>
      </div>
      <div className='lib'>
      Playlist
      </div>
      <div className='SidebarList'>
      <ul >
      <li  className='row'
                id= {window.location.pathname === "/song" ? "active": ""}
                onClick={()=>{
                  window.location.pathname ="/";
              }}
                >
                    
                
                <div id="icon"><AlbumIcon/></div> 
                <div id="title">
                Song
  <sup style={{ verticalAlign: 'super', fontSize: 'smaller' }}><span style={{ color: 'red' }}>{playlists.totalSongs

}</span></sup>&nbsp;
</div>
                
            
        </li>
            <li  className='row'
                 id= {window.location.pathname === "/artist" ? "active": ""}
                 onClick={()=>{
                   window.location.pathname ="/artist";
               }}
                
                >
                    
                <div id="icon"><MicIcon/></div> 
                
                <div id="title">
  Artist 
  <sup style={{ verticalAlign: 'super', fontSize: 'smaller' }}><span style={{ color: 'red' }}>{playlists.totalArtists}</span></sup>&nbsp;
</div>


                
            
        </li>
        <li  className='row'
                id= {window.location.pathname === "/album" ? "active": ""}
                onClick={()=>{
                  window.location.pathname ="/album";
              }}
                >
                    
                
                <div id="icon"><AlbumIcon/></div> 
                <div id="title">
                Album
  <sup style={{ verticalAlign: 'super', fontSize: 'smaller' }}><span style={{ color: 'red' }}>{playlists.totalAlbums
}</span></sup>&nbsp;
</div>
                
            
        </li>
        <li  className='row'
                 id= {window.location.pathname === "/genre" ? "active": ""}
                 onClick={()=>{
                   window.location.pathname ="/genre";
               }}
                >
                <div id="icon"><TheaterComedyIcon/></div> 
                <div id="title">
                Genre
  <sup style={{ verticalAlign: 'super', fontSize: 'smaller' }}><span style={{ color: 'red' }}>{playlists.totalArtists}</span></sup>&nbsp;
</div>
            
        </li>
        
                
            
        </ul>
      </div>
      
    </div>
  )
}

export default Sidebar