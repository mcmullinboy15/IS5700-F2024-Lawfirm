import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Hamnerben from "./portfolios/hamnerben";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hamnerben" element={<Hamnerben />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
