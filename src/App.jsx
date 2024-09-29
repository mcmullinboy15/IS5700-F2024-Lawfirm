import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

import Jkamin0 from "./portfolios/jkamin0";
import Hamnerben from "./portfolios/hamnerben";
import Rhett from "./portfolios/JorgenGear";
import ChanceWiese from "./portfolios/chancewiese";
import Mcmullinboy15 from "./portfolios/mcmullinboy15";
import AaricP from "./portfolios/aaricp";
import RyanPlitt from "./portfolios/ryanplitt";
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
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hamnerben" element={<Hamnerben />} />
            <Route path="/mcmullinboy15" element={<Mcmullinboy15 />} />
            <Route path="/chancewiese" element={<ChanceWiese />} />
            <Route path="/aaricp" element={<AaricP />} />
            <Route path="/jkamin0" element={<Jkamin0 />} />
            <Route path="/kassiejenson" element={<KassieJenson />} />    
            <Route path="/JorgenGear" element={<Rhett />} />
            <Route path="/ryanplitt" element={<RyanPlitt />} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
