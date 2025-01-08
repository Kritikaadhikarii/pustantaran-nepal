import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Background from "./components/Background";
import Funding from "./components/Funding";
import Products from "./components/Products";
import Resources from "./components/Resources";
import SupportUs from "./components/SupportUs";
import Team from "./components/Team";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/background" element={<Background />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/products" element={<Products />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/why-us" element={<WhyUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
