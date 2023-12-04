import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

import DashboardIcon from '@mui/icons-material/Dashboard';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import AlbumIcon from '@mui/icons-material/Album';



export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link:"/"
    },
    {
        title: "Add Song",
        icon: <MusicNoteIcon />,
        link:"/addsong"
    },
    {
        title: "About",
        icon: <DashboardIcon />,
        link:"/about"
    },
    
   
   

]
export const Playlist = [
    {
        title: "Artist",
        icon: <MusicNoteIcon />,
        link:"/artist"
    },
    {
        title: "Album",
        icon: <AlbumIcon />,
        link:"/album"
    },
    {
        title: "Genre",
        icon: <TheaterComedyIcon />,
        link:"/gener"
    },
    
   
   

]

