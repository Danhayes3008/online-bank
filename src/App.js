import React from 'react';
import{Routes, Route} from "react-router-dom";
//components
import Navbar from "./components/Navbar";
import Personnel from "./components/Personnel";
import Business from "./components/Business";
import Login from './components/login';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Personnel />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/login" element={<Login />} />
        </Routes> 
      </main>      
    </div>
  );
}

export default App;
