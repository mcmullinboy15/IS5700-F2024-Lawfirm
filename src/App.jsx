import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Hamnerben from "./portfolios/hamnerben";

import ChanceWiese from "./portfolios/chancewiese";
import Mcmullinboy15 from "./portfolios/mcmullinboy15";
import AaricP from "./portfolios/aaricp";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hamnerben" element={<Hamnerben />} />
          <Route path="/mcmullinboy15" element={<Mcmullinboy15 />} />
          <Route path="/chancewiese" element={<ChanceWiese />} />
          <Route path="/aaricp" element={<AaricP />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
