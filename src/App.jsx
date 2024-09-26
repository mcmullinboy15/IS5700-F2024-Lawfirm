import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

import Rhett from "./portfolios/JorgenGear";
import ChanceWiese from "./portfolios/chancewiese";
import Mcmullinboy15 from "./portfolios/mcmullinboy15";
import AaricP from "./portfolios/aaricp";
import KassieJenson from "./portfolios/kassiejenson";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      dark: '#18181B',
      light: '#FFFFFF',
    }
  }
})

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mcmullinboy15" element={<Mcmullinboy15 />} />
          <Route path="/chancewiese" element={<ChanceWiese />} />
          <Route path="/aaricp" element={<AaricP />} />
          <Route path="/kassiejenson" element={<KassieJenson />} />            
          <Route path="/JorgenGear" element={<Rhett />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
