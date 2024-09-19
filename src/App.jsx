import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ChanceWiese from "./portfolios/chancewiese";

function App() {
   return (
      <Layout>
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="chancewiese" element={<ChanceWiese />} />
            </Routes>
         </Router>
      </Layout>
   );
}

export default App;
