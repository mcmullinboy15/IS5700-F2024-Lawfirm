import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Mrsean8615 from "./portfolios/Mrsean8615";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mrsean8615" element={<Mrsean8615 />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
