import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Rhett from "./portfolios/JorgenGear";
import McMullinBoy15 from "./portfolios/McMullinBoy15";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#FFD2D2",
      main: "#FF0000",
      dark: "#8B0000",
    },
    secondary: {
      light: "#FFD2D2",
      main: "#FF0000",
      dark: "#8B0000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={(theme)}>
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mcmullinboy15" element={<McMullinBoy15 />} />
          <Route path="/JorgenGear" element={<Rhett />} />
        </Routes>
      </Router>
    </Layout>
    </ThemeProvider>
  );
}

export default App;
