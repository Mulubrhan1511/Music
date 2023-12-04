
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React,{createContext, useContext,useEffect,useReducer} from "react";
import Sidebar from './components/Sidebar';
import Home from './components/screen/Home';
import Edit from './components/screen/Edit';
import AddSong from './components/screen/AddSong';
import Album from './components/screen/Album';
import Artist from './components/screen/Artist';
import Genre from './components/screen/Genre';
import About from './components/screen/About';
function App() {
  return (
    
    <BrowserRouter>

    <div className="App">
      
      <div className='Content'>
      <Sidebar/>
     <div className="main-content">
     <div>
    <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addsong" element={<AddSong />} />
          <Route exact path="/genre" element={<Genre />} />
          <Route exact path="/album" element={<Album />} />
          <Route exact path="/artist" element={<Artist />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/edit/:songid" element={<Edit />} />
          
         
          
    </Routes>
</div>
     </div>
    </div>
    
   
     
   
    
       
    </div>
   
    
    </BrowserRouter>
    
  );
}

export default App;
