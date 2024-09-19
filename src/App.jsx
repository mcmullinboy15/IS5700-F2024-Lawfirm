import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Mcmullinboy15 from "./portfolios/mcmullinboy15";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mcmullinboy15" element={<Mcmullinboy15 />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
