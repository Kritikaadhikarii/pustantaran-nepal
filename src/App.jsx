import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Background from "./components/Background";
import Funding from "./components/Funding";
import Products from "./components/Products";
import Resources from "./components/Resources";
import SupportUs from "./components/SupportUs";
import Team from "./components/Team";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/background" element={<Background />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/products" element={<Products />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
