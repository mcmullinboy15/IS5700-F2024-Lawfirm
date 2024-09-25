import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import JohnParker from "./portfolios/johnparker";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/johnparker" element={JohnParker} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
