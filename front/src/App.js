
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React,{createContext, useContext,useEffect,useReducer} from "react";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/screen/Home';
function App() {
  return (
    
    <BrowserRouter>

    <div className="App">
      <Navbar/>
      <div className='Content'>
      <Sidebar/>
     <div className="main-content">
     <div>
<Routes>
          <Route exact path="/" element={<Home />} />
         
          
    </Routes>
</div>
     </div>
    </div>
    
   
     
   
    
       
    </div>
   
    
    </BrowserRouter>
    
  );
}

export default App;
