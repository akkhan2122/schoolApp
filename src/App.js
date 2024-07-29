import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"; 
import Abouts from "./Pages/Abouts"; 
import Staff from "./Pages/Staff"; 
import Gallerys from "./Pages/Gallerys"; 
import Testinomial from "./Pages/Testinomial"; 
import Contact from "./Pages/Contact"; 
import Attendence from "./Pages/Attendence"; 
import Calender from "./Pages/Calender"; 
import NoticeBoard from "./Pages/NoticeBoard"; 
import Payfees from "./Pages/Payfees"; 
import Blogs from "./Pages/Blogs"; 
import Tc from "./Pages/Tc"; 
import Support from "./Pages/Support"; 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Abouts" element={<Abouts />} />
          <Route path="/Staff" element={<Staff/>} />
          <Route path="/Gallerys" element={<Gallerys/>} />
          <Route path="/Testinomial" element={<Testinomial/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Attendence" element={<Attendence/>} />
          <Route path="/Calender" element={<Calender/>} />
          <Route path="/NoticeBoard" element={<NoticeBoard/>} />
          <Route path="/Payfees" element={<Payfees/>} />
          <Route path="/Blogs" element={<Blogs/>} />
          <Route path="/Tc" element={<Tc/>} />
          <Route path="/Support" element={<Support
          />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
