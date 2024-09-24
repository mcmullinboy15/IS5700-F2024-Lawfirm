import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Jkamin0 from "./portfolios/jkamin0";

import ChanceWiese from "./portfolios/chancewiese";
import Mcmullinboy15 from "./portfolios/mcmullinboy15";
import AaricP from "./portfolios/aaricp";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mcmullinboy15" element={<Mcmullinboy15 />} />
          <Route path="/chancewiese" element={<ChanceWiese />} />
          <Route path="/aaricp" element={<AaricP />} />
          <Route path="/jkamin0" element={<Jkamin0 />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
