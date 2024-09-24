import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Rhett from "./portfolios/JorgenGear";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rhettjorgensen" element={<Rhett />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
