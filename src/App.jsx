import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Jkamin0 from "./portfolios/jkamin0";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jkamin0" element={<Jkamin0 />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
