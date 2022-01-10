import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ContentHome from './components/ContentHome';
import Footer from './components/Footer';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Routes/Home';
import Projects from './Routes/Projects';
import About from './Routes/About';
import Contact from './Routes/Contact';




const rootElement = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Projects" element={<Projects />} />
        <Route path="About" element={<About/>}>
          
          <Route path="Contact" element={<Contact/>} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);




// function App() {
//   return (


// <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route index element={<Home />} />
//         <Route path="Projects" element={<Projects />}>
          
//         </Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")


//     // <div>
//     //   <Routes>
//     //     {/* <Header /> */}
      
//     //     <Routes>
//     //       <Route path="/">
//     //         element={<Home />}
//     //       </Route>

//     //       <Route path="/Projects">
//     //       element={<Projects />}
//     //       </Route>

//     //       <Route path="/About">
//     //       element={<About />}
//     //       </Route>

//     //       <Route path="/Contact">
//     //       element={<Contact />}
//     //       </Route>

//     //     </Routes>



//     //     <ContentHome />
//     //     <Footer />

      
        
//     // </Routes>
      
//     // </div>
//   );
// }

// export default App;
