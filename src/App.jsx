// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar.jsx";
// import About from "./About.jsx";
// import Events from "./Events.jsx";
// import Newspaper from "./Newspaper.jsx";
// import Footer from "./Footer.jsx";
// import Home from "./Home.jsx"

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//       <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/newspaper" element={<Newspaper />} />
//       </Routes>
//       <Footer /> 
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Events from "./Events.jsx";
import Newspaper from "./Newspaper.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/newspaper" element={<Newspaper />} />
      </Routes>  
      {/* <Footer />  */}
    </Router>
  );
}

export default App;
