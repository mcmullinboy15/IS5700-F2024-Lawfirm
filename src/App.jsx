import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Practices from "./pages/Practices";
// import News from "./pages/News";
// import Lawyers from "./pages/Lawyers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/practices" element={<Practices />} />
        {/* <Route path="/lawyers" element={<Lawyers />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/news" element={<News />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
