import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from './Routes/Home';
import Projects from './Routes/Projects';
import About from './Routes/About';
import Contact from './Routes/Contact';
import NotFound from './Routes/NotFound';


function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App
