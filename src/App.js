import React from 'react';
import{Routes, Route} from "react-router-dom";
//components
import Navbar from "./components/Navbar";
import Personnel from "./components/Personnel";
import Business from "./components/Business";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Personnel />} />
          <Route path="/Business" element={<Business />} />
        </Routes> 
      </main>      
    </div>
  );
}

export default App;
